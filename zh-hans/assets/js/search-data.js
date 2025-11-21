
const currentUrl = window.location.href;
const siteUrl = "https://benjaminpeeters.github.io"; 
let updatedUrl = currentUrl.replace("https://benjaminpeeters.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-hans".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-hans", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/zh-hans/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "关于经济学、气候和研究的思考",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/blog/";
          },
        },{id: "nav-出版物",
          title: "出版物",
          description: "按类别逆时间顺序排列的出版物。由jekyll-scholar生成。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/publications/";
          },
        },{id: "nav-代码仓库",
          title: "代码仓库",
          description: "与经济学、气候建模和生产力应用相关的开源研究工具、数据集和软件项目。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/repositories/";
          },
        },{id: "nav-教学",
          title: "教学",
          description: "课程与教学经验",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/teaching/";
          },
        },{id: "nav-书籍",
          title: "书籍",
          description: "进行中的书籍",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/books/";
          },
        },{id: "nav-关于",
          title: "关于",
          description: "",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/about/";
          },
        },{id: "nav-联系方式",
          title: "联系方式",
          description: "与我联系",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-hans/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "文章",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{
        id: 'social-email',
        title: '发送电子邮件',
        section: '社交媒体',
        handler: () => {
          window.open("mailto:%62%65%6E%6A%61%6D%69%6E%70%65%65%74%65%72%73@%70%72%6F%74%6F%6E%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交媒体',
        handler: () => {
          window.open("https://github.com/benjaminpeeters", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: '社交媒体',
        handler: () => {
          window.open("https://www.linkedin.com/in/benjamin-peeters-891551314", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社交媒体',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5095-2021", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交媒体',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社交媒体',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ACbL7v0AAAAJ", "_blank");
        },
      },{
        id: 'social-sciprofiles',
        title: 'Sciprofiles',
        section: '社交媒体',
        handler: () => {
          window.open("https://sciprofiles.com/profile/benjaminpeeters", "_blank");
        },
      },{
        id: 'social-ideas_repec',
        title: 'Ideas_repec',
        section: '社交媒体',
        handler: () => {
          window.open("https://ideas.repec.org/f/ppe825.html", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-fr-ca',
          title: 'fr-ca',
          section: '语言',
          handler: () => {
            window.location.href = "/fr-ca" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '更改为浅色主题',
      description: '将网站主题更改为浅色',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '更改为深色主题',
      description: '将网站主题更改为深色',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系统默认主题',
      description: '将网站主题更改为系统默认',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
