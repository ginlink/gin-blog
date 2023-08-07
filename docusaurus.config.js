// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const BASE_URL = 'https://gincool.com'
const BASE_URL_NO_HTTPS = 'http://gincool.com'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gin's site",
  tagline: 'Gin is cool',
  url: BASE_URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'gincool', // Usually your GitHub org/user name.
  projectName: 'gin-blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
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
          editUrl: 'https://github.com/ginlink/gin-blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // sitemap: {
        //   changefreq: 'weekly',
        //   priority: 0.5,
        // },
        gtag: {
          trackingID: 'G-1WB38Q3KJF',
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
          {
            type: 'localeDropdown',
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
                html: '<a style="color: unset;" href="mailto:ginlink1998@gmail.com">ginlink1998@gmail.com</a>',
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
        rateLimit: 8,
        startUrls: [BASE_URL, BASE_URL_NO_HTTPS],
        sitemaps: [`${BASE_URL}/sitemap.xml`],
        ignoreCanonicalTo: true,
        discoveryPatterns: [`https://${BASE_URL}/**`, `http://${BASE_URL_NO_HTTPS}/**`],
        actions: [
          {
            indexName: 'gincool',
            pathsToMatch: [`https://${BASE_URL}/**`, `http://${BASE_URL_NO_HTTPS}/**`],
            recordExtractor: ({ $, helpers }) => {
              // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
              const lvl0 =
                $('.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active')
                  .last()
                  .text() || 'Documentation'

              return helpers.docsearch({
                recordProps: {
                  lvl0: {
                    selectors: '',
                    defaultValue: lvl0,
                  },
                  lvl1: ['header h1', 'article h1'],
                  lvl2: 'article h2',
                  lvl3: 'article h3',
                  lvl4: 'article h4',
                  lvl5: 'article h5, article td:first-child',
                  lvl6: 'article h6',
                  content: 'article p, article li, article td:last-child',
                },
                indexHeadings: true,
                aggregateContent: true,
                recordVersion: 'v3',
              })
            },
          },
        ],
        initialIndexSettings: {
          gincool: {
            attributesForFaceting: ['type', 'lang', 'language', 'version', 'docusaurus_tag'],
            attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url', 'url_without_anchor', 'type'],
            attributesToHighlight: ['hierarchy', 'content'],
            attributesToSnippet: ['content:10'],
            camelCaseAttributes: ['hierarchy', 'content'],
            searchableAttributes: [
              'unordered(hierarchy.lvl0)',
              'unordered(hierarchy.lvl1)',
              'unordered(hierarchy.lvl2)',
              'unordered(hierarchy.lvl3)',
              'unordered(hierarchy.lvl4)',
              'unordered(hierarchy.lvl5)',
              'unordered(hierarchy.lvl6)',
              'content',
            ],
            distinct: true,
            attributeForDistinct: 'url',
            customRanking: ['desc(weight.pageRank)', 'desc(weight.level)', 'asc(weight.position)'],
            ranking: ['words', 'filters', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
            highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
            highlightPostTag: '</span>',
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            allowTyposOnNumericTokens: false,
            minProximity: 1,
            ignorePlurals: true,
            advancedSyntax: true,
            attributeCriteriaComputedByMinProximity: true,
            removeWordsIfNoResults: 'allOptional',
            separatorsToIndex: '_',
          },
        },
      },
    }),
}

module.exports = config
