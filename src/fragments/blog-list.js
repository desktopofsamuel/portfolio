import { graphql } from "gatsby";

export const bloglist = graphql`
  fragment bloglist on MdxConnection {
    edges {
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
          category
          tldr
          cover {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
