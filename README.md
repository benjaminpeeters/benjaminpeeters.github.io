# Benjamin Peeters - Personal Website

Personal academic website built with Quarto.

## Features

- Multilingual support: English, French, and Chinese
- Technical notes: Section for mathematical derivations with equation cross-references
- Publications management: Automatic bibliography from BibTeX
- Blog: Integrated blog with RSS feed
- Responsive design: Mobile-friendly with light/dark mode toggle
- Green color scheme: Professional green-oriented theme
- Automated deployment: GitHub Actions for continuous deployment

## Local Development

### Prerequisites

- Quarto (v1.7.22 or later)
- R (for computational content, optional)
- pandoc-crossref (REQUIRED for technical notes with equation cross-references)

### IMPORTANT: pandoc-crossref Setup

The /notes/ section uses pandoc-crossref (https://github.com/lierdakil/pandoc-crossref) for equation and section cross-references. This requires a one-time setup:

If you have pandoc-crossref installed locally (e.g., in ~/.local/bin/):

```bash
# Create a symlink in system path
sudo ln -s ~/.local/bin/pandoc-crossref /usr/local/bin/pandoc-crossref
```

If you don't have pandoc-crossref installed:

```bash
# Download and install
wget https://github.com/lierdakil/pandoc-crossref/releases/download/v0.3.18.0/pandoc-crossref-Linux.tar.xz
tar -xf pandoc-crossref-Linux.tar.xz
sudo mv pandoc-crossref /usr/local/bin/
sudo chmod +x /usr/local/bin/pandoc-crossref
```

Why this is needed:
- The /notes/_quarto.yml file references /usr/local/bin/pandoc-crossref as a filter
- This ensures the same path works both locally and in GitHub Actions CI
- Without this setup, rendering the /notes/ directory will fail with "Could not find executable" error

For other developers or new systems:
If you clone this repository on a new machine, you MUST set up pandoc-crossref as shown above before rendering the /notes/ directory. The main site (/en/, /fr/, /zh/) will work without it, but /notes/ will fail to render.

### Building the Site

The site is organized into separate directories for each language and the notes section:

Render English site:
```bash
quarto render en
```

Render French site:
```bash
quarto render fr
```

Render Chinese site:
```bash
quarto render zh
```

Render technical notes:
```bash
quarto render notes
```

Render all:
```bash
quarto render en && quarto render fr && quarto render zh && quarto render notes
```

### Preview Locally

Start a local preview server:
```bash
cd _site && python3 -m http.server 8888
```

Then visit http://localhost:8888 in your browser. Note: The root redirects to /en/

## Structure

```
.
├── _quarto.yml               # Shared configuration (inherited by subdirs)
├── redirect-index.html       # Root redirect to /en/
├── publications.bib          # BibTeX bibliography
├── custom.scss               # Light theme customization
├── custom-dark.scss          # Dark theme customization
├── styles.css                # Additional CSS styles
├── footer-en.html            # English footer
├── footer-fr.html            # French footer
├── footer-zh.html            # Chinese footer
├── en/                       # English site
│   ├── _quarto.yml          # English-specific config
│   ├── index.qmd            # Home page
│   ├── publications.qmd     # Publications
│   ├── contact.qmd          # Contact form
│   ├── blog/                # Blog posts
│   └── ...
├── fr/                       # French site
│   ├── _quarto.yml          # French-specific config
│   ├── index.qmd
│   └── ...
├── zh/                       # Chinese site
│   ├── _quarto.yml          # Chinese-specific config
│   ├── index.qmd
│   └── ...
└── notes/                    # Technical notes (English only)
    ├── _quarto.yml          # Notes config with pandoc-crossref
    ├── index.qmd            # Notes landing page
    └── capital_motion_derivation/
        └── index.qmd        # Mathematical derivations
```

## Deployment

The site deploys to GitHub Pages via GitHub Actions using manual workflow dispatch.

### Deployment Process

1. Push changes to the main branch
2. Go to GitHub Actions tab
3. Select "Deploy Main Quarto" workflow
4. Click "Run workflow"
5. Site will build and deploy to benjaminpeeters.com

Note: The workflow is manual-only (workflow_dispatch) to maintain control during framework evaluation.

### What Gets Deployed

The GitHub Actions workflow automatically:
- Installs pandoc-crossref to /usr/local/bin/
- Renders /en/, /fr/, /zh/ (multilingual main site)
- Renders /notes/ (technical notes with cross-references)
- Adds redirect at root pointing to /en/
- Deploys everything to GitHub Pages

## Adding Content

### Blog Posts

Create a new directory in en/blog/posts/ with an index.qmd file:

```yaml
---
title: "Your Post Title"
author: "Benjamin Peeters"
date: "YYYY-MM-DD"
categories: [category1, category2]
---

Your content here...
```

For multilingual blog posts, replicate in fr/blog/posts/ and zh/blog/posts/.

### Publications

Add new entries to publications.bib and they will automatically appear on the publications page in all languages.

### Technical Notes

To add a new technical note:

1. Create a new subdirectory in notes/ (e.g., notes/my-new-note/)
2. Add an index.qmd file with your content
3. Use pandoc-crossref syntax for cross-references:
   - Equation labels: {#eq:my-equation}
   - Equation references: @eq:my-equation
   - Section labels: {#sec:my-section}
   - Section references: @sec:my-section
4. Update notes/index.qmd to link to your new note
5. Ensure pandoc-crossref is installed (see setup instructions above)

## License

Content: © Benjamin Peeters
Code: AGPL-3.0

## Contact

- ORCID: 0000-0002-5095-2021
- GitHub: @benjaminpeeters
