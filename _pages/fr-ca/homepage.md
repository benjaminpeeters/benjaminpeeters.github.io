---
page_id: homepage
layout: page
title: accueil
permalink: /
nav: false
---

<div class="homepage-hero">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h1 class="homepage-title">Benjamin Peeters</h1>
      <p class="lead">Chercheur postdoctoral au <a href="https://www.pik-potsdam.de/">PIK</a></p>
      <p class="homepage-tagline">Économie Climatique • Macroéconomie • Finance Internationale</p>

      <div class="homepage-intro">
        <p>J'examine les liens entre les risques physiques et financiers du changement climatique à travers des modèles d'évaluation intégrés, avec un accent particulier sur les dommages climatiques, les coûts d'adaptation et les effets sur les marchés de capitaux dans les pays en développement.</p>

        <p>Mes recherches utilisent le modèle REMIND pour analyser comment les risques climatiques affectent les trajectoires de transformation économique, combinant des perspectives issues de l'histoire économique, de la macroéconomie et des sciences du climat.</p>
      </div>

      <div class="homepage-actions">
        <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">En savoir plus</a>
        <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}" class="btn btn-outline-primary" target="_blank">Télécharger le CV</a>
      </div>
    </div>

    <div class="col-md-4 d-none d-md-block">
      {% include figure.liquid
         path="assets/img/homepage_hero.jpg"
         class="img-fluid rounded shadow"
         alt="Benjamin Peeters"
         loading="eager"
      %}
    </div>

  </div>
</div>

{% if site.latest_posts.enabled %}

<div class="homepage-section">
  <h2><a href="{{ '/blog/' | relative_url }}">Derniers Articles</a></h2>
  {% include latest_posts.liquid %}
</div>
{% endif %}

{% if site.selected_papers %}

<div class="homepage-section">
  <h2><a href="{{ '/publications/' | relative_url }}">Publications Sélectionnées</a></h2>
  {% include selected_papers.liquid %}
</div>
{% endif %}
