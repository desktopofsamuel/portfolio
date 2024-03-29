import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";
import Link from "../common/GatsbyLink";
import { SmallText, BodyMain, H3 } from "../common/TextStyles";

const Card = styled.div`
  height: 100%;
  /* background-color: ${props =>
    props.color ? `${props.color}` : "black"}; */
  padding: var(--var-padding-m) var(--var-padding-m) 0 var(--var-padding-m);
  /* margin-bottom: var(--padding-m); */
  transition: var(--transition);
  border-radius: 8px;
  content-visibility: auto;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.08);

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.07);
  }
`;

const Subtitle = styled(SmallText)`
  color: var(--color-title);
`;

const Title = styled(H3)`
  margin-top: 16px;
  font-size: var(--font-size-l);
  color: ${props => (props.color ? `${props.color}` : "black")};
`;

const Image = styled(GatsbyImage)`
  background-color: rgba(0, 0, 0, 0);
`;

const IndexWorkLong = ({ postEdges }) => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
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

  return (
    <>
      {postList.map(post => (
        <Zoom key={post.title}>
          <Link to={`/work${post.path}`} className="noeffect">
            <Card key={post.path}>
              <Subtitle>{post.smallTitle}</Subtitle>
              <Title color={post.color}>
                {`${post.projectTitle} — ${post.shortTitle}`}
              </Title>
              <BodyMain>{post.subtitle}</BodyMain>
              <Image
                image={post.cover.childImageSharp.gatsbyImageData}
                alt={post.title}
                fadeIn
              />
            </Card>
          </Link>
        </Zoom>
      ))}
    </>
  );
};

export default IndexWorkLong;

// IndexWork.propTypes = {
//   detail: PropTypes.bool,
// };

// IndexWork.defaultProps = {
//   detail: false,
// };
