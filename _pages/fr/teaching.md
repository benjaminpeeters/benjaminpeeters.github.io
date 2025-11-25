---
page_id: teaching
layout: page
permalink: /teaching/
title: enseignement
description: Cours et expérience d'enseignement
nav: true
nav_order: 5
hide_header: true
---

{% assign courses = site.courses | sort: "course_year" | reverse %}
{% if courses.size > 0 %}

## Matériel de cours

<div class="courses-list">
{% for course in courses %}
<div class="course-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--global-divider-color); border-radius: 0.5rem;">
  <h3 style="margin-top: 0;"><a href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
  <div class="course-meta" style="color: var(--global-text-color-light); font-size: 0.9rem; margin-bottom: 0.5rem;">
    {{ course.semester }} {{ course.course_year }} | {{ course.institution }}
    {% if course.language and course.language != 'en-us' %}
    | {% if course.language == 'fr-ca' %}Français{% elsif course.language == 'zh-hans' %}Chinois{% else %}{{ course.language }}{% endif %}
    {% endif %}
  </div>
  <p style="margin-bottom: 0;">{{ course.description }}</p>
</div>
{% endfor %}
</div>

---

{% endif %}

## Cours actuels (2023-2024)

### Intégration régionale et relations UE-Asie

Cours de relations internationales examinant les processus d'intégration régionale et l'évolution des relations entre l'Union européenne et les économies asiatiques.

### Études régionales - Relations internationales de l'Union européenne

Analyse complète du rôle de l'Union européenne dans les affaires internationales, de son cadre institutionnel et de ses relations avec d'autres acteurs mondiaux.

### La France dans les affaires internationales

Cours enseigné en français examinant la position et l'influence de la France dans les relations internationales contemporaines, couvrant le contexte historique, les politiques actuelles et les défis futurs.

---

## Expérience d'enseignement antérieure

### UCLouvain (2016-2023)

#### Économétrie (ECGE1330)

Assistant d'enseignement, 2017-2023

- Analyse de séries temporelles et méthodes de prévision
- Économétrie des données de panel
- Modélisation économétrique appliquée
- Formation aux logiciels statistiques (R, Stata)

#### Macroéconomie (ECGE1211)

Assistant d'enseignement, 2016-2019

- Comptabilité nationale et mesure du PIB
- Cadre IS-LM et demande agrégée
- Analyse des politiques monétaire et budgétaire
- Cycles économiques et fluctuations

#### Théorie des probabilités (INGE1131)

Assistant d'enseignement, 2016-2019

- Distributions de probabilité et leurs propriétés
- Variables aléatoires et espérance
- Théorèmes limites et applications statistiques
- Fondements mathématiques pour ingénieurs

#### Statistiques avancées (INGE1231)

Assistant d'enseignement, 2016-2019

- Tests d'hypothèses et intervalles de confiance
- Analyse de régression et sélection de modèles
- Méthodes statistiques multivariées
- Modélisation statistique appliquée pour l'ingénierie

#### Recherche opérationnelle (INGE1312)

Assistant d'enseignement, 2016-2018

- Programmation linéaire et optimisation
- Flots de réseaux et théorie des graphes
- Analyse de décision sous incertitude
- Méthodes de simulation

#### Statistiques appliquées (ECGE 1232)

Assistant d'enseignement, 2016-2018

- Statistiques descriptives et visualisation de données
- Inférence statistique
- ANOVA et planification d'expériences
- Méthodes de régression appliquées

---

## Matériel pédagogique

Le matériel de cours et les ressources supplémentaires sont disponibles sur [MEGA](https://mega.nz/) pour les étudiants inscrits.

Pour toute question concernant le matériel pédagogique ou le contenu des cours, veuillez me contacter à [benjaminpeeters@protonmail.com](mailto:benjaminpeeters@protonmail.com).
