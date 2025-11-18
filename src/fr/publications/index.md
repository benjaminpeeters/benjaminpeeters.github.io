---
layout: page.njk
title: Publications
lang: fr
permalink: /fr/publications/
---

{% import "components/publication.njk" as pub %}

Mes recherches explorent les schémas cycliques en finance internationale, l'économie du climat et l'histoire économique. Voici une liste de mes travaux publiés et projets de recherche en cours.

## Articles publiés

{% if bibliography.published.length > 0 %}
{% for entry in bibliography.published %}
{{ pub.display(entry) }}
{% endfor %}
{% else %}
Les publications seront affichées ici une fois le fichier BibTeX correctement configuré.
{% endif %}

## Documents de travail

{% if bibliography.workingPapers.length > 0 %}
{% for entry in bibliography.workingPapers %}
{{ pub.display(entry) }}
{% endfor %}
{% else %}
Documents de travail à venir.
{% endif %}

---

Pour les dernières mises à jour, consultez mon [profil ORCID](https://orcid.org/0000-0002-5095-2021).
