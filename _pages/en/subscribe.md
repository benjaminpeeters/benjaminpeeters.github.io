---
page_id: subscribe
layout: page
title: Subscribe
permalink: /subscribe/
description:
nav: false
---

<style>
.subscribe-intro {
  margin-bottom: 2rem;
  color: var(--global-text-color);
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feed-card {
  background-color: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feed-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.feed-card .icon {
  font-size: 2.5rem;
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.feed-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.feed-card p {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.feed-card .btn {
  position: relative;
}

.feed-card .feed-url-tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.feed-card .btn:hover .feed-url-tooltip,
.feed-card .btn:focus .feed-url-tooltip {
  display: block;
}

.rss-info {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--global-divider-color);
}

.rss-info h2 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.rss-info p {
  color: var(--global-text-color);
  line-height: 1.6;
}

.rss-info a {
  color: var(--global-theme-color);
  text-decoration: none;
}

.rss-info a:hover {
  text-decoration: underline;
}
</style>

<p class="subscribe-intro">
Subscribe to receive updates directly in your preferred feed reader. Choose from individual content streams or subscribe to everything at once.
</p>

## Available Feeds

<div class="feed-grid">
  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-rss"></i></div>
    <h3>Everything</h3>
    <p>A unified feed combining all content: blog posts, news, and publications in one stream.</p>
    <a href="{{ site.baseurl }}/feed.xml" class="btn btn-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> Subscribe
      <span class="feed-url-tooltip">{{ site.url }}/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-newspaper"></i></div>
    <h3>Blog</h3>
    <p>In-depth articles, tutorials, and analytical pieces on economics and research methods.</p>
    <a href="{{ site.baseurl }}/blog/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> Subscribe
      <span class="feed-url-tooltip">{{ site.url }}/blog/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-bullhorn"></i></div>
    <h3>News</h3>
    <p>Announcements about conferences, presentations, new projects, and career updates.</p>
    <a href="{{ site.baseurl }}/news/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> Subscribe
      <span class="feed-url-tooltip">{{ site.url }}/news/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-book"></i></div>
    <h3>Publications</h3>
    <p>Notifications when new research papers, working papers, or academic publications are released.</p>
    <a href="{{ site.baseurl }}/publications/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> Subscribe
      <span class="feed-url-tooltip">{{ site.url }}/publications/feed.xml</span>
    </a>
  </div>
</div>

<div class="rss-info">
<h2>What is RSS?</h2>
<p>
<a href="https://www.rssboard.org/rss-specification" target="_blank">RSS (Really Simple Syndication)</a> is a web standard that allows you to follow updates from multiple websites in one place. Instead of manually visiting each site to check for new content, you subscribe to feeds and receive updates automatically.
</p>
<p>
To use RSS, you need a feed reader application. When you click "Subscribe" above, you can copy the feed URL into your reader, or many readers allow you to subscribe directly by clicking RSS links. Your reader will then periodically check for new content and display it in a unified inbox-style interface.
</p>
<p>
Popular feed readers include:
</p>
<ul>
<li><a href="https://feedly.com" target="_blank">Feedly</a> — web-based, freemium, works on all platforms</li>
<li><a href="https://www.inoreader.com" target="_blank">Inoreader</a> — web-based, powerful filtering and automation features</li>
<li><a href="https://netnewswire.com" target="_blank">NetNewsWire</a> — free and open source, native macOS and iOS app</li>
<li><a href="https://newsblur.com" target="_blank">NewsBlur</a> — open source, web and mobile apps</li>
</ul>
</div>
