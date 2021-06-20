import { graphql } from "gatsby";

export const query = graphql`
  fragment tech on AirtableEdge {
    node {
      id
      data {
        Description {
          childMdx {
            body
          }
        }
        Link
        Image {
          url
        }
        Name
        Category
        Platform
        CTA
        ExtraLink
        Order
      }
    }
  }
`;
