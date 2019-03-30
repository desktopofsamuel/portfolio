import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import BigPostList from "../components/BigPostList/BigPostList";

const Container = styled.section`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
`
const Post = styled(PostListing)`
  grid-area: post;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-gap: var(--padding-l);
`

const Grid = styled.div`
`

const Hero = styled.div`
padding: var(--padding-m) 0 var(--padding-m) 0;
`

export default class CategoryTemplate extends React.Component {
  render(

    
  ) {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div>
          <Helmet
            title={`Posts in "${category}" | ${config.siteTitle}`}
          />
          <Grid>
          <Hero><h1>Posts in {category}</h1></Hero>
          <Row>
          <Container><BigPostList postEdges={postEdges} /></Container>
          </Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 500)
          timeToRead
          frontmatter {
            title
            tags
            path
            category
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
