import { graphql } from "gatsby";

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(width: 632, layout: FULL_WIDTH)
    }
  }
`;

export const mediumImage = graphql`
  fragment mediumImage on File {
    childImageSharp {
      gatsbyImageData(width: 632, layout: CONSTRAINED)
    }
  }
`;

export const largeImage = graphql`
  fragment largeImage on File {
    childImageSharp {
      gatsbyImageData(width: 1280, layout: CONSTRAINED)
    }
  }
`;
