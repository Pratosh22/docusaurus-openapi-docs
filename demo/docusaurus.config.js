// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SurveySparrow APIs | Connect and REST assured",
  tagline: "OpenAPI plugin for generating API reference docs in Docusaurus v2",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SurveySparrow",
  projectName: "api-docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SurveySparrow",
        // items: [
        //   {
        //     label: "SS API",
        //     to: "/category/v3",
        //   },
        // ],
        hideOnScroll: true,
      },
      prism: {
        additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
      // algolia: {
      //   apiKey: "441074cace987cbf4640c039ebed303c",
      //   appId: "J0EABTYI1A",
      //   indexName: "docusaurus-openapi",
      // },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          ss_versioned: {
            specPath: "yaml/v3.yaml",
            outputDir: "docs/ss_versioned", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            version: "3.0.0", // Current version
            label: "v3.0.0", // Current version label
            baseUrl: "/category/v3", // Leading slash is important
            versions: {
              "2.0.0": {
                specPath: "yaml/v2.yaml",
                outputDir: "docs/ss_versioned/2.0.0", // No trailing slash
                label: "v2.0.0",
                baseUrl: "/category/v2", // Leading slash is important
              },
              "1.0.0": {
                specPath: "yaml/v1.yaml",
                outputDir: "docs/ss_versioned/1.0.0", // No trailing slash
                label: "v1.0.0",
                baseUrl: "/category/v1", // Leading slash is important
              },
            },
          },
        },
      },
    ],
    [
      require.resolve("docusaurus-lunr-search"),
      {
        indexBaseUrl: true,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismDark.mjs")).default;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  return config;
}

module.exports = createConfig;
