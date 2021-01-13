import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import Img from "gatsby-image";
import Tag from "components/Tag";
import PostSidebar from "./PostSidebar";

const Container = styled(Boxed)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: var(--page-container-s) auto;
  padding: var(--var-padding-m) 0;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    padding: var(--var-padding-m) var(--var-padding-s);
  }
`;

const Sidebar = styled.aside``;

const Main = styled.article`
  small {
    margin: 0;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
  }

  .subtitle {
    margin: 1rem 0 2rem 0;
    font-size: var(--font-size-s);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--color-text-secondary);
  }

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

class PostTemplate extends React.Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    const postToc = postNode.tableOfContents;

    return (
      <Container>
        <Main>
          <small>
            <time>{postNode.fields.date}</time>
          </small>
          <h1>{post.title}</h1>
          <p className="subtitle">{post.tldr}</p>
          <Img sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
          <hr />
          <MDXRenderer>{postNode.body}</MDXRenderer>
          <div>
            {post.tags.map((tag, index) => {
              return (
                <Tag tag={tag} key={index}>
                  {tag}
                </Tag>
              );
            })}
          </div>
        </Main>
        <Sidebar>
          <PostSidebar postToc={postToc} />
        </Sidebar>
      </Container>
    );
  }
}

export default PostTemplate;
