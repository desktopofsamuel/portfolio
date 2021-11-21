import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import { GatsbyImage } from "gatsby-plugin-image";
import Tag from "components/Tag";
import { H1, BodyMain, SmallText } from "components/common/TextStyles";
import PostSidebar from "./PostSidebar";
import TwitterShare from "components/TwitterShare";

const Container = styled(Boxed)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: var(--page-container-s) auto;
  padding: var(--var-padding-m) 0;

  @media only screen and (max-width: 1024px) {
    display: flex;
    padding: var(--var-padding-m);
  }
`;

const Sidebar = styled.aside`
`;

const Title = styled(H1)`
  font-size: var(--font-size-xl);
  margin: 1rem 0 0 0;
`;

const Description = styled(BodyMain)`
  margin: 1rem 0 2rem 0;
  color: var(--color-text-secondary);
`;

const Main = styled.article`
  h2 {
    font-size: var(--font-size-l);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
  }

  h3 {
    font-size: var(--font-size-m);
    font-size: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

type PostTemplateProps = {
  postNode: {
    fields: {
      date: string,
    },
    frontmatter: {
      title: string,
      tldr: string,
      body: object,
      tags: [ ],
      cover: {
        childImageSharp: {
          gatsbyImageData: object,
        },
      }
    }
    tableOfContents: object,
  },
};

const PostTemplate = ({ postNode }: PostTemplateProps) => {
  const post = postNode.frontmatter;
  const postToc = postNode.tableOfContents;

  return (
    <Container>
      <Main>
        <SmallText>
          <time>{postNode.fields.date}</time>
        </SmallText>
        <Title>{post.title}</Title>
        <Description>{post.tldr}</Description>
        {/* <SmallText>By Samuel Wong</SmallText> */}
        <GatsbyImage image={postNode.frontmatter.cover.childImageSharp.gatsbyImageData} />
        <hr />
        <MDXRenderer>{postNode.body}</MDXRenderer>
        <div>
          {post.tags.map(tag => {
            return (
              <Tag tag={tag} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
      </Main>
      <Sidebar>
        <PostSidebar postToc={postToc} />
        
      </Sidebar><TwitterShare postEdges={postNode} />
    </Container>
  );
};

export default PostTemplate;
