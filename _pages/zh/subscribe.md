---
page_id: subscribe
layout: page
title: 订阅
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
订阅以在您喜欢的阅读器中直接接收更新。您可以选择单独的内容流，或一次性订阅所有内容。
</p>

## 可用订阅源

<div class="feed-grid">
  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-rss"></i></div>
    <h3>全部内容</h3>
    <p>统一的订阅源，包含所有内容：博客文章、新闻和出版物。</p>
    <a href="{{ site.baseurl }}/feed.xml" class="btn btn-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> 订阅
      <span class="feed-url-tooltip">{{ site.url }}/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-newspaper"></i></div>
    <h3>博客</h3>
    <p>关于经济学和研究方法的深度文章、教程和分析。</p>
    <a href="{{ site.baseurl }}/blog/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> 订阅
      <span class="feed-url-tooltip">{{ site.url }}/blog/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-bullhorn"></i></div>
    <h3>新闻</h3>
    <p>会议、演讲、新项目和职业动态公告。</p>
    <a href="{{ site.baseurl }}/news/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> 订阅
      <span class="feed-url-tooltip">{{ site.url }}/news/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-book"></i></div>
    <h3>出版物</h3>
    <p>新研究论文、工作论文或学术出版物发布时的通知。</p>
    <a href="{{ site.baseurl }}/publications/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> 订阅
      <span class="feed-url-tooltip">{{ site.url }}/publications/feed.xml</span>
    </a>
  </div>
</div>

<div class="rss-info">
<h2>什么是RSS？</h2>
<p>
<a href="https://www.rssboard.org/rss-specification" target="_blank">RSS（Really Simple Syndication）</a>是一种网络标准，允许您在一个地方关注多个网站的更新。您无需手动访问每个网站查看新内容，只需订阅源即可自动接收更新。
</p>
<p>
要使用RSS，您需要一个阅读器应用程序。点击上方的「订阅」后，您可以将源URL复制到阅读器中，或者许多阅读器允许直接点击RSS链接进行订阅。阅读器会定期检查新内容，并在统一的界面中展示。
</p>
<p>
常用的阅读器：
</p>
<ul>
<li><a href="https://feedly.com" target="_blank">Feedly</a> — 网页版，免费增值模式，支持所有平台</li>
<li><a href="https://www.inoreader.com" target="_blank">Inoreader</a> — 网页版，强大的过滤和自动化功能</li>
<li><a href="https://netnewswire.com" target="_blank">NetNewsWire</a> — 免费开源，原生macOS和iOS应用</li>
<li><a href="https://newsblur.com" target="_blank">NewsBlur</a> — 开源，网页和移动应用</li>
</ul>
</div>
