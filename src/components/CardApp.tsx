import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";
import { usePalette } from "react-palette";
import { LightenDarkenColor } from "lighten-darken-color";

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 2rem;
  background-color: var(--color-white-light-300);
  border-radius: 16px;
  border: 1px solid var(--color-primary-light-100);
  padding: 1.5rem 2rem;
  font-family: var(--font-primary);
  transition: var(--transition);
  height: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const LogoWrapper = styled.div`
  /* background-color: ${props => props.color}; */
  & > * {
    width: 48px;
    height: 48px;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 64px;
  height: 64px;
  border: 1px var(--color-primary-light-700) solid;
  font-size: var(--font-size-m);
  display: grid;
  place-items: center;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
`;

const Title = styled.h3`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
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
      },
    },
  },
};

const ToolCard = ({ postEdges }: ToolCardProps) => {
  const item = postEdges.node;
  const thumbnail = item.data.Name.slice(0, 1);
  const { data, loading, error } = !!item.data.Image
    ? usePalette(item.data.Image[0].url)
    : "";

  return (
    <Link
      to={item.data.Link}
      target="_blank"
      key={item.id}
      className="noeffect"
    >
      <Stack>
        {!!item.data.Image ? (
          <LogoWrapper color={data.lightMuted}>
            {console.log(data.lightMuted)}
            <img src={item.data.Image[0].url} alt={`${item.data.Name} Logo`} />
          </LogoWrapper>
        ) : (
          <ThumbnailWrapper>{thumbnail}</ThumbnailWrapper>
        )}
        <ContentWrapper>
          <Title>{item.data.Name}</Title>
          <Description>{item.data.Description}</Description>
        </ContentWrapper>
      </Stack>
    </Link>
  );
};

export default ToolCard;
