import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const IconWrapper = styled.div`
  padding: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const InlineCarousel = ({ data, children }) => {
  return (
    <Carousel
      autoPlay={10000}
      animationSpeed={1000}
      infinite
      arrowLeft={
        <IconWrapper>
          <FaAngleLeft size="1.5em" />
        </IconWrapper>
      }
      arrowRight={
        <IconWrapper>
          <FaAngleRight size="1.5em" />
        </IconWrapper>
      }
      addArrowClickHandler
    >
      {children}
    </Carousel>
  );
};

export default InlineCarousel;
