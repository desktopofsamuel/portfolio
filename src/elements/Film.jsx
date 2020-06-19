import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background: #fff;
`;

const Title = styled.h3``;

const Poster = styled.img``;

const Rating = styled.p``;

const Director = styled.p``;

const Year = styled.p``;

const Film = ({ poster, title, year, rating, director, link }) => (
  <Container>
    <Title>{title}</Title>
    <Year>{year}</Year>
    <Director>{director}</Director>
    <Poster src={poster} />
    <Rating>{rating}</Rating>
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
