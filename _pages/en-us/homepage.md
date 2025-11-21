---
page_id: homepage
layout: page
title: home
permalink: /
nav: false
---

<div class="homepage-hero">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h1 class="homepage-title">Benjamin Peeters</h1>
      <p class="lead">Postdoctoral Researcher at <a href="https://www.pik-potsdam.de/">PIK</a></p>
      <p class="homepage-tagline">Climate Economics • Macroeconomics • International Finance</p>

      <div class="homepage-intro">
        <p>I examine the links between physical and financial risks of climate change through integrated assessment models, with particular focus on climate damages, adaptation costs, and effects on capital markets in developing nations.</p>

        <p>My research uses the REMIND model to analyze how climate risks affect economic transformation pathways, combining insights from economic history, macroeconomics, and climate science.</p>
      </div>

      <div class="homepage-actions">
        <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">Learn More</a>
        <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}" class="btn btn-outline-primary" target="_blank">Download CV</a>
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
  <h2><a href="{{ '/blog/' | relative_url }}">Latest Posts</a></h2>
  {% include latest_posts.liquid %}
</div>
{% endif %}

{% if site.selected_papers %}

<div class="homepage-section">
  <h2><a href="{{ '/publications/' | relative_url }}">Featured Publications</a></h2>
  {% include selected_papers.liquid %}
</div>
{% endif %}
