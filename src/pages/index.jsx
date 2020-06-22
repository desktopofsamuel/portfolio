import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Boxed from "elements/Boxed";
import Column from "elements/Column";
import ReadOn from "elements/ReadOn";
import Link from "../components/common/GatsbyLink";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import WorkIndex from "../components/WorkIndex";
import BlogListing from "../components/BlogListing";
import WorkIcon from "../../static/SVG/Work.svg";
import BlogIcon from "../../static/SVG/Blog.svg";
import Now from "../components/Now";
import Profile from "../../static/images/Profile.webp";
import IndexHero from "../components/IndexHero";
import IndexPhoto from "../components/IndexPhoto";

const Box = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
`;

const ColumnSpaced = styled(Column)`
  grid-gap: 3rem;
`;

const UnevenColumn = styled(ColumnSpaced)`
  grid-template-columns: 7fr 3fr;
`;

const GreyRow = styled(Row)`
  background: var(--color-white-300);
`;

const StickyBox = styled.div`
  height: 100%;
`;

const RightStickyBox = styled.div`
  @media only screen and (min-width: 425px) {
    order: 1;
  }
`;

const StickyWrapper = styled.div`
  position: relative;
  padding: 0 0 var(--var-padding-m) 0;

  small {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 425px) {
    position: sticky;
    top: 3rem;
  }
`;

const AboutIcon = styled.div`
  justify-self: flex-end;
`;

const HalfBox = styled.div``;

const ProfileImage = styled.div`
  width: 100%;

  img {
    box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
  }
`;

const Subtitle = styled.p`
  font-size: 1.025rem;
  font-family: var(--font-secondary);
  font-weight: 500;
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const Blog = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  align-items: flex-start;

  & > div:nth-child(2) {
    grid-column: span 4;
  }

  & > div:nth-child(3) {
    grid-column: span 4;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 10%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  z-index: 1000;
`;

const BlogIntro = styled.div`
  margin-bottom: var(--var-padding-m);
  p {
    color: var(--color-primary-700);
  }
`;

const Contact = styled.div`
  display: inline-block;

  small {
    font-family: var(--font-secondary);
  }

  h2 {
    color: var(--color-primary-700);
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2px;
  }
`;

const PhotoIntro = styled.div`
  padding: var(--var-padding-m);
  h2 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    grid-column: span 2;
  }
`;
const IndexPage = ({ data }) => {
  const workEdges = data.Work.edges;
  const blogEdges = data.Blog.edges;
  const photo1Edges = data.Photo1.edges;
  const photo2Edges = data.Photo2.edges;
  return (
    <Layout title="Home">
      <GreyRow>
        <IndexHero />
      </GreyRow>
      <Row className="full-bleed" id="experience-designer">
        <Box>
          <ColumnSpaced>
            <StickyBox>
              <StickyWrapper>
                <small>01.</small>
                <h2 className="no-margin">Interaction and Experience Design</h2>

                <p>
                  I'm a multi-disciplinary designer with 5 years of experience
                  in delivering elegant design and practical solutions.
                </p>
                <ReadOn text="View My Work" href="/work" />
              </StickyWrapper>
            </StickyBox>
            <WorkIndex postEdges={workEdges} />
          </ColumnSpaced>
        </Box>
      </Row>
      <GreyRow id="blog">
        <Box>
          <UnevenColumn>
            <RightStickyBox>
              <StickyWrapper>
                <BlogIntro>
                  <small>02.</small>
                  <h2 className="no-margin">Notes on Design & Technology</h2>
                  <Subtitle>
                    I write about design, technology and productivity.
                  </Subtitle>
                  <ReadOn text="Read My Blog" href="/blog" />
                </BlogIntro>
              </StickyWrapper>
            </RightStickyBox>
            <Blog>
              <BlogListing postEdges={blogEdges} />
            </Blog>
          </UnevenColumn>
        </Box>
      </GreyRow>
      <Row className="full-bleed full-content" id="photography">
        <PhotoGrid>
          <IndexPhoto postEdges={photo1Edges} />
          <PhotoIntro>
            <h6>03.</h6>
            <h2>Photography</h2>
            <Subtitle>
              Sets of photos according to cities that I have visited.
            </Subtitle>
            <ReadOn text="More Photos" href="/photo" />
          </PhotoIntro>
          <IndexPhoto postEdges={photo2Edges} />
        </PhotoGrid>
      </Row>
    </Layout>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    Work: allMdx(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            subtitle
            path
            color
            cover {
              publicURL
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    Blog: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Design Journal" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            title
            path
            tags
            category
            tldr
            cover {
              ...fluidImage
            }
            date
          }
        }
      }
    }
    Photo1: allMdx(
      filter: { fileAbsolutePath: { regex: "/photo/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
              ...fluidImage
            }
          }
        }
      }
    }
    Photo2: allMdx(
      filter: { fileAbsolutePath: { regex: "/photo/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 7
      skip: 4
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
              ...fluidImage
            }
          }
        }
      }
    }
  }
`;
