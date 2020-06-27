import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background: var(--color-white-500);
  display: grid;
  grid-template-columns: minmax(100px, 150px) minmax(1rem, 2rem) auto;
  margin: 4rem 0 2rem 0;
`;

const Spacer = styled.div``;

const Wrapper = styled.div`
  padding: 2rem 1rem 0 0;
`;

const Title = styled.h3`
  margin: 0;
  display: inline;
`;

const Poster = styled.img`
  box-shadow: 0px 2px 36px rgba(0, 0, 0, 0.25);
  transform: scale(1.085);
`;

const Rating = styled.p`
  font-size: 24px;
  color: var(--color-primary);
  margin: 0;
`;

const Director = styled.p`
  color: #5f777d;
  margin: 0;
`;

const Year = styled.p`
  margin: 0;
  display: inline;
  margin-left: 8px;
`;

const TitleWrapper = styled.div``;

const Film = ({ poster, title, year, rating, director, link }) => (
  <Container>
    <Poster src={poster} />
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

Film.propTypes = {
  title: PropTypes.string.required,
  year: PropTypes.string,
  director: PropTypes.string,
  rating: PropTypes.string,
};

Film.defaultProps = {
  year: "",
  director: "",
  rating: "",
};
