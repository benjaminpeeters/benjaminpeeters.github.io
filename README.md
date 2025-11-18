# Benjamin Peeters - Personal Website (Hugo Branch)

This is the Hugo framework test branch for benjaminpeeters.com.

## About

This branch is part of a framework evaluation process to determine the best static site generator for my personal academic website. The site features multilingual content (English, French, and Chinese).

## Author

Benjamin Peeters
Postdoctoral Researcher at PIK (Potsdam Institute for Climate Impact Research)
GitHub: @benjaminpeeters
Website: benjaminpeeters.com

## Tech Stack

- Framework: Hugo (with Hugo Blox Builder)
- Version: Hugo Extended 0.152.1
- Node: v20
- Deployment: GitHub Pages
- Languages: English, French, Chinese

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
hugo server

# Build for production
hugo --minify
```

## Project Structure

```
├── config/           # Hugo configuration files
├── content/          # Content organized by language (en, fr, zh)
├── layouts/          # Custom layout templates
├── static/           # Static assets
├── assets/           # Source assets (processed by Hugo)
├── .github/          # GitHub Actions workflows
└── publications.bib  # Bibliography file (auto-imported)
```

## Publications

Publications are automatically imported from publications.bib using GitHub Actions. The workflow converts BibTeX entries to Hugo-compatible markdown files.

## License

AGPL-3.0
