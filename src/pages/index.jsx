import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Boxed from "components/utils/Boxed";
import Column from "components/utils/Column";
import ColumnItem from "components/utils/ColumnItem";
import ReadOn from "components/ReadOn";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import WorkIndex from "../components/page/IndexWork";
import BlogIndex from "../components/page/IndexBlogOld";
import IndexHero from "../components/page/IndexHero";
import IndexPhoto from "../components/page/IndexPhoto";
import IndexIntro from "components/page/IndexIntro";
import IndexBlog from "components/page/IndexBlog";
import Centered from "components/utils/Centered";
import { SmallText } from "components/common/TextStyles";

const Box = styled(Boxed)``;

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
  content-visibility: auto;
`;

const ColumnSpaced = styled(Column)`
  grid-gap: 3rem;
`;

const UnevenColumn = styled(ColumnSpaced)`
  grid-template-columns: 7fr 3fr;
`;

const GreyRow = styled(Row)`
  background: var(--color-background-alt);
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

const Subtitle = styled.p`
  font-size: 1.025rem;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold-alt);
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  align-items: flex-start;

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2px;
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1980px;
    margin: 0 auto;
  }
`;

const PhotoIntroWrapper = styled.div`
  padding: 1rem;
  display: grid;
  place-content: center;

  @media only screen and (max-width: 768px) {
    grid-column: span 2;
  }
`;

const WorkIndexGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: var(--padding-s);
`;

const IndexPage = ({ data }) => {
  const workEdges = data.Work.edges;
  const blogEdges = data.Blog.edges;
  const photo1Edges = data.Photo1.edges;
  const photo2Edges = data.Photo2.edges;

  return (
    <Layout>
      <Helmet title={config.siteTitle}>
        <meta name="twitter:title" content={config.siteTitle} />
        <meta property="og:title" content={config.siteTitle} />
      </Helmet>
      <Row>
        <IndexHero />
      </Row>
      {/* <Row id="experience-designer">
        <Box>
          <ColumnSpaced>
            <StickyBox>
              <StickyWrapper>
                <small>01.</small>
                <h2 className="no-margin">Interaction and Experience Design</h2>
                <p>
                  I'm a full-stack UI/UX designer with 5+ years of experience,
                  designing and delivering websites and mobile applications with
                  bespoke user experience.
                </p>
                <ReadOn text="View My Process" href="/work" />
              </StickyWrapper>
            </StickyBox>
            <WorkIndexGrid>
              <WorkIndex postEdges={workEdges} />
            </WorkIndexGrid>
          </ColumnSpaced>
        </Box>
      </Row> */}
      <Row id="blog">
        <Box>
          <IndexBlog postEdges={blogEdges} />
        </Box>
      </Row>
      <Box>
        <IndexIntro
          index="#03"
          title="Tools & Resources"
          description="Best resources and tools I have been using and recommend for getting start in design, code."
          href="/setup"
          label="My Awesome Setup"
        />
      </Box>
      {/* <Row id="blog">
        <Box>
          <UnevenColumn>
            <RightStickyBox>
              <StickyWrapper>
                <BlogIntro>
                  <SmallText>02.</SmallText>
                  <h2 className="no-margin">Notes on Design & Technology</h2>
                  <Subtitle>
                    I write about design, technology and productivity.
                  </Subtitle>
                  <ReadOn text="Read My Blog" href="/blog" />
                </BlogIntro>
              </StickyWrapper>
            </RightStickyBox>
            <Blog>
              <BlogIndex postEdges={blogEdges} />
            </Blog>
          </UnevenColumn>
        </Box>
      </Row> */}
      <Row className="full-bleed full-content" id="photography">
        <IndexPhoto photo1Edges={photo1Edges} photo2Edges={photo2Edges} />
      </Row>
      <Row id="newsletter">
        <Box>
          <Column>
            <div>
              <h2>Join me in the journey of design and build proudct</h2>
              <p>
                Each month, I break down a product idea and build a prototype
                around it. I share my product process you can't find on Google.
              </p>
            </div>
            <div>
              <iframe
                src="https://desktopofsamuel.substack.com/embed"
                width="100%"
                height="320"
                style={{ border: "1px solid #EEE", background: "white" }}
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </Column>
        </Box>
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
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { eq: true } }
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
            shortTitle
            projectTitle
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
      limit: 4
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
