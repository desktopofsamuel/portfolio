import React from "react";
import styled from "styled-components";
import IndexIntro from "./IndexIntro";
import IndexBlogOld from "./IndexBlogOld";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Zoom from "react-reveal/Zoom";
import ReadOn from "components/ReadOn";

const Block = styled.div``;

const PostListImage = styled(Img)`
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  background-color: var(--color-white-light-100);
`;

const Title = styled.h3`
  font-size: var(--font-size-m);
  color: var(--color-text);
`;

const Paragraph = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`;

const IndexBlogItem = ({ postEdges }) => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.frontmatter.tldr || postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });
  return (
    <>
      {postList.map(post => (
        <Zoom duration={500} key={post.title}>
          <Block className="noeffect">
            <Link to={post.path} className="noeffect">
              <PostListImage
                fluid={post.cover.childImageSharp.fluid}
                alt={post.title}
              />
              <Content>
                <Title>{post.title} </Title>
                <Paragraph className="noeffect">{post.excerpt}</Paragraph>
                <ReadOn
                  isSecondary
                  href={post.path}
                  text="Read More"
                  target="_self"
                />
              </Content>
            </Link>
          </Block>
        </Zoom>
      ))}
    </>
  );
};

const IndexBlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IndexBlog = ({ postEdges }) => {
  return (
    <Wrapper>
      <IndexIntro
        index="#02"
        title="Articles I write on design & technology"
        description="I write about design, technology and productitivity."
        href="/blog"
        label="Read my blog"
      />
      <IndexBlogGrid>
        <IndexBlogItem postEdges={postEdges} />
      </IndexBlogGrid>
    </Wrapper>
  );
};

export default IndexBlog;
