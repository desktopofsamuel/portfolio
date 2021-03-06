import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "components/SEO";
import PostTemplate from "components/PostTemplate";
import Related from "components/Related";

type BlogPostTemplateProps = {
  data: {
    blog: {
      frontmatter: {
        title: string,
      }
    }
  },
  pageContext: {
    prev: {
      frontmatter: {
        path: string,
        title: string,
        tldr: string;
        tag: [ string ],
      }
    }
    slug: string,
  },
};

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const postNode = data.blog;
  const post = postNode.frontmatter;
  const prev = pageContext.prev
    ? {
        path: `${pageContext.prev.frontmatter.path}`,
        title: pageContext.prev.frontmatter.title,
        excerpt: pageContext.prev.frontmatter.tldr,
      }
    : null;

  return (
    <Layout title={post.title}>
      <SEO postPath={pageContext.slug} postNode={postNode} postSEO />
      <PostTemplate postNode={postNode} />
      {prev && <Related node={prev} />}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogBySlug($id: String) {
  blog: mdx(id: {eq: $id}) {
    id
    body
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
          gatsbyImageData(layout: FULL_WIDTH)
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
