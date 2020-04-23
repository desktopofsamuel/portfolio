import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "elements/PageTitle";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import PhotoMagazine from "../components/PhotoMagazine";

const PhotoBoxed = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-s) 0;
  background: white;
`;

const PageHeader1 = styled.div`
  border-top: 3px solid var(--color-black-500);
  margin-bottom: 8px;
`;

const PageHeader2 = styled.div`
  border-top: 1px solid var(--color-black-500);
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
      <PhotoBoxed>
        <Grid>
          <Row>
            <Title title="Photography" />
          </Row>
          <Row>
            <PageHeader1 />
            <PageHeader2 />
          </Row>
          <Row>
            <PhotoMagazine postEdges={postEdges} />
          </Row>
        </Grid>
      </PhotoBoxed>
    </Layout>
  );
};

export default PhotoPage;

/* eslint no-undef: "off" */

export const pageQuery = graphql`
  query PhotoQuery {
    photo: allMdx(
      filter: { fileAbsolutePath: { regex: "/photo/" } }
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
