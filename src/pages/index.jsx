import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../layout/";
import PostListing from "../components/PostListing/PostListing";
import Button from "../components/Button/button";
import "./index.css";
import Now from "../components/Now/Now"
import SvgLines from 'react-mt-svg-lines';
import config from "../../data/SiteConfig";

const Subtitle = styled.h3`
text-align: right;

@media only screen and (max-width: 1024px) {
  text-align: center;
  padding: var(--padding-s);
}
`;

const Graphic = styled.figure`
text-align: left;
margin-left: -10%;
padding: var(--padding-s);

@media only screen and (max-width: 1024px) {
  padding: 10%;
  margin: 0 auto;

}
`

const Container = styled.main`

  .work-title {
    border: 1px solid var(--color-black-500);
    padding: var(--padding-m) 0;
    text-align: center;

    h1 {
      margin-bottom: 0;
    }
  }
`;

const Row = styled.div`
  margin: 0 auto;
  padding: var(--padding-m) 0;
  

  &.blog {
    padding: var(--padding-l) 0;
    display: grid;
    grid-gap: var(--padding-s);

    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }

    @media only screen and (min-width: 1280px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

  &.hero {
    min-height: 30rem;
    align-content: center;
    display: grid;
  }
`;


const Block = styled.div`
  &.intro {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;

    @media only screen and (max-width: 1024px) {
      display: block;
      text-align: center;
    }
  }

  &.HeroText {
    align-self: center;
  }
`;

const BlogIntro = styled.div`
  background: #000;
  padding: var(--padding-m);
  color: var(--color-background-500);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0;
  }

  h1 {
    margin: 1rem 0;
  }
`;

const BlogIntro_Top = styled.div``

const BlogIntro_Bottom = styled.div``

const BlogPost = styled(PostListing)`
  
`

const DetailGrid = styled.div`
display: grid;
grid-gap: 5rem;
grid-template-columns: 42ch auto;
@media only screen and (max-width: 1024px) {
  display: block;
  max-width: 42ch;
}
`
class Post extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
          <Container>
            <Row className="hero">
              <Block className="intro">
                <Graphic>
                <SvgLines className="svg" animate={ true } duration={ 3000 } fade >
                    <svg id="hello-svg" data-name="hello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 582 197">
                    <title>Hello</title>
                      <path strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" stroke="black" fill="none"  d="M9,155c38-16.7,73.7-45.7,97.3-66c21.3-18.3,32.7-35.7,37.3-52.7C148.1,20.1,145,9,133,9
    c-11,0-21,10.3-24.9,27.7c-4.5,19.9-22.1,107.8-29.4,149c15.7-72.3,36.3-81.3,53.7-81.3c22.3,0,24.7,18.7,19.4,39
    c-5.4,21.1-7.4,44.3,17.9,44.3c18,0,35.5-8.2,52.7-20c14-9.7,23-24,23-40c0-13.4-8-23.3-20.7-23.3s-24.3,12-24.3,33.3
    c0,27,16.3,48,44,48c25.7,0,47.7-19.7,62-44.7c13.6-23.7,30.7-64.7,33.3-92.7s-5.3-36-18.7-36s-24.7,17.3-28.7,43.3
    s-5.3,63.3,0,91.3s28,37.7,46,37.7s38.2-15.7,52-37c16.5-25.5,35.9-67.5,38.7-102c2-24.7-8.7-33.3-20-33.3c-14.7,0-23.3,13.3-28,38
    c-4.5,23.8-8,64-2,94c4.6,23.2,25.3,40.3,44.7,40.3c11.8,0,19.6-12.8,37.5-47.1c27.3-52.1,54.6-25.5,54.6-25.5
    C493.7,88.8,462.3,122,460,144c-0.7,6.8-0.4,12.9,0.8,18.1c3.5,15.2,14.5,23.6,28.8,23.6c22,0,34.5-20.8,36.7-40.7
    c2-18.7-10.5-32.9-10.5-32.9c12.1,12.3,43.5,9.5,56.5-5.8"/>
                     </svg>
                </SvgLines>
                </Graphic>
                <Block className="HeroText">
                <Subtitle>My name is Samuel Wong <br/> I like to design and write. <br/></Subtitle>
                <Subtitle><p className="subheading">
                  <Link className="textlink rightspace" to="/about">About Me</Link><Link className="textlink rightspace" to="/blog">Blog</Link>
                </p></Subtitle>
                
                </Block>
              </Block>
            </Row>
            <Row className="whatido">
              <small>What I Do</small>
              <DetailGrid>
                <div>
                  <h3>I'm a Product Designer.</h3>
                  <p>I lead design at HyperAir, a travel startup based in Hong Kong.</p>
                  <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple.</p>
                  <Link to="/work/hyperair">About Work</Link>
                </div>
                <div>
                </div>
                </DetailGrid>
            </Row>
            <Row className="blog">
              <BlogIntro>
                <BlogIntro_Top>
                <h1>Blog</h1> 
                </BlogIntro_Top>
                <BlogIntro_Bottom>
               <small>I write about</small>
                <h3><a href="categories/design-journal">#design</a></h3>
                <h3><a href="categories/app-talk">#technology</a> and</h3>
                <h3><a href="categories/productivity">#productivity</a>.</h3>
                </BlogIntro_Bottom>
              </BlogIntro>
              
              <BlogPost postEdges={postEdges} invert/>
            </Row>
            <Now className="full-width"/>
          </Container>
      </Layout>
    );
  }
}

export default Post;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LabQuery {
    allMarkdownRemark(
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
`;
