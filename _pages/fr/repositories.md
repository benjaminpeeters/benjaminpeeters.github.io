---
page_id: repositories
layout: page
permalink: /repositories/
title: dépôts
description: Outils de recherche open-source, ensembles de données et projets logiciels liés à l'économie, la modélisation climatique et les applications de productivité.
nav: true
nav_order: 4
hide_header: true
---

Une sélection de travaux open-source publics — outils de recherche, modèles et scripts de productivité. La carte d'activité ci-dessous reflète l'ensemble de mes contributions GitHub, y compris les dépôts privés; les projets listés sont le sous-ensemble public partageable ici.

{% if site.data.repositories.github_users %}

{% for user in site.data.repositories.github_users %}
{% include repository/repo_user.liquid username=user %}
{% endfor %}

---

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

{% if site.data.repositories.github_repos %}

## Dépôts GitHub

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
