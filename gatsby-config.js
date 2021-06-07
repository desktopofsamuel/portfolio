const urljoin = require("url-join");
const config = require("./data/SiteConfig");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/favicon.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    "gatsby-remark-images",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cache",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/content/work/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "page",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photo",
        path: `${__dirname}/content/photo/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://beta.readng.co/rss/collection/UfVaj`,
        name: `Readng`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ["title", "link", "pubDate", "guid"],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 2000,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appW4gVPhW2puIptz`,
            tableName: `Tech`,
            mapping: { Description: "text/markdown" },
          },
          {
            baseId: `appW4gVPhW2puIptz`,
            tableName: `Bookmark`,
            // queryName: `Bookmark`,
            // separateNodeType: true,
          },
          {
            baseId: `appW4gVPhW2puIptz`,
            tableName: `Career`,
            // queryName: `Bookmark`,
            // separateNodeType: true,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-webmention`,
    //   options: {
    //     username: "desktopofsamuel.com", // webmention.io username
    //     identity: {
    //       // you need to specify at least one of the identities
    //       // to be able to log in webmention.io
    //       github: "desktopofsamuel",
    //       twitter: "desktopofsamuel", // no @
    //       email: "desktopofsamuel@gmail.com",
    //     },
    //     mentions: true,
    //     pingbacks: false,
    //     forwardPingbacksAsWebmentions: "https://example.com/endpoint",
    //     domain: "desktopofsamuel.com",
    //     fetchLimit: 10000, // number of webmentions to fetch
    //     token: process.env.WEBMENTIONS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default-page-layout.tsx"),
        },
        extensions: [`.mdx`, `md`],
        remarkPlugins: [require("remark-unwrap-images")],
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1280,
              loading: "lazy",
              withWebp: true,
              quality: 90,
            },
          },
          "gatsby-remark-images-medium-zoom",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: "remark-figure" },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-grid-tables",
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true,
    //     develop: true,
    //     ignore: [
    //       "@brainhubeu\react-carousellibstyle.css",
    //       "react-medium-image-zoomdiststyles.css",
    //     ],
    //   },
    // },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "src/favicon.png",
      },
    },
    "gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Chivo",
              variants: ["400", "700"],
              fontDisplay: "swap",
            },
            {
              family: "Inter",
              variants: ["400", "700"],
              fontDisplay: "swap",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript",
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `./static/gatsby-graphql.ts`,
    //     documentPaths: [
    //       "./src/**/*.{ts,tsx}",
    //       "./node_modules/gatsby-*/**/*.js",
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: config.themeColor,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CDTGFQKMKE", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMdx = ref.query.allMdx;
          ret.generator = "GatsbyJS Material Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMdx.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              }));
            },
            query: `
            {
              allMdx(
                limit: 1000
                filter: {fileAbsolutePath: {regex: "/blog|photo|work/"}, frontmatter: {draft: {ne: true}}}
                sort: {order: DESC, fields: frontmatter___date}
              ) {
                edges {
                  node {
                    id
                    excerpt
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      cover {
                        publicURL
                      }
                      date
                      category
                      tags
                    }
                    html
                  }
                }
              }
            }
          `,
            output: config.siteRss,
          },
        ],
      },
    },
  ],
};
