---
layout: page.njk
title: Blog
lang: fr
permalink: /fr/blog/
---

## Articles récents

{% for post in collections.posts_fr | reverse %}
<article class="blog-listing">
  <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
  {% if post.data.excerpt %}
  <p>{{ post.data.excerpt }}</p>
  {% endif %}
</article>
{% endfor %}

{% if collections.posts_fr.length == 0 %}
<p>Pas encore d'articles. Revenez bientôt!</p>
{% endif %}
