import { graphql } from "gatsby";

export const blogpost = graphql`
  fragment blogpost on MdxEdge {
    node {
      fields {
        slug
        date(formatString: "MMM DD, YYYY", locale: "en")
      }
      excerpt(pruneLength: 200)
      timeToRead
      frontmatter {
        title
        tags
        path
        category
        date
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
      }
    }
  }
`;
