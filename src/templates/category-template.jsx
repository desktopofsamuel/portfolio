import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import PageTitle from "elements/PageTitle";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PostList from "../components/page/BlogListWide";

const Container = styled.section`
  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

const WideBoxed = styled(Boxed)`
  max-width: 1024px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--padding-l);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Hero = styled.div`
  padding: var(--padding-m) 0 var(--padding-m) 0;
`;

const CategoryPageTemplate = ({ data, pageContext }) => {
  const { category } = pageContext;
  const postEdges = data.allMdx.edges;

  return (
    <Layout>
      <Helmet
        title={`Discover Posts in "${category}" | ${config.siteTitleAlt}`}
      />
      <WideBoxed>
        <Grid>
          <Hero>
            <PageTitle subtitle={`Discover Post in`} title={`${category}`} />
          </Hero>
          <Row>
            <Container>
              <PostList category="none" postEdges={postEdges} />
            </Container>
          </Row>
        </Grid>
      </WideBoxed>
    </Layout>
  );
};

export default CategoryPageTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 200)
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
