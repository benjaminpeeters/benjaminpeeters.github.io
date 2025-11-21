module.exports = {
  content: ["_site/**/*.html"],
  css: ["_site/assets/css/main.css"],
  output: "_site/assets/css/",
  safelist: {
    standard: [
      // Bootstrap dynamic classes
      "active",
      "show",
      "collapsing",
      "collapse",
      "fade",
      "dropdown-menu",
      "dropdown-toggle",
      "dropdown-item",
      "navbar-toggler",
      "nav-link",
      "modal",
      "modal-dialog",
      "modal-content",
      "modal-header",
      "modal-body",
      "modal-footer",
      "alert",
      "alert-*",
      "btn-primary",
      "btn-secondary",
      "btn-*",
      "card",
      "card-body",
      "card-title",
      "card-text",

      // Al-folio specific
      "footer-sticky",
      "sticky-bottom-footer",
      "profile",
      "contact-icons",
      "post-list",
      "post-meta",
      "post-tags",
      "publications",
      "bibliography",

      // MathJax (for non-Quarto pages)
      "MathJax",
      "mjx-*",
      "MJX-*",

      // KaTeX (for Quarto pages)
      "katex",
      "katex-html",
      "katex-mathml",

      // Quarto content
      "quarto-content",
      "quarto-embedded-content",
      "math-display",
      "eq-number",
      "quarto-xref",

      // Dark mode
      "theme-dark",
      "theme-light",

      // TOC
      "toc",
      "nav-toc",
    ],
    deep: [
      /^MJX-/,
      /^mjx-/,
      /^MathJax/,
      /^katex/,
      /^alert-/,
      /^btn-/,
      /^text-/,
      /^bg-/,
      /^border-/,
      /^d-/,
      /^flex-/,
      /^justify-/,
      /^align-/,
      /^m[tblrxy]?-/,
      /^p[tblrxy]?-/,
      /^w-/,
      /^h-/,
    ],
    greedy: [/data-theme/, /theme-/, /dark/, /light/],
  },
};
