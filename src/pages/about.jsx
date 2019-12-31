import React, { Component } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layout";
import Img from "gatsby-image";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import Link from "../components/GatsbyLink/GatsbyLink";
import PageTitle from "elements/PageTitle";
import ImageZoom from "react-medium-image-zoom";
import Boxed from "elements/Boxed";

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
  }
`;

const BoxContent = styled.div`
  max-width: 60vw;
  padding: 0 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 80vw;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0 1rem;
  }
`;

const RowHero = styled(Row)`
  background: var(--color-white-700);
`;

const PhotoFrame = styled.figure`
  grid-area: Photo;
  width: 100%;
  margin: 0;
  padding: 2rem 0;
`;

const WrapperIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: -100px;
  padding-bottom: 100px;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
    display: block;
  }
`;

const WrapperNav = styled.div`
  > * {
    display: inline-block;
    margin-right: 2rem;
  }
`;

const GridBio = styled.div`
  display: grid;
  grid-template-columns: auto [P2] minmax(auto, 45ch);
`;

const GridSkill = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 7fr);
  grid-gap: var(--var-padding-m);
  width: 100%;
  margin: var(--var-padding-m) 0;
`;

const Intro = styled.div`
  grid-column: span 5 / 8;
  background: var(--color-background-500);
  padding: 2rem;
  z-index: 1000;
  @media only screen and (max-width: 768px) {
    padding: 0;
    background: none;
  }
`;

const P1 = styled.div`
  grid-area: P1;
  max-width: 60ch;
`;
const P2 = styled.div`
  grid-area: P2;
`;

const DesignPart = styled.div``;
const DesignContent = styled.div``;
const DesignContentGrid = styled.div`
  margin-top: var(--var-padding-m);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5rem;
  p {
    font-family: var(--font-primary);
    text-transform: none;
    font-size: 1.2rem;
    color: var(--color-secondary-500);
    font-weight: 600;
    display: block;
    margin-bottom: var(--var-padding-m);
    margin-block-start: 0;
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
class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
        </Helmet>
        <Layout>
          <RowHero className="full-bleed">
            <Boxed>
              <PageTitle
                title="About Me"
                subtitle="Little things about myself"
              />
              <PhotoFrame>
                <Img
                  fluid={this.props.data.cover.childImageSharp.fluid}
                  width="100%"
                  alt="About Cover Photo"
                />
              </PhotoFrame>
              <WrapperIntro>
                <Intro>
                  <small>Welcome!</small>
                  <p>
                    I am constantly learning and I treasure every opportunity to
                    design better. I’m learning to code right now and this
                    website is my first attempt. <br /> <br /> ’m hoping to
                    express my creativity in this site though design, coding and
                    writing.{" "}
                  </p>
                  <WrapperNav>
                    <Link to="#bio">
                      <small>01. Bio </small>
                    </Link>
                    <Link to="#skills">
                      <small>02. Skills </small>
                    </Link>
                  </WrapperNav>
                </Intro>
              </WrapperIntro>
            </Boxed>
          </RowHero>
          <Row id="bio">
            <Boxed>
              <P1>
                <small>01. Bio</small>
                <h2>Journey to Design</h2>
                <p>
                  I studied cultural and film theories at The University of Hong
                  Kong. I took a gap year and worked in iTunes & App Store,
                  Apple as a Cross-Content Intern during college and this
                  valuable experience sparked my interest in digital products
                  and web.
                </p>
              </P1>
              <PhotoFrame>
                <Img
                  fluid={this.props.data.bio.childImageSharp.fluid}
                  width="100%"
                  alt="About Cover Photo"
                />
              </PhotoFrame>
              <GridBio>
                <P2>
                  <p>
                    After my internship, I took on some freelance projects as
                    well as volunteered for students and community
                    organisations, acquiring various skill sets to be a hybrid
                    designer.
                    <br />
                    <br />I started an agency Playa with a partner in 2015,
                    hoping to help small businesses, entrepreneurs and
                    nonprofits launch their projects and bridge the gap between
                    project owners and end-users. We have launched dozens of
                    websites and apps in Hong Kong with multiple recognitions.
                    <br />
                    <br />
                    Currently, I work as the Principal Designer at Hyperair, a
                    start-up that aims to reinvent travel experiences.
                  </p>
                </P2>
              </GridBio>
            </Boxed>
          </Row>
          <RowHero id="skills" className="full-bleed">
            <Boxed>
              <small>02. Skills</small>
              <h1>Design, Photography, Writing.</h1>
              <GridSkill>
                <DesignPart>
                  <h3>Design</h3>
                </DesignPart>
                <DesignContent>
                  <p>
                    Design has been an integral part of my life. It’s been my
                    passion to learn how to deliver functional and elegant
                    design.{" "}
                  </p>
                  <DesignContentGrid>
                    <p>Web & App UI Design</p>
                    <p>User Experience Design</p>
                    <p>Interaction Design</p>
                    <p>Prototyping</p>
                    <p>Wireframing</p>
                    <p>Frontend Development</p>
                  </DesignContentGrid>
                </DesignContent>
              </GridSkill>
              <GridSkill>
                <PassionPart>
                  <h3>Passion</h3>
                </PassionPart>
                <PassionContent>
                  <p>
                    Through freelancing, I'm also practicing in the field of
                    digital products and media, to become a hybrid creative.
                  </p>
                  <DesignContentGrid>
                    <p>Photography</p>
                    <p>Videography</p>
                    <p>Social Media</p>
                    <p>Copywriting</p>
                  </DesignContentGrid>
                </PassionContent>
              </GridSkill>
            </Boxed>
          </RowHero>
        </Layout>
      </div>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "images/About-Cover.jpg" }) {
      ...fluidImage
    }
    bio: file(relativePath: { eq: "images/Bio.jpg" }) {
      ...fluidImage
    }
  }
`;
