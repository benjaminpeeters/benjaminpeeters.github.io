#!/bin/bash
# Automatic Quarto notes renderer for Jekyll site
# Supports: .qmd, .Rmd, .md files
# Usage: ./bin/render-notes.sh [--watch]

set -e
shopt -s nullglob

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
QUARTO_DIR="$PROJECT_ROOT/_quarto"
OUTPUT_DIR="$PROJECT_ROOT/assets/quarto"
PAGES_DIR="$PROJECT_ROOT/_pages/en/notes"
INCLUDES_DIR="$PROJECT_ROOT/_includes/quarto"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create directories if they don't exist
mkdir -p "$OUTPUT_DIR"
mkdir -p "$PAGES_DIR"
mkdir -p "$INCLUDES_DIR"

# Function to check if file has cross-references
has_crossrefs() {
    local file="$1"
    grep -qE '\{#(eq|sec|fig|tbl)-|@(eq|sec|fig|tbl)-' "$file"
}

# Function to extract YAML metadata
get_yaml_field() {
    local file="$1"
    local field="$2"

    awk -v field="$field" '
        /^---$/ { if (in_yaml) exit; in_yaml=1; next }
        in_yaml && $1 == field":" {
            sub(/^[^:]+: */, "");
            gsub(/"/, "");
            print;
            exit
        }
    ' "$file"
}

# Function to extract content from Quarto HTML for Jekyll embedding
extract_quarto_content() {
    local html_file="$1"
    local output_file="$2"

    # Extract style block and main content using sed
    # This extracts everything between <style> and </style>, and <main> and </main>
    {
        echo '<div class="quarto-embedded-content">'
        echo '<style type="text/css">'
        sed -n '/<style>/,/<\/style>/{ /<style>/d; /<\/style>/d; p }' "$html_file"
        echo '</style>'
        sed -n '/<main class="content"/,/<\/main>/p' "$html_file"
        echo '</div>'
    } > "$output_file"

    return 0
}

# Function to render a single file
render_note() {
    local source_file="$1"
    local basename=$(basename "$source_file")
    local filename="${basename%.*}"
    local extension="${basename##*.}"

    echo -e "${BLUE}Rendering:${NC} $basename"

    if [ "$extension" = "md" ]; then
        if ! has_crossrefs "$source_file"; then
            echo -e "${YELLOW}  → Skipping (plain markdown without cross-refs)${NC}"
            return 0
        fi
    fi

    cd "$QUARTO_DIR"

    if quarto render "$basename" --to html --embed-resources --toc --quiet 2>&1; then
        if [ -f "${filename}.html" ]; then
            mv "${filename}.html" "$OUTPUT_DIR/"
            echo -e "${GREEN}  ✓ Rendered to HTML${NC}"

            # Extract content for Jekyll embedding
            extract_quarto_content "$OUTPUT_DIR/${filename}.html" "$INCLUDES_DIR/${filename}-content.html"
            echo -e "${GREEN}  ✓ Extracted content${NC}"

            cd "$PROJECT_ROOT"
            create_wrapper_page "$source_file" "$filename"
            return 0
        fi
    else
        echo -e "${RED}  ✗ Rendering failed${NC}"
        cd "$PROJECT_ROOT"
        return 1
    fi

    cd "$PROJECT_ROOT"
}

# Function to create Jekyll wrapper page
create_wrapper_page() {
    local source_file="$1"
    local filename="$2"

    local title=$(get_yaml_field "$source_file" "title")
    local description=$(get_yaml_field "$source_file" "description")
    local author=$(get_yaml_field "$source_file" "author")

    cat > "$PAGES_DIR/${filename}.md" << EOF
---
page_id: note_${filename}
layout: quarto-note
title: "${title}"
${author:+author: ${author}}
permalink: /notes/${filename}/
${description:+description: ${description}}
nav: false
toc:
  sidebar: left
---

{% include quarto/${filename}-content.html %}
EOF

    echo -e "${GREEN}  ✓ Created wrapper page${NC}"
}

# Function to generate notes index
generate_index() {
    echo -e "${BLUE}Generating notes index...${NC}"

    local index_file="$PAGES_DIR/index.md"

    cat > "$index_file" << 'EOF'
---
page_id: notes_index
layout: page
title: Research Notes
permalink: /notes/
description: Technical notes and derivations
nav: false
toc:
  sidebar: left
---

## Technical Notes

This page contains detailed technical notes, derivations, and research documentation.

### Available Notes

EOF

    local count=0
    for html_file in "$OUTPUT_DIR"/*.html; do
        if [ -f "$html_file" ]; then
            local basename=$(basename "$html_file" .html)
            local source_file=""

            for ext in qmd Rmd md; do
                if [ -f "$QUARTO_DIR/${basename}.${ext}" ]; then
                    source_file="$QUARTO_DIR/${basename}.${ext}"
                    break
                fi
            done

            if [ -n "$source_file" ]; then
                local title=$(get_yaml_field "$source_file" "title")
                local description=$(get_yaml_field "$source_file" "description")

                echo "- [${title}](/notes/${basename}/)" >> "$index_file"
                if [ -n "$description" ]; then
                    echo "  <br>*${description}*" >> "$index_file"
                fi
                echo "" >> "$index_file"

                count=$((count + 1))
            fi
        fi
    done

    if [ $count -eq 0 ]; then
        echo -e "\nNo notes found yet. Add .qmd, .Rmd, or .md files to \`_quarto/\` directory.\n" >> "$index_file"
    fi

    echo -e "${GREEN}✓ Index generated with $count notes${NC}"
}

# Function to render all notes
render_all() {
    echo -e "${BLUE}=== Rendering all notes ===${NC}\n"

    local count=0
    local failed=0

    for source_file in "$QUARTO_DIR"/*.{qmd,Rmd,md}; do
        if [ -f "$source_file" ]; then
            if render_note "$source_file"; then
                count=$((count + 1))
            else
                failed=$((failed + 1))
            fi
        fi
    done

    generate_index

    echo -e "\n${BLUE}=== Summary ===${NC}"
    echo -e "${GREEN}Rendered: $count${NC}"
    if [ $failed -gt 0 ]; then
        echo -e "${RED}Failed: $failed${NC}"
    fi
}

# Watch mode
watch_notes() {
    echo -e "${BLUE}=== Watching for changes in $QUARTO_DIR ===${NC}"
    echo -e "Monitoring: ${YELLOW}.qmd, .Rmd, .md${NC} files"
    echo -e "Press ${RED}Ctrl+C${NC} to stop\n"

    render_all

    echo -e "\n${BLUE}Watching for changes...${NC}\n"

    declare -A last_modified

    while true; do
        sleep 2

        for source_file in "$QUARTO_DIR"/*.{qmd,Rmd,md}; do
            if [ -f "$source_file" ]; then
                if [[ "$OSTYPE" == "darwin"* ]]; then
                    current_time=$(stat -f %m "$source_file" 2>/dev/null)
                else
                    current_time=$(stat -c %Y "$source_file" 2>/dev/null)
                fi

                if [ "${last_modified[$source_file]}" != "$current_time" ]; then
                    if [ -n "${last_modified[$source_file]}" ]; then
                        echo -e "\n${YELLOW}Change detected:${NC} $(basename "$source_file")\n"
                        if render_note "$source_file"; then
                            generate_index
                        fi
                    fi
                    last_modified[$source_file]=$current_time
                fi
            fi
        done
    done
}

# Main logic
case "$1" in
    --watch|-w)
        watch_notes
        ;;
    --help|-h)
        echo "Usage: $0 [--watch|--help]"
        echo ""
        echo "Renders Quarto notes (.qmd, .Rmd, .md) to HTML"
        echo ""
        echo "Options:"
        echo "  --watch, -w    Watch for file changes and auto-render"
        echo "  --help, -h     Show this help message"
        echo ""
        echo "Supported formats:"
        echo "  .qmd    Quarto Markdown (recommended)"
        echo "  .Rmd    R Markdown"
        echo "  .md     Plain Markdown (with cross-references)"
        ;;
    *)
        render_all
        ;;
esac
