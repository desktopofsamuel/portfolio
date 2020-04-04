import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Link from "../components/GatsbyLink/GatsbyLink";
import WorkHero from "../components/WorkHero/WorkHero";
import WaterSVG from "../../static/SVG/Water.svg";
import BookSVG from "../../static/SVG/Book.svg";
import HyperAirSVG from "../../static/SVG/HyperAir-2.svg";
import PinSVG from "../../static/SVG/Pin.svg";
import PlayaSVG from "../../static/SVG/Playa.svg";
import PingspaceSVG from "../../static/SVG/Pingspace.svg";
import PageTitle from "../elements/PageTitle";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import Boxed from "elements/Boxed";

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
  }
`;

const BoxContent = styled.div`
  max-width: 85vw;
  padding-left: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 95vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;

const PassionPart = styled.div``;
const PassionContent = styled.div``;

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

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    return (
      <Layout>
        <Boxed>
          <Row>
            <PageTitle title="My Work" subtitle="My Case Studies" />
          </Row>
          <Row>
            <h2>Case Studies</h2>
            <WorkHero postEdges={postEdges} />
          </Row>

          <Row>
            <h2>More Works</h2>
            <p>Check out some sites and apps that I have built.</p>
            <GridProject>
              <ProjectBox
                img={PinSVG}
                title="Pins"
                blurb="Curated design resource site coded by myself using GatsbyJS."
                year="2018"
                url="https://pins.desktopofsamuel.com"
              />
              {/* <ProjectBox
                  img={DocuSVG}
                  title="Road Not Taken"
                  blurb="A documentary I directed with multiple Asian film festival selected."
                  year="2016"
                  url="https://vimeo.com/ondemand/roadnottaken"
                /> */}
              <ProjectBox
                img={PingspaceSVG}
                title="Pingspace"
                blurb="Websites uptime monitor as a personal project"
                year="2018"
                url="https://pingspace.webflow.io/"
              />
              <ProjectBox
                img={WaterSVG}
                title="CDC Connects"
                blurb="Goals Tracking for Children With Special Educational Needs"
                year="2019"
                url="https://www.cdchk.org/news/cdc-app-launch/"
              />
              <ProjectBox
                img={PlayaSVG}
                title="Playa"
                blurb="Revamped portfolio and landing page of my agency"
                year="2018"
                url="https://playa.hk/portfolio.html"
              />
              <ProjectBox
                img={WaterSVG}
                title="New Asia Institue"
                blurb="Chinese Cultural Courses & Events"
                year="2017"
                url="https://newasia.org.hk/"
              />
              <ProjectBox
                img={BookSVG}
                title="Creation Cabin"
                blurb="Online novel platform supported by an independent publisher"
                year="2017"
                url="https://playa.hk/projects/creation-cabin-reading-platform.html"
              />
            </GridProject>
          </Row>
        </Boxed>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkQuery {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
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
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1140) {
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
            date
          }
        }
      }
    }
  }
`;
