import { graphql } from "gatsby";

export const workpost = graphql`
  fragment workpost on MdxEdge {
    node {
      fields {
        slug
        date
      }
      excerpt
      timeToRead
      frontmatter {
        title
        subtitle
        shortTitle
        projectTitle
        smallTitle
        feature
        tags
        color
        cover {
          publicURL
          size
          childImageSharp {
            gatsbyImageData(height: 1200, placeholder: NONE, layout: FULL_WIDTH)
          }
        }
        photo {
          publicURL
          size
          childImageSharp {
            gatsbyImageData(height: 1400, placeholder: NONE, layout: FULL_WIDTH)
          }
        }
        date
      }
    }
  }
`;
