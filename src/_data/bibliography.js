const fs = require('fs');
const path = require('path');
const bibtexParse = require('bibtex-parse-js');

module.exports = function() {
  try {
    const bibPath = path.join(__dirname, 'publications.bib');
    const bibContent = fs.readFileSync(bibPath, 'utf8');

    // Parse the BibTeX file
    const entries = bibtexParse.toJSON(bibContent);

    // Sort by year (descending)
    const sortedEntries = entries.sort((a, b) => {
      const yearA = parseInt(a.entryTags?.year || '0');
      const yearB = parseInt(b.entryTags?.year || '0');
      return yearB - yearA;
    });

    // Categorize publications
    const published = sortedEntries.filter(entry => {
      const type = entry.entryType?.toLowerCase();
      return type === 'article' || type === 'inproceedings' || type === 'book';
    });

    const workingPapers = sortedEntries.filter(entry => {
      const type = entry.entryType?.toLowerCase();
      return type === 'unpublished' || type === 'techreport' || type === 'misc';
    });

    return {
      all: sortedEntries,
      published: published,
      workingPapers: workingPapers
    };

  } catch (error) {
    console.warn('Warning: Could not parse BibTeX file:', error.message);
    return {
      all: [],
      published: [],
      workingPapers: []
    };
  }
};
