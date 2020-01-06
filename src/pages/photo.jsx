import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PhotoHero from "../components/PhotoCard/PhotoCard";
import Link from "../components/GatsbyLink/GatsbyLink";
import SEO from "../components/SEO/SEO";
import BlogFeature from "../components/BlogFeature/BlogFeature";
import styled from "styled-components";
import PageTitle from "elements/PageTitle";

const Row = styled.section`
  padding: var(--var-padding-s) 0;
  background: white;
`;

const Grid = styled.section``;

const Main = styled.div`
  h1 {
    font-family: var(--font-primary);
  }
`;

const BlogFeatureWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Left = styled.aside`
  grid-area: left;
`;

const Right = styled.div`
  grid-area: right;
`;

const BlogSubtitle = styled.h5`
  font-style: normal;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CategoryBlock = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PhotoGrid = styled(PhotoHero)``;

class Photo extends React.Component {
  render() {
    const postEdges = this.props.data.photo.edges;
    return (
      <Layout>
        <Helmet title={`Photography  | ${config.siteTitle}`}>
          <meta
            name="twitter:title"
            content={`Photo Portfolio | ${config.siteTitle}`}
          />
          <meta
            property="og:title"
            content={`Photo Portfoliog | ${config.siteTitle}`}
          />
          <meta
            name="description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            name="twitter:description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            property="og:description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            name="keywords"
            content="Photography, Travel, Sightseeing, Canon, iPhone, City, Journey"
          />
        </Helmet>
        <Row>
          <Grid>
            <Row>
              <PageTitle
                title="Photography"
                description="I’m greatly inspired by cities and stories within. Therefore I
                publish sets of photos according to cities that I have visited."
              />
            </Row>
            <PhotoGrid postEdges={postEdges} />
          </Grid>
        </Row>
      </Layout>
    );
  }
}

export default Photo;

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
          excerpt(pruneLength: 300)
          frontmatter {
            title
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
  }
`;