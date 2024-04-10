/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const ssVersions = require("./docs/ss_versioned/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const sidebars = {
  tutorialSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "doc",
      id: "sidebars",
    },
    // {
    //   type: "category",
    //   label: "API Reference",
    //   link: {
    //     type: "generated-index",
    //   },
    //   // items: [
    //   //   {
    //   //     type: "html",
    //   //     defaultStyle: true,
    //   //     value: versionCrumb(`v3.0.0`),
    //   //   },
    //   //   {
    //   //     label: "SurveySparrow v3 API",
    //   //     link: {
    //   //       type: "generated-index",
    //   //       title: "SurveySparrow API (v3.0.0)",
    //   //       description: "SuvreySparrow v3 API",
    //   //       slug: "/category/v3",
    //   //     },
    //   //     items: require("./docs/ss_versioned/sidebar.js"),
    //   //     type: "category",
    //   //   },
    //   //   {
    //   //     type: "html",
    //   //     defaultStyle: true,
    //   //     value: versionCrumb(`v3.0.0`),
    //   //   },
    //   //   {
    //   //     label: "SurveySparrow v2 API",
    //   //     link: {
    //   //       type: "generated-index",
    //   //       title: "SurveySparrow API (v2.0.0)",
    //   //       description: "SurveySparrow v2 API",
    //   //       slug: "/category/v2",
    //   //     },
    //   //     items: require("./docs/ss_versioned/2.0.0/sidebar.js"),
    //   //     type: "category",
    //   //   },
    //   //   {
    //   //     type: "html",
    //   //     defaultStyle: true,
    //   //     value: versionCrumb(`v1.0.0`),
    //   //   },
    //   //   {
    //   //     label: "SurveySparrow v1 API",
    //   //     link: {
    //   //       type: "generated-index",
    //   //       title: "SurveySparrow API (v1.0.0)",
    //   //       description: "SurveySparrow v1 API",
    //   //       slug: "/category/v1",
    //   //     },
    //   //     items: require("./docs/ss_versioned/1.0.0/sidebar.js"),
    //   //     type: "category",
    //   //   },
    //   // ],
    // },
    // Add the items from the other sidebars here
  ],
  "ss_versioned-3.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(ssVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v3.0.0`),
    },
    {
      type: "category",
      label: "SurveySparrow v3 API",
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v3.0.0)",
        description: "SuvreySparrow v3 API",
        slug: "/category/v3",
      },
      items: require("./docs/ss_versioned/sidebar.js"),
    },
  ],
  "ss_versioned-2.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(ssVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "SurveySparrow",
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v2.0.0)",
        description: "SurveySparrow v2 API",
        slug: "/category/v2",
      },
      items: require("./docs/ss_versioned/2.0.0/sidebar.js"),
    },
  ],
  "ss_versioned-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(ssVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`),
    },
    {
      type: "category",
      label: "SurveySparrow V1 API",
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v1.0.0)",
        description: "SurveySparrow V1 API",
        slug: "/category/v1",
      },
      items: require("./docs/ss_versioned/1.0.0/sidebar.js"),
    },
  ],
};

module.exports = sidebars;
