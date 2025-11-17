# Eleventy Academic Website

Benjamin Peeters - Postdoctoral Researcher at PIK

## Status

BASIC SETUP COMPLETE - Site is functional and serving on port 8005

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
# Site will be available at http://localhost:8005/en/

# Build for production
npm run build
```

## What's Working

### Core Infrastructure
- Eleventy 3.1.2 installed and configured
- Development server running on port 8005
- Build system functional (0.20s build time)
- Hot-reloading enabled

### Features Implemented
- Multilingual structure (EN/FR/ZH) with translation files
- Responsive layouts (base, page, post)
- Navigation with language switcher
- Math rendering (KaTeX)
- Code syntax highlighting (PrismJS)
- Image optimization plugin configured
- RSS feed template
- GitHub Actions deployment workflow

### Content Structure
```
src/
├── en/              # English content
│   ├── index.md     # Home page
│   ├── publications/
│   ├── blog/
│   ├── teaching/
│   └── data-code/
├── fr/              # French (to be populated)
├── zh/              # Chinese (to be populated)
├── _layouts/        # Templates
├── _includes/       # Components
├── _data/           # Site data & BibTeX
└── styles/          # CSS
```

## What Needs Work

### Priority 1: BibTeX Integration
Issue: eleventy-plugin-bibtex has compatibility issues with Eleventy 3.x
Need to implement custom BibTeX parsing solution or use alternative approach

### Priority 2: Content Migration
- Migrate existing .qmd files to .md format
- Convert Quarto-specific syntax to standard Markdown
- Handle R code blocks (static display or pre-rendering)

### Priority 3: Translations
- Add French content (fr/ directory)
- Add Chinese content (zh/ directory)

### Priority 4: Enhancements
- ORCID auto-sync implementation
- Custom bibliography display
- Blog posts
- Profile images and assets

## Configuration

### Key Files
- .eleventy.js - Main configuration
- package.json - Dependencies and scripts
- src/_data/site.js - Site metadata
- src/_data/locales - Translations

### Environment Variables
- ELEVENTY_ENV=production - For production builds

## Deployment

### GitHub Pages
Automated deployment configured via GitHub Actions (.github/workflows/deploy.yml)

To deploy:
1. Push to main or test/eleventy branch
2. GitHub Actions will build and deploy automatically
3. Configure repository Settings → Pages → Source: GitHub Actions

### Custom Domain
Create a CNAME file in root with: benjaminpeeters.com

## Known Issues

1. BibTeX Plugin Disabled - Needs custom solution
2. Math rendering works but needs testing with complex equations
3. R code execution not supported (by design in Eleventy)

## Next Steps

1. Implement custom BibTeX parsing
2. Migrate content from Quarto files
3. Populate French and Chinese versions
4. Add blog posts
5. Test all features thoroughly
6. Deploy to production

## Technical Details

- Framework: Eleventy v3.1.2
- Node.js: v22.17.0
- Template Engine: Nunjucks
- Markdown: markdown-it with KaTeX
- Build Time: approximately 0.20s
- Port: 8005 (dev server)

## Resources

- Eleventy Docs: https://www.11ty.dev/docs/
