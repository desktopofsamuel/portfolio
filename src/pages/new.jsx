import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import config from "../../data/SiteConfig"
import Navigation from "../components/Navigation/Navigation";
import Layout from "../layout-full/";
import WorkHero from "../components/WorkHero/WorkHero";

const Row = styled.section`
width: 100%;
padding: 3rem 0;
margin: 0 auto;
background: white; 
`

const BoxContent = styled.div`
max-width: 960px;
padding: 1rem 0;
margin: 0 auto;

@media only screen and (max-width: 768px) {
padding: 1rem 1rem;
}

`

const Intro = styled(BoxContent)`
justify-content: center;
text-align: center;

`

const Hero = styled.div`
text-align: left;
`

const HeroGraphics = styled.figure`
margin: 0;
padding: 0;

`

const WhiteBox = styled.div`
border-top: 1px var(--color-brand-500) solid;
background: white;
height: 50px;
position: relative;
overflow: hidden;
bottom: 50px;
`

const GraphicBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;


& > * {
  margin-right: 16px;
  overflow: hidden;
  position: relative;
  left: 0;
  bottom: 20px;
  transition: all 0.1s ease-in;

  &:hover {
    bottom: 30px;
  }
  
  &:first-child {
    margin-right: -8px;
  }
}
`
const IntroBox = styled.div`
margin: 0 auto;
text-align: center;
padding: 0 0 2rem 0;
max-width: 400px;
`

const CTAButton = styled.button`
border: 1px solid var(--color-brand-500);
box-sizing: border-box;
background: none;
padding: 1rem 2rem;
transition: all 0.3s ease-in-out;

&:hover {
background: var(--color-brand-500);
color: var(--color-black-500);
}
`

const MoreButton = styled.button`
box-sizing: border-box;
background: none;
padding: 1rem 2rem;
border: 0;
margin: 0 auto;
transition: all 0.3s ease-in-out;
&:hover {
background: var(--color-brand-500);
color: var(--color-black-500);
}
`

const FullGreyRow = styled(Row)`
background: var(--color-white-700);
`

const AboutBox = styled.div`
`

const HalfBox = styled.div`
width: 55ch;

@media only screen and (max-width: 768px) {
  width: 100%;
}
`

const Subtitle = styled.p`
font-family: var(--primary-font);
font-weight: 500;
text-align: center;
`

const Center = styled.div`
display: flex;
width: 100%;
align-items: center;
`


class New extends React.Component {
  render() {
    const postEdges = this.props.data.Work.edges;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation/>
        <Intro>
          <Hero>
          <small>When Design Meets Technology</small>
          <h1>Designing with <br/><span class="brand">complexity</span></h1>
          <HeroGraphics>
          <GraphicBox>
            <svg class="triangle" width="96" height="83" viewBox="0 0 96 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.96668 81L48 3L93.0333 81H2.96668Z" stroke="#535E7C" stroke-width="3"/>
            </svg>
            <svg width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="53.5" cy="53.5" r="52" stroke="#535E7C" stroke-width="3"/>
            </svg>
            <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="79" height="79" stroke="#535E7C" stroke-width="3"/>
            </svg>
            <svg width="133" height="126" viewBox="0 0 133 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16493 48.5963L66.5 1.8541L130.835 48.5963L106.261 124.227H26.7387L2.16493 48.5963Z" stroke="#535E7C" stroke-width="3"/>
            </svg>
          </GraphicBox>
          <WhiteBox/>
          </HeroGraphics>
          </Hero>
          <IntroBox>
            <small>Hi! My name is Samuel</small>
            <Subtitle>I believe design is the way to navigate today's complex world. Join me in this journey.</Subtitle>
          </IntroBox>
          <CTAButton>Get In Touch</CTAButton>
        </Intro>
        <Row>
          <BoxContent>
            <HalfBox>
            <small>I'm working as</small>
            <h2>Product Designer</h2>
            <p>I’m currently based in Hong Kong, specialising in interface and user-experience design, crafting outstanding products. <br/> <br/> Currently, I lead design at Hyperair as Principal Designer. Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple.</p>
            <Link to="/about">About Me →</Link>
            </HalfBox>
          </BoxContent>
        </Row>
        <FullGreyRow>
          <BoxContent>
            <AboutBox>
              <small>Let's See</small>
              <h2>My Work</h2>
              <p>I’m currently based in Hong Kong, specialising in interface and user-experienc design, crafting outstanding products.  <br/>
              Currently, I lead design at Hyperair as Principal Designer. Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple.</p>
            </AboutBox>
            <WorkHero postEdges={postEdges}/>
            <Center><MoreButton>View More →</MoreButton></Center>
          </BoxContent>
        </FullGreyRow>
        <Row>
          <BoxContent>

          </BoxContent>
        </Row>
      </div>

);
}
}

export default New;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
query IndexQuery {
  Work: allMarkdownRemark(
    limit: 5
    sort: { fields: [fields___date], order: DESC }
    filter: {fileAbsolutePath: {regex: "/work/.*\\.md$/"}}
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
          path
          tags
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
  Blog: allMarkdownRemark(
    limit: 3
    sort: { fields: [fields___date], order: DESC }
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
          path
          tags
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
`