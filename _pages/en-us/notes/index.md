---
page_id: notes_index
layout: page
title: Research Notes
permalink: /notes/
description: Technical notes and derivations
nav: false
---

## Technical Notes

This page contains detailed technical notes, derivations, and research documentation. These notes are working documents and may be less polished than formal publications.

{% assign public_notes = site.notes | where_exp: "note", "note.unlisted != true" | sort: "date" | reverse %}

{% if public_notes.size > 0 %}
  <div class="notes-list">
    {% for note in public_notes %}
      <div class="note-item">
        <h3 class="note-title">
          <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
        </h3>
        {% if note.description %}
          <p class="note-description">{{ note.description }}</p>
        {% endif %}
        {% if note.author %}
          <p class="note-meta">By {{ note.author }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% else %}
  <p>No public notes available yet.</p>
{% endif %}

<div class="notes-info">
  <p><em>Note: Some technical notes are unlisted and not shown here.</em></p>
</div>

<style>
  .notes-list {
    margin: 2rem 0;
  }

  .note-item {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .note-item:last-child {
    border-bottom: none;
  }

  .note-title {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .note-title a {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .note-title a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }

  .note-description {
    margin: 0.5rem 0;
    color: var(--global-text-color-light);
    line-height: 1.6;
  }

  .note-meta {
    margin: 0.25rem 0 0 0;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
  }

  .notes-info {
    margin-top: 3rem;
    padding: 1rem;
    background-color: var(--global-code-bg-color);
    border-radius: 0.25rem;
    font-size: 0.9rem;
  }

  .notes-info p {
    margin: 0;
  }
</style>
