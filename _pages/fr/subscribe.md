---
page_id: subscribe
layout: page
title: S'abonner
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
Abonnez-vous pour recevoir les mises à jour directement dans votre lecteur de flux préféré. Choisissez parmi les différents flux de contenu ou abonnez-vous à tout en une seule fois.
</p>

## Flux disponibles

<div class="feed-grid">
  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-rss"></i></div>
    <h3>Tout le contenu</h3>
    <p>Un flux unifié combinant tous les contenus : articles de blog, actualités et publications.</p>
    <a href="{{ site.baseurl }}/feed.xml" class="btn btn-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> S'abonner
      <span class="feed-url-tooltip">{{ site.url }}/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-newspaper"></i></div>
    <h3>Blog</h3>
    <p>Articles approfondis, tutoriels et analyses sur l'économie et les méthodes de recherche.</p>
    <a href="{{ site.baseurl }}/blog/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> S'abonner
      <span class="feed-url-tooltip">{{ site.url }}/blog/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-bullhorn"></i></div>
    <h3>Actualités</h3>
    <p>Annonces de conférences, présentations, nouveaux projets et mises à jour de carrière.</p>
    <a href="{{ site.baseurl }}/news/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> S'abonner
      <span class="feed-url-tooltip">{{ site.url }}/news/feed.xml</span>
    </a>
  </div>

  <div class="feed-card">
    <div class="icon"><i class="fa-solid fa-book"></i></div>
    <h3>Publications</h3>
    <p>Notifications lors de la publication de nouveaux articles de recherche ou documents de travail.</p>
    <a href="{{ site.baseurl }}/publications/feed.xml" class="btn btn-outline-primary" target="_blank">
      <i class="fa-solid fa-rss"></i> S'abonner
      <span class="feed-url-tooltip">{{ site.url }}/publications/feed.xml</span>
    </a>
  </div>
</div>

<div class="rss-info">
<h2>Qu'est-ce que RSS ?</h2>
<p>
<a href="https://www.rssboard.org/rss-specification" target="_blank">RSS (Really Simple Syndication)</a> est un standard web qui vous permet de suivre les mises à jour de plusieurs sites en un seul endroit. Au lieu de visiter manuellement chaque site pour vérifier les nouveaux contenus, vous vous abonnez aux flux et recevez les mises à jour automatiquement.
</p>
<p>
Pour utiliser RSS, vous avez besoin d'une application de lecture de flux. Lorsque vous cliquez sur « S'abonner » ci-dessus, vous pouvez copier l'URL du flux dans votre lecteur, ou de nombreux lecteurs permettent de s'abonner directement en cliquant sur les liens RSS. Votre lecteur vérifiera ensuite périodiquement les nouveaux contenus et les affichera dans une interface unifiée.
</p>
<p>
Lecteurs de flux populaires :
</p>
<ul>
<li><a href="https://feedly.com" target="_blank">Feedly</a> — basé sur le web, freemium, fonctionne sur toutes les plateformes</li>
<li><a href="https://www.inoreader.com" target="_blank">Inoreader</a> — basé sur le web, fonctionnalités avancées de filtrage et d'automatisation</li>
<li><a href="https://netnewswire.com" target="_blank">NetNewsWire</a> — gratuit et open source, application native macOS et iOS</li>
<li><a href="https://newsblur.com" target="_blank">NewsBlur</a> — open source, applications web et mobiles</li>
</ul>
</div>
