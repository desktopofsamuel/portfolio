import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
  background-color: var(--color-primary-shades-100);
  border-radius: 8px;
  border: 1px var(--color-primary-shades-500) solid;
  padding: 1rem 1rem;
`;

const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
`;

const ThumbnailWrapper = styled.div`
  width: 64px;
  height: 64px;
  border: 1px var(--color-primary-shades-700) solid;
  background: var(--color-primary-shades-100);
  font-size: var(--font-size-m);
  display: grid;
  place-items: center;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
`;

const Title = styled.h3`
  font-size: var(--font-size-m);
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--font-size-s);
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
      },
    },
  },
};

const ToolCard = ({ postEdges }: ToolCardProps) => {
  const item = postEdges.node;
  const thumbnail = item.data.Name.slice(0, 1);
  return (
    <Link to={item.data.Link} target="_blank" key={item.id}>
      <Stack>
        <LogoWrapper>
          {!!item.data.Image ? (
            <img src={item.data.Image[0].url} alt={`${item.data.Name} Logo`} />
          ) : (
            <ThumbnailWrapper>{thumbnail}</ThumbnailWrapper>
          )}
        </LogoWrapper>
        <ContentWrapper>
          <Title>{item.data.Name}</Title>
          <Description>{item.data.Description}</Description>
        </ContentWrapper>
      </Stack>
    </Link>
  );
};

export default ToolCard;
