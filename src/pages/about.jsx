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
import Resume from "components/Resume/Resume";

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
  }
`;

const ShortBoxed = styled(Boxed)`
  max-width: 50vw;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 80vw;
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

const AltRow = styled(Row)`
  background: var(--color-white-700);
`;

const InvertRow = styled(Row)`
  background: var(--color-secondary-700);
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
const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    font-family: var(--font-primary);
    font-size: 1.2rem;
    color: var(--color-secondary-500);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--var-padding-m);
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

const ProjectBox = (props) => (
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
          <Row>
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
                  <small>Hi! My name is Samuel.</small>
                  <p>
                    I’m pursuing a career in the field of UI/UX Design because
                    I'm deeply passionate about technology and how it profoundly
                    changes our way of living. <br />
                    <br />
                    The process of turning an idea into a viable product gives
                    me great satisfaction. Being a self-starter, I’m highly
                    motivated staying up-to-date with the latest technology,
                    industry practice and design trends.
                  </p>
                  <WrapperNav>
                    <Link to="#bio">
                      <small>01. Bio </small>
                    </Link>
                    <Link to="#resume">
                      <small>02. Resume </small>
                    </Link>
                    <Link to="#skills">
                      <small>03. Skills </small>
                    </Link>
                  </WrapperNav>
                </Intro>
              </WrapperIntro>
            </Boxed>
          </Row>
          <AltRow id="bio" className="full-bleed">
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
          </AltRow>
          <InvertRow id="resume" className="full-bleed">
            <ShortBoxed>
              <small>02. Resume</small>
              <Resume />
            </ShortBoxed>
          </InvertRow>

          <AltRow id="skills" className="full-bleed">
            <Boxed>
              <small>03. Skills</small>
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
                  <SkillList>
                    <li>Web & App UI Design</li>
                    <li>User Experience Design</li>
                    <li>Interaction Design</li>
                    <li>Prototyping</li>
                    <li>Wireframing</li>
                    <li>Frontend Development</li>
                  </SkillList>
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
                  <SkillList>
                    <li>Photography</li>
                    <li>Videography</li>
                    <li>Social Media</li>
                    <li>Copywriting</li>
                  </SkillList>
                </PassionContent>
              </GridSkill>
            </Boxed>
          </AltRow>
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
