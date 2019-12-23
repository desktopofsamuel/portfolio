import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import styled from "styled-components";
import Img from "gatsby-image";

const Cover = styled(Img)`
  width: 100%;
  height: 100%;
  z-index: 998;
`;

const PhotoLayout = styled.div`
  max-width: 70vw;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
  padding: var(--var-padding-l);
  width: 100%;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: var(--color-white-300);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: calc(36px + (72 - 16) * ((100vw - 320px) / (1600 - 320)));
  line-height: 100%;
  text-align: center;
  margin-bottom: 0;
`;

const MDX = styled(MDXRenderer)`
  p {
    text-align: center;
  }
`;
export default function PhotoPageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PhotoLayout>
        <Header>
          <Overlay />
          <Cover sizes={mdx.frontmatter.cover.childImageSharp.sizes} />
          <TitleWrapper>
            <Title>{mdx.frontmatter.title}</Title>
          </TitleWrapper>
        </Header>

        <MDX>{mdx.body}</MDX>
      </PhotoLayout>
    </Layout>
  );
}
export const pageQuery = graphql`
  query PhotoPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        path
        title
        cover {
          publicURL
          size
          childImageSharp {
            sizes {
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
