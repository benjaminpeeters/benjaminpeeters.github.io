---
layout: page.njk
title: Publications
lang: en
permalink: /en/publications/
eleventyNavigation:
  key: Publications
---

{% import "components/publication.njk" as pub %}

<div class="page-intro">
  <p>My research explores cyclical patterns in international finance, climate economics, and economic history. I focus on empirical assessments of financial interdependencies and economic transitions from a long-term historical perspective.</p>
</div>

<div class="publications-section">
  <h2>Published Articles</h2>

  {% if bibliography.published.length > 0 %}
    <div class="publications-list">
      {% for entry in bibliography.published %}
        {{ pub.display(entry) }}
      {% endfor %}
    </div>
  {% else %}
    <p class="empty-message">Publications will be displayed here once the BibTeX file is properly configured.</p>
  {% endif %}
</div>

<div class="publications-section">
  <h2>Working Papers</h2>

  {% if bibliography.workingPapers.length > 0 %}
    <div class="publications-list">
      {% for entry in bibliography.workingPapers %}
        {{ pub.display(entry) }}
      {% endfor %}
    </div>
  {% else %}
    <p class="empty-message">Working papers coming soon.</p>
  {% endif %}
</div>

<div class="profile-links">
  <p>For the latest updates and citations, visit my profiles:</p>
  <div class="profile-buttons">
    <a href="https://orcid.org/0000-0002-5095-2021" target="_blank" rel="noopener noreferrer" class="profile-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 7.5c.549 0 .995-.446.995-.995 0-.549-.446-.995-.995-.995-.549 0-.995.446-.995.995 0 .549.446.995.995.995zm-.623 1.5H6.25v7h.496v-7zm3.5 0h2.238c2.099 0 3.516 1.417 3.516 3.5s-1.417 3.5-3.516 3.5h-2.238v-7zm.496.5v6h1.742c1.771 0 3.02-1.249 3.02-3s-1.249-3-3.02-3h-1.742z"/>
      </svg>
      ORCID
    </a>
    <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" class="profile-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm-1-14.6V18h2V9.4h-2zm-3 0V18h2V9.4H8zm8 0V18h2V9.4h-2zM6 7h12L12 2 6 7z"/>
      </svg>
      Google Scholar
    </a>
    <a href="https://ideas.repec.org" target="_blank" rel="noopener noreferrer" class="profile-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      IDEAS/RePEc
    </a>
  </div>
</div>
