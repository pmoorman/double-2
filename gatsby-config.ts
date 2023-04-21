import { addTrailingSlash } from "@app/utils";
import type { GatsbyConfig } from "gatsby";

const siteUrl = "https://double-agency.com";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl,
    recaptchaKey: "6LcftHoiAAAAAPZBvS2LJjb3w_BkHJlX5YiQNUhy",
    title: "Double Agency",
    keywords: "Growth Marketing Agency",
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
        fonts: ["Manrope:400,600,700", "EB+Garamond:ital,wght@1,500"],
        display: "swap",
      },
    },
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-htaccess",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/38-laws-of-growth",
          "/academy/signup/",
          "/academy/signup/thankyou",
          "/academy/38laws/",
          "/academy/38laws/thankyou",
          "/academy/laws-of-growth",
          "/academy/laws-of-growth/thankyou",
          "/academy/freeguide",
          "/academy/freeguide/thankyou",
          "/academy/download",
          "/academy/download/thankyou",
          "/academy/7lessons",
          "/academy/7lessons/thankyou",
          "/academy/subscribe",
          "/academy/subscribe/thankyou",
          "/academy/growth-laws",
          "/academy/growth-laws/thankyou",
          "/academy/growth",
          "/academy/growth/thankyou",
          "/academy/email-course",
          "/academy/email-course/thankyou",
          "/academy/avoid-startup-disaster",
          "/academy/avoid-startup-disaster/thankyou/",
          "/academy/startup-laws",
          "/academy/startup-laws/thankyou",
          "/long/guide",
          "/long/guide/thankyou",
          "/long/38laws",
          "/long/38laws/thankyou",
          "/long/download",
          "/long/download/thankyou",
          "/long/freeguide",
          "/long/freeguide/thankyou",
          "/long/report",
          "/long/report/thankyou",
          "/short/report",
          "/short/report/thankyou",
          "/short/guide/thankyou",
          "/38-laws-of-growth-marketing",
          "/38-laws-to-avoid-startup-disaster",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/double-logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
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
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 90,
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/legal`,
        name: `legal`,
      },
      __key: "legal",
    },

    /********************
     *
     * Trackers
     *
     ********************/
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `1853889`,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1613747988773735",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M44383W",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["UA-157579030-1", "AW-10961821835"],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `,
      },
    },
  ],
};

export default config;
