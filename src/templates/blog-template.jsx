import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO";
import PostTemplate from "../components/PostTemplate";

const BlogPostTemplate = ({ data, pageContext }) => {
  const postNode = data.blog;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={pageContext.slug} postNode={postNode} postSEO />
      <Boxed>
        <PostTemplate postNode={postNode} />
      </Boxed>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogBySlug($id: String) {
    blog: mdx(id: { eq: $id }) {
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
  }
`;
