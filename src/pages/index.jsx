import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { graphql } from "gatsby";
import Boxed from "components/utils/Boxed";
import Column from "components/utils/Column";
import ReadOn from "components/ReadOn";
import IndexIntro from "components/page/IndexIntro";
import WorkIndex from "components/page/IndexWork";
import IndexWorkLong from "components/page/IndexWorkLong";
import BlogIndex from "components/page/IndexBlog";
import IndexHero from "components/page/IndexHero";
import IndexPhoto from "components/page/IndexPhoto";
import CanvasResources from "components/CanvasResources";
import { SmallText, BodyMain } from "components/common/TextStyles";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Hero from "components/page/Hero";
import WorkDetail from "components/WorkDetail";
import BlogDetail from "components/page/BlogDetail";

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
  order: 0;

  @media only screen and (min-width: 480px) {
    order: 1;
  }
`;

const StickyWrapper = styled.div`
  position: relative;
  padding: 0 0 var(--var-padding-m) 0;
  small {
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 480px) {
    position: sticky;
    top: 3rem;
  }
`;

const Subtitle = styled(BodyMain)`
  font-size: 1.025rem;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold-alt);
  color: var(--color-text-secondary);
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
    display: grid;
    grid-template-columns: auto;
    grid-gap: var(--var-padding-m);
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

const PhotoIntro = styled.div`
  padding: var(--var-padding-m);
  h2 {
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    grid-column: span 2;
  }
`;

const WorkIndexGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--padding-s);

  &:first-child {
    grid-column: span 2;
  }
`;

const StyledBox = styled(Box)`
  padding: 0 0 var(--padding-s) 0;
`;

const IndexPageOld = ({ data }) => {
  const workfeatureEdges = data.Work2.edges;
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
        <Hero />
      </Row>
      <Row id="experience-designer">
        <Boxed>
          <IndexIntro
            index="#01"
            title="Interaction and Experience Design"
            description="View my extensive experience delivering products in corporations and start-ups"
            href="/work/"
            label="View my process"
          />
          <StyledBox>
            <WorkDetail postEdges={workfeatureEdges} detail />
          </StyledBox>
          <WorkIndexGrid>
            <WorkIndex postEdges={workEdges} />
          </WorkIndexGrid>
        </Boxed>
      </Row>
      <Row id="blog">
        <Box>
          <IndexIntro
            index="#02"
            title="Notes on Design & Technology"
            description=" I write about design, technology and productivity."
            href="/blog/"
            label="Read my blog"
          />
          <BlogDetail postEdges={blogEdges} />
        </Box>
      </Row>
      <Row>
        <IndexIntro
          index="#03"
          title="Tools & Resources"
          description="Best resources and tools I have been using. Guide on getting started in design & code."
          href="/resources/"
          label="My Awesome Setup"
        />
        <Boxed>
          <CanvasResources />
        </Boxed>
      </Row>
      <Row className="full-bleed full-content" id="photography">
        <IndexPhoto photo1Edges={photo1Edges} photo2Edges={photo2Edges} />
      </Row>
      {/* <Row className="full-bleed full-content" id="photography">
        <PhotoGrid>
          <IndexPhoto postEdges={photo1Edges} />
          <PhotoIntro>
            <small>03.</small>
            <h2 className="no-margin">Photography</h2>
            <Subtitle>
              Sets of photos according to cities that I have visited.
            </Subtitle>
            <ReadOn text="More Photos" href="/photo" />
          </PhotoIntro>
          <IndexPhoto postEdges={photo2Edges} />
        </PhotoGrid>
      </Row> */}
    </Layout>
  );
};

export default IndexPageOld;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexOldQuery {
    Work2: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { eq: true } }
      }
    ) {
      edges {
        ...workpost
      }
    }
    Work: allMdx(
      skip: 1
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { eq: true } }
      }
    ) {
      edges {
        ...workpost
      }
    }
    Blog: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Design Journal" } } }
    ) {
      ...bloglist
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
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  transformOptions: { fit: COVER }
                )
              }
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
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  }
`;
