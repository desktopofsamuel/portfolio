import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Link from "../components/common/GatsbyLink";
import WorkIndex from "../components/WorkIndex";
import WaterSVG from "../../static/SVG/Water.svg";
import BookSVG from "../../static/SVG/Book.svg";
import HyperAirSVG from "../../static/SVG/HyperAir-2.svg";
import PinSVG from "../../static/SVG/Pin.svg";
import PlayaSVG from "../../static/SVG/Playa.svg";
import PingspaceSVG from "../../static/SVG/Pingspace.svg";
import PageTitle from "../elements/PageTitle";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import WorkList from "../components/WorkList";
import ReadOn from "../elements/ReadOn";
import InlineCarousel from "../components/InlineCarousel";
import WorkDetail from "../components/WorkDetail";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-white);

  &:first-child {
    padding-bottom: 0;
  }
`;

const ClearRow = styled(Row)`
  padding: 0;
`;
const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;

const ProjectWrapper = styled.div`
  background: var(--color-white-700);
  align-content: space-between;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectContent = styled.div``;

const ProjectBottom = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  justify-self: flex-end;
`;

const ProjectIcon = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3``;

const ProjectBlurb = styled.p`
  font-size: 0.975rem;
`;

const ProjectYear = styled.small`
  margin-bottom: 0;
`;

const ProjectLink = styled(Link)``;
/* 
const ProjectBox = props => (
  <ProjectWrapper>
    <ProjectIcon>
      <img src={props.img} width="50px" />
    </ProjectIcon>
    <ProjectContent>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectBlurb>{props.blurb}</ProjectBlurb>
    </ProjectContent>
    <ProjectBottom>
      <ProjectYear>{props.year}</ProjectYear>
      <ProjectLink className="noeffect" to={props.url} target="blank">
        ↗
      </ProjectLink>
    </ProjectBottom>
  </ProjectWrapper>
);
 */

const Item = styled.div`
  padding: var(--padding-m);
  display: grid;
  grid-gap: 8px;
  margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  max-width: 36ch;
`;

const ListedItem = ({ title, description, url, role, year }) => (
  <Item>
    <ItemTitle>{title}</ItemTitle>
    <ItemText>{description}</ItemText>
    <ReadOn href={url} text="View Project" />
  </Item>
);

const CenterRow = styled(Row)`
  text-align: center;
  padding-top: 0;

  h1 {
    font-family: var(--font-tertiary);
    font-size: var(--font-size-xxl);
    margin: 0;
  }

  p {
    color: var(--color-primary-shades-300);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: repeat(1, minmax(400px, 1fr));
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-gap: var(--var-padding-s);
  }
`;

const WorkPage = ({ data }) => {
  const postEdges = data.feature.edges;
  const workEdges = data.work.edges;
  return (
    <Layout title="Case Studies">
      <Row>
        <Boxed>
          <CenterRow>
            <h1>Case Studies</h1>
            <p>Selected websites and app work since 2015.</p>
          </CenterRow>
          {/* <PageTitle title="My Work" subtitle="Case Studies" /> */}
          <Row>
            {/* <WorkIndex postEdges={postEdges} /> */}
            <WorkDetail postEdges={postEdges} />
          </Row>
          <ClearRow>
            <h2>More Works</h2>
            <p>Check out some of my personal work & design projects.</p>
          </ClearRow>
          <Row>
            <Grid>
              <WorkIndex postEdges={workEdges} detail></WorkIndex>
            </Grid>
          </Row>
          {/* <Row className="full-bleed">
            <WorkList />
          </Row> */}
        </Boxed>
      </Row>
    </Layout>
  );
};

export default WorkPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkQuery {
    feature: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
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
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            shortTitle
            projectTitle
            smallTitle
            feature
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            photo {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            date
          }
        }
      }
    }
    work: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            shortTitle
            projectTitle
            smallTitle
            feature
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            photo {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
