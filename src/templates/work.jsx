import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";

const Title = styled.h1`
  font-family: var(--font-primary);
`;

export default function WorkPageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Title>{mdx.frontmatter.title}</Title>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
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
      }
    }
  }
`;
