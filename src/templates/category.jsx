import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import styled from "styled-components";


const Post = styled(PostListing)`
  grid-area: post;
  width: 25vw;
`

const Grid = styled.div`
`

const Hero = styled.div`
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
          <Post postEdges={postEdges} />
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
            date
          }
          excerpt
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
