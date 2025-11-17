---
layout: page.njk
title: Blog
lang: en
permalink: /en/blog/
---

## Recent Posts

{% for post in collections.posts_en | reverse %}
<article class="blog-listing">
  <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
  {% if post.data.excerpt %}
  <p>{{ post.data.excerpt }}</p>
  {% endif %}
</article>
{% endfor %}

{% if collections.posts_en.length == 0 %}
<p>No posts yet. Check back soon!</p>
{% endif %}
