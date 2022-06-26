// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gin's site",
  tagline: 'Gin is cool',
  url: 'https://gincool.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'gincool', // Usually your GitHub org/user name.
  projectName: 'gin-blog', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ginlink/gin-blog',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ginlink/gin-blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // sitemap: {
        //   changefreq: 'weekly',
        //   priority: 0.5,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Gin's site",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Blog',
          },
          { to: '/me', label: 'Me', position: 'left' },
          {
            href: 'https://github.com/ginlink/gin-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact Me',
            items: [
              {
                html: '<a style="color: unset;" href="mailto:ginlink1998@gmail.com">ginlink1998@gmail.com</a>'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Me',
                to: '/me',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ginlink/gin-blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gincool, Inc. Built with <a href="https://docusaurus.io/" target="_blank" >Docusaurus</a>. </br> <a href="https://beian.miit.gov.cn/#/Integrated/index">蜀ICP备2021028336号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'AR86U0G4DG',

        // Public API key: it is safe to commit it
        apiKey: 'd9059061ec50922e556a403466380b71',

        indexName: 'gincool',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;
