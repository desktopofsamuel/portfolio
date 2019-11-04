import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Title = styled.h1`
  font-family: var(--font-primary);
`;

export default class WorkPageTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const path = "work" + `${slug}`;
    const postNode = this.props.data.mdx;
    const work = this.props.data.mdx.frontmatter;

    return (
      <Layout>
        <Helmet>
          <title>{`${work.title} | ${config.siteTitleAlt}`}</title>
        </Helmet>
        <SEO postPath={path} postNode={postNode} postSEO />
        <Title>{work.title}</Title>
        <MDXRenderer>{postNode.body}</MDXRenderer>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query WorkPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        path
        tags
        cover {
          publicURL
        }
      }
    }
  }
`;
