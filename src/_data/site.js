module.exports = {
  title: "Benjamin Peeters",
  description: "Postdoctoral Researcher at PIK (Potsdam Institute for Climate Impact Research)",
  url: process.env.ELEVENTY_ENV === "production"
    ? "https://benjaminpeeters.com"
    : "http://localhost:8005",
  author: {
    name: "Benjamin Peeters",
    email: "peeters@pik-potsdam.de",
    orcid: "0000-0002-5095-2021",
    github: "benjaminpeeters",
    website: "benjaminpeeters.com"
  },
  languages: [
    {
      code: "en",
      label: "English",
      dir: "ltr",
      locale: "en-US"
    },
    {
      code: "fr",
      label: "Français",
      dir: "ltr",
      locale: "fr-FR"
    },
    {
      code: "zh",
      label: "中文",
      dir: "ltr",
      locale: "zh-CN"
    }
  ],
  defaultLanguage: "en",
  buildTime: new Date()
};
