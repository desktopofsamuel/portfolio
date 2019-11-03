import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";

const Title = styled.h1`
  font-family: var(--font-primary);
`;

const Container = styled.div`
  max-width: 45vw;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
  }
`;

export default function WorkPageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Container>
        <Title>{mdx.frontmatter.title}</Title>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
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
