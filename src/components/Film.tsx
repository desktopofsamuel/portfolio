import React from "react";
import styled from "styled-components";
import { H3, BodyMain, SmallText } from "./common/TextStyles";

const Container = styled.div`
  background: var(--color-white-light-300);
  display: grid;
  grid-template-columns: minmax(100px, 150px) minmax(1rem, 2rem) auto;
  margin: 4rem 0 2rem 0;
`;

const Spacer = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  align-content: center;
`;

const Title = styled(H3)`
  margin: 0;
  display: inline;
`;

const Poster = styled.img`
  box-shadow: 0px 2px 36px rgba(0, 0, 0, 0.25);
  transform: scale(1.085);
`;

const Rating = styled(BodyMain)`
  font-size: var(--font-size-xs);
  color: var(--color-primary-light-700);
  margin: 0;
`;

const Director = styled(BodyMain)`
  color: var(--color-text-secondary);
  margin: 0;
`;

const Year = styled(SmallText)`
  margin: 0;
  display: inline;
  margin-left: 8px;
`;

const TitleWrapper = styled.div``;

type FilmProps = {
  poster: string,
  title: string,
  year: string,
  rating: string,
  director: string,
};

const Film: React.FC<FilmProps> = ({
  poster,
  title,
  year,
  rating,
  director,
}) => (
  <Container>
    <Poster src={poster} alt={title} title={title} />
    <Spacer />
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Year>({year})</Year>
      </TitleWrapper>
      <Director>{director}</Director>
      <Rating>{rating}</Rating>
    </Wrapper>
  </Container>
);

export default Film;
