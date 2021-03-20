import React from "react";
import styled from "styled-components";
import IndexIntro from "./IndexIntro";
import IndexBlogOld from "./IndexBlogOld";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from "react-reveal/Zoom";
import ReadOn from "components/ReadOn";
import { H3, BodyMain } from "components/common/TextStyles";

const Block = styled.div`
  padding: var(--var-padding-s);
  transition: var(--transition);

  :hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const PostListImage = styled(GatsbyImage)`
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  background-color: var(--color-white-light-100);
`;

const Title = styled(H3)`
  margin-top: 1rem;
`;

const Paragraph = styled(BodyMain)``;

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
                image={post.cover.childImageSharp.gatsbyImageData}
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
    // <Wrapper>
    //   <IndexIntro
    //     index="#02"
    //     title="Articles I write on design & technology"
    //     description="I write about design, technology and productitivity."
    //     href="/blog"
    //     label="Read my blog"
    //   />
    //   <IndexBlogGrid>
    <IndexBlogItem postEdges={postEdges} />
    //   </IndexBlogGrid>
    // </Wrapper>
  );
};

export default IndexBlog;
