# Benjamin Peeters - Personal Website

Personal academic website built with Quarto.

## Features

- Multilingual support: English, French, and Chinese
- Publications management: Automatic bibliography from BibTeX
- Blog: Integrated blog with RSS feed
- Responsive design: Mobile-friendly with light/dark mode toggle
- Green color scheme: Professional green-oriented theme
- Automated deployment: GitHub Actions for continuous deployment

## Local Development

### Prerequisites

- Quarto (v1.7.22 or later)
- R (for computational content, optional)

### Building the Site

Render the English version:
```bash
quarto render
```

Render the French version:
```bash
quarto render --profile fr
```

Render the Chinese version:
```bash
quarto render --profile zh
```

Render all versions:
```bash
quarto render && quarto render --profile fr && quarto render --profile zh
```

### Preview Locally

```bash
quarto preview
```

## Structure

```
.
├── _quarto.yml           # Main configuration (English)
├── _quarto-fr.yml        # French profile configuration
├── _quarto-zh.yml        # Chinese profile configuration
├── index.qmd             # Home page (English)
├── publications.qmd      # Publications page
├── publications.bib      # BibTeX bibliography
├── blog/                 # Blog directory
│   ├── index.qmd        # Blog listing page
│   └── posts/           # Blog posts
├── fr/                   # French content
│   ├── index.qmd
│   └── publications.qmd
├── zh/                   # Chinese content
│   ├── index.qmd
│   └── publications.qmd
├── custom.scss           # Light theme customization
├── custom-dark.scss      # Dark theme customization
└── styles.css            # Additional CSS styles
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

### Manual Deployment

1. Render all versions of the site
2. Push changes to the main branch
3. GitHub Actions will automatically build and deploy to benjaminpeeters.com

## Adding Content

### Blog Posts

Create a new directory in blog/posts/ with an index.qmd file:

```yaml
---
title: "Your Post Title"
author: "Benjamin Peeters"
date: "YYYY-MM-DD"
categories: [category1, category2]
---

Your content here...
```

### Publications

Add new entries to publications.bib and they will automatically appear on the publications page.

## License

Content: © Benjamin Peeters
Code: AGPL-3.0

## Contact

- ORCID: 0000-0002-5095-2021
- GitHub: @benjaminpeeters
