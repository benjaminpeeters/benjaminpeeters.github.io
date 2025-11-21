
const currentUrl = window.location.href;
const siteUrl = "https://benjaminpeeters.github.io"; 
let updatedUrl = currentUrl.replace("https://benjaminpeeters.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr-ca".length > 0) {
  updatedUrl = updatedUrl.replace("/fr-ca", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-accueil",
    title: "accueil",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr-ca/";
    },
  },{id: "nav-blogue",
          title: "blogue",
          description: "Réflexions sur l&#39;économie, le climat et la recherche",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications par catégories en ordre chronologique inverse. générées par jekyll-scholar.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/publications/";
          },
        },{id: "nav-dépôts",
          title: "dépôts",
          description: "Outils de recherche open-source, ensembles de données et projets logiciels liés à l&#39;économie, la modélisation climatique et les applications de productivité.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/repositories/";
          },
        },{id: "nav-enseignement",
          title: "enseignement",
          description: "Cours et expérience d&#39;enseignement",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/teaching/";
          },
        },{id: "nav-livres",
          title: "livres",
          description: "Livres en préparation",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/books/";
          },
        },{id: "nav-à-propos",
          title: "à propos",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/about/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "Prenez contact avec moi",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-ca/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "articles",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%62%65%6E%6A%61%6D%69%6E%70%65%65%74%65%72%73@%70%72%6F%74%6F%6E%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/benjaminpeeters", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/benjamin-peeters-891551314", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5095-2021", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ACbL7v0AAAAJ", "_blank");
        },
      },{
        id: 'social-sciprofiles',
        title: 'Sciprofiles',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://sciprofiles.com/profile/benjaminpeeters", "_blank");
        },
      },{
        id: 'social-ideas_repec',
        title: 'Ideas_repec',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://ideas.repec.org/f/ppe825.html", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-zh-hans',
          title: 'zh-hans',
          section: 'langues',
          handler: () => {
            window.location.href = "/zh-hans" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
