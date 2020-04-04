import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PhotoMagazine from "../components/PhotoMagazine/PhotoMagazine";
import Link from "../components/GatsbyLink/GatsbyLink";
import SEO from "../components/SEO/SEO";
import BlogFeature from "../components/BlogFeature/BlogFeature";
import styled from "styled-components";
import PageTitle from "elements/PageTitle";
import Boxed from "elements/Boxed";
import Img from "gatsby-image";
import ZoomImage from "../components/ZoomImage/ZoomImage";
import Image from "elements/Image";

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

const Main = styled.div``;

const Title = styled(PageTitle)``;

const CategoryBlock = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FeaturePhoto_Wrapper = styled.div`
  column-count: 3;
`;

class Photo extends React.Component {
  render() {
    const postEdges = this.props.data.photo.edges;
    const coverPhoto = this.props.data.cover;
    const featurePhoto = this.props.data.feature;
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
          <Boxed>
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
          </Boxed>
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
