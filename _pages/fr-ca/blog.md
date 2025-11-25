---
page_id: blog
layout: default
permalink: /blog/
title: blogue
blog_name: blogue
description: Réflexions sur l'économie, le climat et la recherche
nav: true
nav_order: 1
pagination:
  enabled: false
---

<div class="post">

{% comment %}
{% assign blog_name_size = page.blog_name | size %}
{% assign blog_description_size = page.description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ page.blog_name }}</h1>
    <h2>{{ page.description }}</h2>
  </div>
  {% endif %}
{% endcomment %}

{% assign featured_posts = site.blog | where: "series_landing", true | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | relative_url }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <div class="blog-search-container">
    <input type="text" id="blogsearch" spellcheck="false" autocomplete="off" class="search bibsearch-form-input" placeholder="Tapez pour filtrer les articles">
  </div>

  {% comment %} Collect all unique tags from blog posts {% endcomment %}
  {% assign all_tags = "" | split: "" %}
  {% assign blog_posts = site.blog | where: "series_landing", true %}
  {% for post in blog_posts %}
    {% for tag in post.tags %}
      {% unless all_tags contains tag %}
        {% assign all_tags = all_tags | push: tag %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
  {% assign all_tags = all_tags | sort %}

  {% if all_tags.size > 0 %}
  <div class="blog-tag-selector">
    <button class="tag-btn active" data-tag="all">Tous</button>
    {% for tag in all_tags %}
      <button class="tag-btn" data-tag="{{ tag | downcase }}">{{ tag }}</button>
    {% endfor %}
  </div>
  {% endif %}

  <ul class="post-list">

    {% comment %} Only show series landing pages (entry points) {% endcomment %}
    {% assign postlist = site.blog | where: "series_landing", true | sort: "date" | reverse %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign post_tags_lower = "" %}
    {% for tag in post.tags %}
      {% assign post_tags_lower = post_tags_lower | append: tag | downcase | append: " " %}
    {% endfor %}

    <li data-tags="{{ post_tags_lower | strip }}">

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {% include date_format.liquid format="long" date=post.date %}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      {% if post.series_total > 1 %}
      <div class="blog-series-parts">
        <span class="badge badge-series">{{ post.series_total }} parties</span>
        <span class="series-parts">
          {% assign series_posts = site.blog | where: "series_id", post.series_id | where_exp: "p", "p.series_landing != true" | sort: "series_part" %}
          {% for part in series_posts %}
            <a href="{{ part.url | relative_url }}" class="part-link">{{ part.series_part }}</a>
          {% endfor %}
        </span>
      </div>
      {% endif %}

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% comment %} Pagination disabled - showing all landing pages {% endcomment %}

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("blogsearch");
  const tagButtons = document.querySelectorAll(".tag-btn");
  let activeTag = "all";

  const filterPosts = (searchTerm) => {
    const posts = document.querySelectorAll(".post-list > li");
    posts.forEach(post => {
      const text = post.innerText.toLowerCase();
      const postTags = (post.dataset.tags || "").split(" ");
      const matchesSearch = searchTerm === "" || text.includes(searchTerm);
      const matchesTag = activeTag === "all" || postTags.includes(activeTag);

      if (matchesSearch && matchesTag) {
        post.style.display = "";
      } else {
        post.style.display = "none";
      }
    });
  };

  // Tag button click handler
  tagButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      tagButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      activeTag = this.dataset.tag;
      filterPosts(searchInput ? searchInput.value.toLowerCase() : "");
    });
  });

  if (!searchInput) return;

  let timeoutId;
  searchInput.addEventListener("input", function() {
    clearTimeout(timeoutId);
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(() => filterPosts(searchTerm), 200);
  });

  // Handle hash-based filtering
  const updateFromHash = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1));
    searchInput.value = hashValue;
    filterPosts(hashValue.toLowerCase());
  };

  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});
</script>

