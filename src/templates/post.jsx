import React from "react";
import { graphql } from "gatsby";
import { MDXProvider, MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import styled from "styled-components";

import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import kebabCase from "lodash/kebabCase";
import ZoomImage from "components/ZoomImage/ZoomImage";

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
    padding-top: 0;
  }
`;

const BoxContent = styled.div`
  max-width: 85vw;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 95vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 768px;
    padding: 0;
  }
`;

const Post = styled.article`
  display: block;
  margin: var(--padding-m) auto 0 auto;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-gap: 36px;
    grid-template-columns: [head] minmax(auto, 60ch) [main] minmax(23ch, 55ch) [meta] auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: grid;
    grid-gap: 48px;
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
      "head main"
      "meta main";
  }
`;

const Header = styled.div`
  overflow-wrap: break-word;
  grid-area: head;
  padding-bottom: 3rem;
`;

const Meta = styled.div`
  display: grid;
  grid-gap: 8px 0;
  grid-template-rows: [date] 1fr [tag] 1fr [share] 1fr;
  grid-template-columns: [date tag share] 1fr;

  @media screen and (max-width: 425px) {
    grid-template-columns: [date] 1fr [share] max-content;
    grid-template-rows: [date share] 1fr;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 2fr max-content;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "date share"
      "tag tag";
  }
`;

const Main = styled.div`
  grid-area: main;
  overflow: auto;
`;

const Sidebar = styled.aside`
  grid-area: meta;
`;

const PostTitle = styled.h1`
  grid-area: title;
  font-family: var(--font-primary);
`;
const PostMeta = styled.small`
  margin: 0;
  color: var(--color-grey-500);
`;

const PostDate = styled.div`
  grid-area: date;

  h5 {
    margin-bottom: 0;
  }
`;

const PostPhoto = styled(ZoomImage)`
  grid-area: photo;
`;

const PostTag = styled.div`
  grid-area: tag;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const PostShare = styled.div`
  grid-area: share;
`;

export default class BlogPageTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.post;
    const relateNode = this.props.data.related;
    const post = postNode.frontmatter;

    return (
      <Layout className="post-template">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitleAlt}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Row>
          <BoxContent>
            <Post>
              <Header>
                <PostTitle>{post.title}</PostTitle>
                <Meta>
                  <PostDate>
                    <PostMeta>Published On</PostMeta>
                    <h5>{postNode.fields.date}</h5>
                  </PostDate>
                  <PostTag>
                    <PostMeta>Tag</PostMeta>
                    <PostTags tags={post.tags} />
                  </PostTag>
                  <PostShare>
                    <SocialLinks postPath={slug} postNode={postNode} />
                  </PostShare>
                </Meta>
              </Header>
              <Main>
                <PostPhoto
                  src={postNode.frontmatter.cover.childImageSharp.sizes.src}
                />
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </Main>
              <Sidebar>
                <small>Also in</small>{" "}
                <h5>
                  <Link to={`/categories/${kebabCase(post.category)}`}>
                    {post.category}
                  </Link>
                </h5>
                {relateNode != null && (
                  <div>
                    {relateNode.edges.map(relatepost => {
                      return (
                        <h3 key={relatepost.node.id}>
                          <Link to={relatepost.node.fields.slug}>
                            {relatepost.node.frontmatter.title}
                          </Link>
                        </h3>
                      );
                    })}
                  </div>
                )}
              </Sidebar>
            </Post>
          </BoxContent>
        </Row>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $category: String) {
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
