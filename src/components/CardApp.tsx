import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";
import { usePalette } from "react-palette";
import { LightenDarkenColor } from "lighten-darken-color";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "components/Tag";

const Icon = styled(FontAwesomeIcon)`
  margin-left: 4px;
`;

const CTA = styled(Link)`
  position: absolute;
  bottom: -20px;
  right: 12px;
  background-color: var(--color-primary-light-500);
  color: var(--color-white-light-100);
  border-radius: var(--border-radius);
  padding: 4px 16px;
  opacity: 0;

  :hover {
    background-color: var(--color-secondary-light-500);
    color: var(--color-white-light-500);
  }

  @media (max-width: 425px) {
    position: relative;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    border-radius: 8px;
  }
`;

const Stack = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 48px auto;
  align-items: center;
  grid-gap: var(--var-padding-m);
  border-radius: 16px;
  border: 1px solid var(--color-background);
  padding: 1.5rem 2rem;
  font-family: var(--font-primary);
  transition: var(--transition);
  height: inherit;

  &:hover {
    /* transform: translateY(-2px);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08); */
    background-color: var(--color-white-light-300);
    border: 1px solid var(--color-primary-light-100);

    ${CTA} {
      opacity: 1;
    }
  }

  @media (max-width: 425px) {
    grid-template-columns: auto;
    background-color: var(--color-white-light-300);
    border: 1px solid var(--color-primary-light-100);

    ${CTA} {
      opacity: 1;
    }
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
  display: inline-block;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  margin: 0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin: 0;
`;

const Platform = styled.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-secondary-light-100);
  padding: 4px 8px;
  border-radius: var(--border-radius);
  margin-left: 16px;
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
        Platform: string,
        CTA: string,
        ExtraLink: string,
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
          {!!item.data.Platform && <Platform>{item.data.Platform}</Platform>}
          <Description>{item.data.Description}</Description>
        </ContentWrapper>
        {!!item.data.CTA && (
          <CTA to={item.data.ExtraLink} target="_blank" className="noeffect">
            {item.data.CTA}{" "}
            <Icon
              size="sm"
              icon={faArrowRight}
              title="Arrow Right"
              style={{ marginLeft: "4px" }}
            />
          </CTA>
        )}
      </Stack>
    </Link>
  );
};

export default ToolCard;
