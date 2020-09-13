import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import ReadOn from "../elements/ReadOn";
import Fade from "react-reveal/Fade";

const Container = styled.div`
  display: grid;
  grid-gap: 4rem;
`;

const Wrapper = styled.div`
  border: 1px solid var(--color-primary-shades-100);
  padding: var(--var-padding-m);
  border-radius: 24px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 4fr 8fr;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

const Header = styled.div`
  /* grid-area: header; */

  h2 {
    font-size: var(--font-size-xl);
    margin-top: 1rem;
  }

  p {
    color: var(--color-primary-shades-300);
  }

  small {
    color: ${props => props.color};
  }
`;

const More = styled.div`
  /* grid-area: action; */
  align-self: center;
`;

const ImageContainer = styled.div`
  margin: 1rem 0;
`;

class WorkDetail extends React.Component {
  getPostList() {
    const postList = [];

    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        photo: postEdge.node.frontmatter.photo,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        color: postEdge.node.frontmatter.color,
        subtitle: postEdge.node.frontmatter.subtitle,
        projectTitle: postEdge.node.frontmatter.projectTitle,
        shortTitle: postEdge.node.frontmatter.shortTitle,
        smallTitle: postEdge.node.frontmatter.smallTitle,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Container>
        {postList.map(post => (
          <Fade bottom cascade key={post.path}>
            <Wrapper>
              <Header color={post.color}>
                <small> {post.projectTitle}</small>
                <h2>{post.shortTitle}</h2>
                <p>{post.subtitle}</p>
                <More>
                  <ReadOn text="View Process" href={`/work/${post.path}`} />
                </More>
              </Header>

              <ImageContainer>
                <Image
                  fluid={post.photo.childImageSharp.fluid}
                  alt={post.title}
                  fadeIn
                />
              </ImageContainer>
            </Wrapper>
          </Fade>
        ))}
      </Container>
    );
  }
}

export default WorkDetail;
