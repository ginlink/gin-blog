// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gin's site",
  tagline: 'Gin is cool',
  url: 'http://gincool.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'gincool', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
            title: 'Contract Me',
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
        copyright: `Copyright © ${new Date().getFullYear()} Gincool, Inc. Built with Docusaurus. </br> <a href="https://beian.miit.gov.cn/#/Integrated/index">蜀ICP备2021028336号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
