// @ts-check
// Docusaurus configuration file
// For more information, visit: https://docusaurus.io/docs/configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maar World',
  tagline: 'Comprehensive Documentation',
  favicon: 'img/favicon.ico',

  // Production URL of your site
  url: 'https://docs.maar.world',
  // Base URL pathname
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you're not using GitHub pages, you can remove these.
  organizationName: 'maar34', // Your GitHub org/user name.
  projectName: 'docs.maar.world', // Your repository name.

  // Handle broken links and markdown links
  onBrokenLinks: 'throw', // 'throw' for production builds
  onBrokenMarkdownLinks: 'warn', // 'warn' allows the build to proceed

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Presets for Docusaurus
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          // Path to your docs directory
          path: 'docs',
          // Path to your sidebar configuration
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL for the documentation pages
          editUrl: 'https://github.com/maar34/docs.maar.world/edit/main/', // Update to your GitHub repo
          routeBasePath: 'docs', // Base path for documentation
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/maar34/docs.maar.world/edit/main/blog/', // Update to your GitHub repo
          path: './blog',
          routeBasePath: 'blog', // Base path for blog
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // Theme configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image for meta tags
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Maar World Docs',
        logo: {
          alt: 'Maar World Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developersGuideSidebar',
            position: 'left',
            label: 'Developers Guide',
          },
          {
            href: 'https://github.com/maar34/docs.maar.world',
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
                label: 'User Guide',
                to: '/docs/user-guide', // Auto-generated sidebar link
              },
              {
                label: 'Developers Guide',
                to: '/docs/developers-guide', // Auto-generated sidebar link
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Esnvk2MMne',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/maar_world_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // Uncomment the blog link if you have a blog
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/maar34/docs.maar.world',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maar World Docs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;