const config = require("./data/SiteConfig");
const urljoin = require("url-join");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
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
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/content/work/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "page",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photo",
        path: `${__dirname}/content/photo/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.jsx")
        },
        extensions: [`.mdx`, `md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1235
            }
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: "remark-figure" }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "src/favicon.png"
      }
    },
    /* {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        tags: true
      }
    }, */
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "hey8lez"
        },
        google: {
          families: ["Merriweather", "IBM Plex Sans:400,400i,500,700"]
        }
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
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
                custom_elements: [{ "content:encoded": edge.node.html }]
              }));
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      cover {
                        publicURL
                        size
                        childImageSharp {
                          sizes(maxWidth: 1140) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                          }
                        }
                      }
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss
          }
        ]
      }
    }
  ]
};
