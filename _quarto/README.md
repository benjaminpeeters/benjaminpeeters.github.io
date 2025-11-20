# Quarto Notes System

This directory contains source files for technical notes that are automatically rendered to HTML and integrated into the Jekyll website at /notes/.

## Quick Start

### Adding a New Note

1. Create your file in _quarto/ with one of these extensions:
   - .qmd - Quarto Markdown (recommended)
   - .Rmd - R Markdown (for R code execution)
   - .md - Plain Markdown (only if it contains cross-references)

2. Add YAML front matter:
   ```yaml
   ---
   title: "Your Note Title"
   author: "Benjamin Peeters"
   description: "Brief description for the index page"
   ---
   ```

3. Render the notes:
   ```bash
   ./bin/render-notes.sh
   ```

Your note will be available at benjaminpeeters.com/notes/your-filename/

### Watch Mode (Development)

For automatic re-rendering during editing:

```bash
./bin/render-notes.sh --watch
```

This monitors files for changes and re-renders automatically. Press Ctrl+C to stop.

## Supported Features

### Cross-References

#### Equations

Define equations with labels:
```markdown
$$
E = mc^2
$$ {#eq-einstein}
```

Reference them in text:
```markdown
As shown in @eq-einstein, energy and mass are equivalent.
```

#### Sections

Label sections:
```markdown
## Methods {#sec-methods}
```

Reference them:
```markdown
See @sec-methods for details.
```

#### Figures and Tables

```markdown
![Caption](image.png){#fig-example}

See @fig-example for visualization.
```

### R Code Execution (.Rmd files)

R Markdown files can execute R code and display results:

````markdown
```{r}
# Generate data
x <- 1:10
y <- x^2
plot(x, y, type = "l")
```
````

The code runs during rendering and outputs are embedded in the final HTML.

### Table of Contents

Automatically generated for all notes with --toc flag.

## Directory Structure

```
_quarto/                           # Source files (edit here)
├── README.md                      # This file
├── capital_motion_derivation.qmd  # Example .qmd
└── example_r_analysis.Rmd         # Example .Rmd

assets/quarto/                     # Rendered HTML (auto-generated)
├── capital_motion_derivation.html
└── example_r_analysis.html

_pages/en-us/notes/                # Jekyll wrappers (auto-generated)
├── index.md                       # Notes index at /notes/
├── capital_motion_derivation.md   # Wrapper with redirect
└── example_r_analysis.md          # Wrapper with redirect
```

## Render Script Details

### Location
bin/render-notes.sh

### What It Does

1. Detects files: Finds all .qmd, .Rmd, and .md files in _quarto/
2. Smart filtering: Skips plain .md files without cross-reference syntax
3. Renders with Quarto: Converts to self-contained HTML with:
   - Embedded resources (CSS, JavaScript)
   - Table of contents
   - Numbered equations
   - Clickable cross-references
4. Creates Jekyll wrappers: Generates redirect pages in _pages/en-us/notes/
5. Updates index: Auto-generates /notes/ index page listing all notes

### Output

Each source file produces:
- assets/quarto/{filename}.html - Self-contained rendered HTML
- _pages/en-us/notes/{filename}.md - Jekyll wrapper with redirect
- _pages/en-us/notes/index.md - Updated index listing

### Cross-Reference Detection

The script checks for these patterns in .md files:
- {#eq-...}, {#sec-...}, {#fig-...}, {#tbl-...} - Label definitions
- @eq-..., @sec-..., @fig-..., @tbl-... - References

Plain markdown files without these patterns are skipped.

## YAML Front Matter

### Required Fields

- title: The note title (displayed in browser and index)

### Optional Fields

- author: Author name (typically "Benjamin Peeters")
- description: Brief description for the index page
- date: Publication date

### Example

```yaml
---
title: "Advanced Topic Analysis"
author: "Benjamin Peeters"
description: "Detailed exploration of topic modeling techniques"
date: 2025-11-20
---
```

## Format Comparison

| Format | Best For | Executable Code | Syntax |
|--------|----------|----------------|--------|
| .qmd | Most use cases | Python, R, Julia, etc. | Quarto Markdown |
| .Rmd | R-specific analysis | R only | R Markdown |
| .md  | Simple notes with cross-refs | No | Markdown + Quarto refs |

Recommendation: Use .qmd for new notes unless you need R-specific features.

## Workflow Examples

### Adding a Mathematical Derivation

1. Create _quarto/my_derivation.qmd
2. Write content with equations and cross-references
3. Run ./bin/render-notes.sh
4. Commit all generated files
5. Push to trigger GitHub Actions deployment

### Updating an Existing Note

1. Edit the source file in _quarto/
2. Run ./bin/render-notes.sh (or use watch mode)
3. Commit changes (source + regenerated HTML + wrapper)
4. Push to deploy

### Development Workflow

```bash
# Start watch mode
./bin/render-notes.sh --watch

# Edit files in _quarto/
# Changes are automatically rendered
# Preview in browser at localhost:4000/notes/

# When satisfied, stop watch mode (Ctrl+C)
# Commit and push
```

## Troubleshooting

### "Skipping (plain markdown without cross-refs)"

This means your .md file doesn't contain cross-reference syntax. Either:
- Add cross-references using {#eq-label} and @eq-label syntax
- Rename to .qmd if you want it rendered anyway

### R Code Doesn't Execute

Ensure:
- File has .Rmd extension (not .qmd)
- R is installed and accessible
- Required R packages are installed

### Cross-References Not Working

Check:
- Labels use hyphens, not colons: {#eq-einstein} not {#eq:einstein}
- References use @ prefix: @eq-einstein not just eq-einstein
- Label and reference names match exactly

### HTML Not Updating

1. Verify source file was modified
2. Re-run ./bin/render-notes.sh
3. Check for error messages
4. Ensure Quarto is installed: quarto --version

## Installation Requirements

### System Requirements

- Quarto: Version 1.7+ (download at quarto.org/docs/get-started/)
- Pandoc: Included with Quarto
- R (optional): For .Rmd files only

### Verify Installation

```bash
quarto --version    # Should show 1.7 or higher
R --version         # Only needed for .Rmd files
```

## Integration with GitHub Actions

The workflow is compatible with GitHub Actions. Add this to your workflow:

```yaml
- name: Install Quarto
  uses: quarto-dev/quarto-actions/setup@v2
  with:
    version: 1.7.22

- name: Render notes
  run: ./bin/render-notes.sh
```

## Best Practices

1. Source control: Commit source files (.qmd, .Rmd) and generated files
2. Descriptive titles: Use clear, descriptive titles for better index
3. Add descriptions: Always include a description in YAML front matter
4. Test locally: Use watch mode during development
5. Cross-references: Label all important equations and sections
6. Self-contained: Files are self-contained - no external dependencies

## Examples

See these examples in this directory:
- capital_motion_derivation.qmd - Complex mathematical derivation
- example_r_analysis.Rmd - R code execution with plots

## Support

For issues with:
- Quarto rendering: Check Quarto documentation at quarto.org/docs/guide/
- Cross-references: See Quarto cross-references guide at quarto.org/docs/authoring/cross-references.html
- R Markdown: See R Markdown documentation at rmarkdown.rstudio.com/
