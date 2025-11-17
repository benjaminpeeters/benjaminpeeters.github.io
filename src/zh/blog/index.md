---
layout: page.njk
title: 博客
lang: zh
permalink: /zh/blog/
---

## 最新文章

{% for post in collections.posts_zh | reverse %}
<article class="blog-listing">
  <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
  {% if post.data.excerpt %}
  <p>{{ post.data.excerpt }}</p>
  {% endif %}
</article>
{% endfor %}

{% if collections.posts_zh.length == 0 %}
<p>暂无文章。敬请期待！</p>
{% endif %}
