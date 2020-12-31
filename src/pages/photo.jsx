import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import Layout from "../layout";
import PhotoMagazine from "../components/page/PhotoMagazine";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
`;

const Grid = styled.section``;

const Title = styled(PageTitle)``;

const PhotoPage = ({ data }) => {
  const postEdges = data.photo.edges;

  return (
    <Layout
      title="Photography"
      description="Photography Portfolio of Samuel W."
      keywords="Photography, Travel, Sightseeing, Canon, iPhone, City, Journey"
    >
      <Row>
        <Boxed>
          <Title title="Photography" />
          <Grid>
            <Row>
              <PhotoMagazine postEdges={postEdges} />
            </Row>
          </Grid>
        </Boxed>
      </Row>
    </Layout>
  );
};

export default PhotoPage;

/* eslint no-undef: "off" */

export const pageQuery = graphql`
  query PhotoQuery {
    photo: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/photo/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 70)
          frontmatter {
            title
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1200) {
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
    }
    #   cover: file(relativePath: { eq: "images/Photo-Cover.jpg" }) {
    #     ...fluidImage
    #   }
    #   featureretired: allFile(
    #     filter: {
    #       relativeDirectory: { in: "images" }
    #       name: { regex: "/Photography/" }
    #     }
    #   ) {
    #     edges {
    #       node {
    #         base
    #         childImageSharp {
    #           fixed {
    #             ...GatsbyImageSharpFixed_withWebp
    #           }
    #         }
    #       }
    #     }
    #   }
    #   feature: allCloudinaryMedia(filter: { tags: { eq: "highlight" } }) {
    #     edges {
    #       node {
    #         id
    #         secure_url
    #       }
    #     }
    #   }
  }
`;

/* 
// Cloudinary Feature Photo 

const BlogFeatureWrapper = styled.div`
  width: 100%;
  position: relative;
`;

<FeaturePhoto_Wrapper>
  {featurePhoto.edges.map(edge => (
    /*                     <Img fixed={edge.node.childImageSharp.fixed} /> 
    <Image src={edge.node.secure_url} />
  ))}
</FeaturePhoto_Wrapper> 

// Feautre Top Photo
<Img fluid={coverPhoto.childImageSharp.fluid} alt="Photo By Samuel Wong"/>
*/
