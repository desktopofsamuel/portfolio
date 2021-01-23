import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/common/Icon";

const IconWrapper = styled.div`
  display: inline;
  opacity: 0;
  transition: var(--transition);
  margin-left: 0px;
`;

const Stack = styled.div`
  display: grid;
  grid-auto-flow: auto;
  grid-gap: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-secondary-light-100);
  padding: 1.5rem 2rem;
  font-family: var(--font-primary);
  transition: var(--transition);
  height: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);

    ${IconWrapper} {
      opacity: 1;
      margin-left: 4px;
    }
  }
`;

const Flex = styled.div`
  display: inline-block;
`;

const Title = styled.h3`
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
  display: inline;
  margin: 0;
  margin-right: 16px;
`;

const Description = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-secondary-light-300);
  margin: 0;
`;

const ContentWrapper = styled.div``;

type ToolCardProps = {
  postEdges: {
    node: {
      id: string,
      data: {
        Name: string,
        Description: string,
        platform: string,
        image: string,
        Link: string,
        Image: [{ url: string }],
        AuthorLink: string,
        Handle: string,
        Author: string,
      },
    },
  },
};

const CardResource = ({ postEdges }: ToolCardProps) => {
  const item = postEdges.node;
  return (
    <Stack key={item.id}>
      <Link to={item.data.Link} target="_blank" className="noeffect">
        <Flex>
          <Title>{item.data.Name}</Title>
          <IconWrapper>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              title="View More"
              size="xs"
            />
          </IconWrapper>
        </Flex>
      </Link>
      <Description>{item.data.Description}</Description>
      <Link to={item.data.AuthorLink} target="_blank" className="noeffect">
        <small>{item.data.Handle || item.data.Author}</small>
      </Link>
    </Stack>
  );
};

export default CardResource;
