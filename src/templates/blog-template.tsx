import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO";
import PostTemplate from "../components/PostTemplate";
import Related from "../components/Related";
import WebMention from "components/WebMention";

type BlogPostTemplateProps = {
  data: {
    blog: {
      frontmatter: {
        title: string,
      }
    },
    WM: {
      edges: {
        node: {
          author: string,
        }
      }
    }
  },
  pageContext: {
    prev: {
      frontmatter: {
        path: string,
        title: string,
        tldr: string;
      }
    }
    slug: string,
    permalink: string,
  },
};

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const postNode = data.blog;
  // const postToc = data.blog.tableOfContents;
  const post = postNode.frontmatter;
  const webmention = data.WM.edges;
  const prev = pageContext.prev
    ? {
        path: `${pageContext.prev.frontmatter.path}`,
        title: pageContext.prev.frontmatter.title,
        excerpt: pageContext.prev.frontmatter.tldr,
      }
    : null;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={pageContext.slug} postNode={postNode} postSEO />
      {pageContext.permalink}
      <PostTemplate postNode={postNode} />
      {prev && <Related node={prev} />}
      {webmention && <WebMention edges={webmention} />}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogBySlug($id: String!, $permalink: String!) {
  blog: mdx(id: {eq: $id}) {
    id
    excerpt
    tableOfContents
    frontmatter {
      path
      title
      tldr
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
  WM: allWebMentionEntry(filter: {wmTarget: {eq: $permalink}}) {
    edges {
      node {
        type
        mentionOf
        wmTarget
        wmSource
        wmProperty
        wmPrivate
        wmId
        url
        author {
          name
          type
          photo
          url
        }
      }
    }
  }
}
`;
