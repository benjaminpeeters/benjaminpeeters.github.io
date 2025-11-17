const path = require("path");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyImage = require("@11ty/eleventy-img");
const bibtexPlugin = require("eleventy-plugin-bibtex");
const markdownIt = require("markdown-it");
const markdownItKatex = require("@vscode/markdown-it-katex");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {

  // ========================================
  // PLUGINS
  // ========================================

  // RSS Feed
  eleventyConfig.addPlugin(pluginRss);

  // Syntax Highlighting for code blocks
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 }
  });

  // BibTeX Citations
  // Note: Temporarily disabled due to compatibility issues with Eleventy 3.x
  // Will implement custom BibTeX parsing solution
  // eleventyConfig.addPlugin(bibtexPlugin, {
  //   bibPath: "./src/_data/publications.bib",
  //   outputPath: "./_site/publications/"
  // });

  // ========================================
  // MARKDOWN CONFIGURATION
  // ========================================

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItKatex.default || markdownItKatex)
  .use(markdownItAttrs)
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [2, 3, 4]
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // ========================================
  // IMAGE SHORTCODE
  // ========================================

  eleventyConfig.addAsyncShortcode("image", async function(src, alt, sizes = "100vw") {
    if (!src) {
      throw new Error("Image shortcode requires a src parameter");
    }

    let metadata = await eleventyImage(src, {
      widths: [300, 600, 1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/assets/images/",
      urlPath: "/assets/images/",
      filenameFormat: function (id, src, width, format) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt: alt || "",
      sizes: sizes,
      loading: "lazy",
      decoding: "async",
    };

    return eleventyImage.generateHTML(metadata, imageAttributes);
  });

  // ========================================
  // COLLECTIONS (for multilingual content)
  // ========================================

  // English collections
  eleventyConfig.addCollection("posts_en", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/blog/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // French collections
  eleventyConfig.addCollection("posts_fr", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/fr/blog/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Chinese collections
  eleventyConfig.addCollection("posts_zh", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/zh/blog/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // ========================================
  // FILTERS
  // ========================================

  // Format date for display
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // ISO date for machine reading
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Get current year for copyright
  eleventyConfig.addFilter("currentYear", () => {
    return new Date().getFullYear();
  });

  // ========================================
  // PASSTHROUGH COPY
  // ========================================

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy({"src/_data/publications.bib": "publications.bib"});

  // Copy .nojekyll for GitHub Pages
  eleventyConfig.addPassthroughCopy({".nojekyll": ".nojekyll"});

  // Copy CNAME if it exists (for custom domain)
  eleventyConfig.addPassthroughCopy({"CNAME": "CNAME"});

  // ========================================
  // BROWSERSYNC CONFIG
  // ========================================

  eleventyConfig.setBrowserSyncConfig({
    port: 8005,
    files: ['_site/styles/**/*.css'],
    open: false
  });

  // ========================================
  // WATCH TARGETS
  // ========================================

  eleventyConfig.addWatchTarget("src/styles/**/*.css");

  // ========================================
  // RETURN CONFIG
  // ========================================

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
