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
      description="Capturing the vibe of cities, sets of photos taken around the world."
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

export const pageQuery = graphql`query PhotoQuery {
  photo: allMdx(
    filter: {fileAbsolutePath: {regex: "/photo/"}, frontmatter: {draft: {ne: true}}}
    sort: {fields: [frontmatter___date], order: DESC}
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
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
