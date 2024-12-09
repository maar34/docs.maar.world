// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  // User Guide Sidebar
  userGuideSidebar: [
    { type: 'autogenerated', dirName: 'user-guide' }, // Automatically generate from 'docs/user-guide'
  ],

  // Developers Guide Sidebar
  developersGuideSidebar: [
    { type: 'autogenerated', dirName: 'developers-guide' }, // Automatically generate from 'docs/developers-guide'
  ],

  // Additional manual example (if needed later)
  /*
  developersGuideSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'setup'],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: ['advanced/customization', 'advanced/integrations'],
    },
  ],
  */
};

export default sidebars;