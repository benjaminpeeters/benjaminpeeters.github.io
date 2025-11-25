---
page_id: homepage
layout: page
title: 主页
permalink: /
nav: false
hide_header: true

latest_blog:
  enabled: true
  limit: 3

latest_news:
  enabled: true
  scrollable: true
  limit: 5

selected_papers: true
---

<div class="homepage-hero">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h1 class="homepage-title">Benjamin Peeters</h1>
      <p class="lead"><a href="https://www.pik-potsdam.de/">PIK</a> 博士后研究员</p>
      <p class="homepage-tagline">气候经济学 • 宏观经济学 • 国际金融</p>

      <div class="homepage-intro">
        <p>我通过综合评估模型研究气候变化的物理和金融风险之间的联系，特别关注气候损害、适应成本以及对发展中国家资本市场的影响。</p>

        <p>我的研究使用REMIND模型分析气候风险如何影响经济转型路径，结合经济史、宏观经济学和气候科学的见解。</p>
      </div>

      <div class="homepage-actions">
        <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">了解更多关于我</a>
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

{% if page.latest_blog.enabled %}

<div class="homepage-section">
  <h2><a href="{{ '/blog/' | relative_url }}">最新文章</a></h2>
  {% include latest_blog.liquid %}
</div>
{% endif %}

{% if page.latest_news.enabled %}

<div class="homepage-section">
  <h2><a href="{{ '/news/' | relative_url }}">最新新闻</a></h2>
  {% include latest_news.liquid %}
</div>
{% endif %}

{% if page.selected_papers %}

<div class="homepage-section">
  <h2><a href="{{ '/publications/' | relative_url }}">精选出版物</a></h2>
  {% include selected_papers.liquid %}
</div>
{% endif %}
