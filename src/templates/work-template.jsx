import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

const Title = styled.h1`
  padding-top: var(--var-padding-m);
  font-family: var(--font-primary);
`;

const WorkWrapper = styled(Boxed)`
  max-width: 600px;
`;

const MDX = styled(MDXRenderer)`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-primary);
  }
`;

const WorkPageTemplate = ({ pageContext, data }) => {
  const path = "work" + pageContext.slug;

  return (
    <Layout>
      <Helmet>
        <title>{`${data.mdx.frontmatter.title} | ${config.siteTitleAlt}`}</title>
      </Helmet>
      <SEO postPath={path} postNode={data.mdx} postSEO />
      <WorkWrapper>
        <Title>{data.mdx.frontmatter.title}</Title>
        <MDX>{data.mdx.body}</MDX>
      </WorkWrapper>
    </Layout>
  );
};

export default WorkPageTemplate;

export const pageQuery = graphql`
  query WorkPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
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
