const comments = require("./comments.js");
const pwa = require("./pwaConf.js");
module.exports = [
  pwa,
  ['@vuepress/blog', {
    directories: [
      {
        id: 'post',
        dirname: 'blog/post',
        path: '/blog/',
        layout: 'BlogLayout',
        itemLayout: 'Layout',
        itemPermalink: 'blog/post/:slug',
        title: "博客",
      },
    ],
    frontmatters: [
      {
        // Unique ID of current classification
        id: 'tag',
        // Decide that the frontmatter keys will be grouped under this classification
        keys: ['tag'],
        // Path of the `entry page` (or `list page`)
        path: '/blog/tag/',
        // Layout of the `entry page`
        layout: 'BlogLayout',
        // Layout of the `scope page`
        scopeLayout: 'BlogLayout'
      },
    ]
  }],
  // ['img-lazy'],
  [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }
  ],
  ["@vuepress/back-to-top"],
  ["@vuepress/nprogress"],
  [
    "vuepress-plugin-clean-urls",
    {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html"
    }
  ],
  [
    "vuepress-plugin-zooming",
    {
      selector: "p img",
      delay: 1000,
      options: {
        bgColor: "#ffffff",
        zIndex: 10000,
        bgOpacity: 0.6,
        scaleExtra: 1,
        transitionDuration: 0.2
      }
    }
  ],

  //自动分组
  ["vuepress-plugin-auto-sidebar"],

  //自定义md容器
  [
    "vuepress-plugin-container",
    {
      type: "PL",
      before: data => `<PL data='${data}'>`,
      after: "</PL>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "Link",
      before: src => `<a href="${src}" class="router-link-active">`,
      after: "</a>"
    }
  ],
  comments,
  [
    "named-chunks",
    {
      pageChunkName: page => "page" + page.key.slice(1),
      layoutChunkName: layout => "layout-" + layout.componentName
    }
  ],
  [
    "seo",
    {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => "/favicon.jpeg",
      type: $page =>
        ["articles", "posts", "blog"].some(folder =>
          $page.regularPath.startsWith("/" + folder)
        )
          ? "article"
          : "website",
      url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        ($site.themeConfig.domain || "") + $page.frontmatter.image,
      publishedAt: $page =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    }
  ],
  ["pangu"],
  ["reading-progress", {}],
  [
    "vuepress-plugin-code-copy",
    {
      //selector: String,
      //align: String,
      color: "#55ae9c",
      backgroundTransition: true,
      backgroundColor: "#ffffff",
      successText: "复制成功"
    }
  ],
  ["element-ui"],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format("YYYY/MM/DD HH:mm:ss")
      }
    }
  ],
  [
    "sitemap",
    {
      hostname: "https://www.b-tree.studio"
    }
  ],
  [
    "vuepress-plugin-mathjax",
    {
      target: "svg",
      macros: {
        "*": "\\times"
      }
    }
  ],
  [
    require("./../plugin/vuepress-plugin-music-bar/index.js"),
    {
      playList: [],

      platform: [
        {
          name: "music.163.com",
          songIDs: ["1297333740"],
          playListIDs: ["4909779787"]
        }
      ],

      timeOut: 2000,

      firstClickPlay: true,

      background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",

      "/blog/": {
        background: "#66ccff",
      }

    }
  ],
  [
    "fontmin",
    {
      selector: '#main-title,.site-name.can-hide,.subtitle',
      src: 'docs/.vuepress/font/PingFangLight.ttf',
      text: 'B-Tree Design Studio 嵌入式 / 软件 / 前端 / 产品 / 建模 / 算法 / 编曲 / 绘画',
    }
  ],

];
