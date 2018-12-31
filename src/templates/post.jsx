import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import styled from "styled-components";
import Link from "gatsby-link";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import kebabCase from 'lodash/kebabCase';
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

const Grid = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 30% 50% 20%;
`

const Header = styled.div`
  padding: 0 1em;
  overflow-wrap: break-word;
  
`

const Main = styled.div`
  padding: 0 4em;
`

const Sidebar = styled.div`
  padding: 1em;
  `

const PostTitle = styled.h1`
`
const PostMeta = styled.h6`
`

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Grid>
            <Header>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>Posted on {post.date}</PostMeta>
              <PostMeta>in <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link> </PostMeta>
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </Header>
            <Main><div dangerouslySetInnerHTML={{ __html: postNode.html }} /></Main>
            <Sidebar>
              <h6>Also in <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link></h6>
              <h3><Link to="/blog">Building Gatsby With Multiple Post Type</Link></h3>
              <h3><Link to="/blog">Why designers need a personal website?</Link></h3>
              <h3><Link to="/blog">Practical Tips on Evernote</Link></h3>
            </Sidebar>
          </Grid>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
