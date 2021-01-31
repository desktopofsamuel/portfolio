import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/common/Icon";
import { SmallText } from "components/common/TextStyles";

const Card = styled.div`
  border: 1px solid var(--color-secondary-light-100);
  border-radius: 16px;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  display: inline;
  opacity: 0;
  transition: var(--transition);
  margin-left: 0px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: auto;
  grid-gap: 1rem;
  padding: 1.5rem 2rem;
  font-family: var(--font-primary);
  transition: var(--transition);

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
  margin: 0;
`;

const CategoryTag = styled.span`
  width: fit-content;
  padding: 6px 12px;
  background-color: lightblue;
`;

const CategoryText = styled(SmallText)`
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-secondary-light-300);
  margin: 0;
`;

type ToolCardProps = {
  postEdges: {
    node: {
      id: string,
      data: {
        Name: string,
        Category: string,
        Description: string,
        platform: string,
        image: string,
        Link: string,
        Image: [{ url: string }],
        AuthorLink: string,
        Handle: string,
        Author: string,
        Tag: string,
      },
    },
  },
};

const CardResource = ({ postEdges }: ToolCardProps) => {
  const item = postEdges.node;
  return (
    <Card key={item.id}>
      {!!item.data.Image ? <img src={item.data.Image[0].url} /> : null}
      <Wrapper>
        <CategoryTag>
          <CategoryText>{item.data.Tag}</CategoryText>
        </CategoryTag>
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
          <SmallText>{item.data.Handle || item.data.Author}</SmallText>
        </Link>
      </Wrapper>
    </Card>
  );
};

export default CardResource;
