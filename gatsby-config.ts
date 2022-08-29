import type { GatsbyConfig } from "gatsby";

const siteUrl = "https://www.double-agency.com";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl,
    title: "Double Agency",
    description:
      "Growthmarketing and Growth Hacking are new business strategies for startups that incorporate marketing within your product and core business values. Build growth right into the hard of your company, by using feedback and customer data to test, enhance your product, build a lean and sustainable business and become a master entrepreneur.",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `
        @import '~bootstrap/scss/functions';
        @import '~bootstrap/scss/mixins';
        @import './src/styles/current/variables';
        @import '~bootstrap/scss/variables';
      `,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Manrope:400,600,700", "Poppins:400,500,600"],
        display: "swap",
      },
    },
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/double-logo.svg",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/case-studies`,
        name: `case-studies`,
      },
      __key: "case-studies",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/careers`,
        name: `careers`,
      },
      __key: "careers",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/team`,
        name: `team`,
      },
      __key: "team",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/testimonials`,
        name: `testimonials`,
      },
      __key: "testimonials",
    },
  ],
};

export default config;
