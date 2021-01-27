import React from "react";
import Link from "./common/GatsbyLink";
import styled from "styled-components";
import { H3, BodyMain, SmallText } from "./common/TextStyles";

const Card = styled(Link)`
  border: 1px solid var(--color-secondary-light-100) !important;
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  position: relative;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Background = styled.div`
  height: 100px;
  width: 100%;
  background-color: lightblue;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 50px auto 0 auto;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled(H3)`
  margin: 0;
`;

const Description = styled(BodyMain)`
  font-size: var(--font-size-2xs);
  margin: 0;
`;

const CardThread = ({ postEdges }) => {
  const item = postEdges.node;
  return (
    <Card to={item.data.Link} target="_blank" className="noeffect">
      <Background />
      <ContentWrapper>
        <ImageWrapper>
          <img src={item.data.Image[0].url} />
        </ImageWrapper>
        <Title>{item.data.Name}</Title>
        <Description>{item.data.Description}</Description>
        <SmallText>{item.data.Handle || item.data.Author}</SmallText>
      </ContentWrapper>
    </Card>
  );
};

export default CardThread;
