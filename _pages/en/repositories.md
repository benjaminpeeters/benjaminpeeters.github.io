---
page_id: repositories
layout: page
permalink: /repositories/
title: repositories
description: Open-source research tools, datasets, and software projects related to economics, climate modeling, and productivity applications.
nav: true
nav_order: 4
hide_header: true
---

A selection of public open-source work — research tools, models, and productivity scripts. The activity card below reflects all my GitHub contributions including private repositories; the listed projects are the public subset shareable here.

{% if site.data.repositories.github_users %}

{% for user in site.data.repositories.github_users %}
{% include repository/repo_user.liquid username=user %}
{% endfor %}

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repo_categories %}
{% for category in site.data.repositories.github_repo_categories %}
{% assign cat_strings = site.data[site.active_lang].strings.repositories.categories[category.id] %}

<h2 id="{{ category.id }}" class="repo-category-title">{{ cat_strings.title }}</h2>
<p class="repo-category-description">{{ cat_strings.description }}</p>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in category.repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
  {% endfor %}
{% endif %}
