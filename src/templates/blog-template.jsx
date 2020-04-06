import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Post from "../components/Post/Post";
import Boxed from "elements/Boxed";

export default class BlogTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const relateNode = this.props.data.related;
    const postNode = this.props.data.post;
    const post = postNode.frontmatter;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Boxed>
          <Post postNode={postNode} />
        </Boxed>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogBySlug($id: String, $category: String) {
    post: mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        path
        title
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
        category
        tags
      }
      fields {
        slug
        date(formatString: "MMM DD, YYYY", locale: "en")
      }
    }
    related: allMdx(
      sort: { fields: [fields___date], order: DESC }
      limit: 5
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
