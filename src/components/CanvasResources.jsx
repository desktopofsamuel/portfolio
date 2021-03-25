import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import StaticImage from "gatsby-plugin-image";
// import Img from "gatsby-image";
import Image1 from "../../static/images/20210310-UXDesignCareerKit.png";
import Image2 from "../../static/images/20210310-whatiuse.png";
import Image3 from "../../content/blog/2021-03-09 Design OKR/20210309-DesignOKR.png";
import Image4 from "../../static/images/20210310-appsservices.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: rows;
  place-content: center;
  justify-content: space-between;
  margin-bottom: 8rem;

  @media (max-width: 425px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 120%;
  height: 184px;
`;

const Img = styled.img`
  filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.25));
  transition: var(--transition);

  &:hover {
    transform: translateY(0.2px) scale(1.025);
  }
`;

const CanvasResources = () => {
  return (
    <Container>
      <Slide bottom delay={500}>
        <ImageWrapper
          style={{
            transform: "rotate(-4deg)",
            zIndex: "2",
          }}
        >
          <Img src={Image1} alt="UX Design Career Kit" />
        </ImageWrapper>
      </Slide>
      <Slide bottom delay={700}>
        <ImageWrapper
          style={{
            transform: "rotate(2.71deg)",
            top: "64px",
            zIndex: "3",
          }}
        >
          <Img src={Image2} alt="What I Use" />
        </ImageWrapper>
      </Slide>
      <Slide bottom delay={1000}>
        <ImageWrapper
          style={{
            transform: "rotate(2.64deg)",
            top: "50px",
            zIndex: "4",
          }}
        >
          <Img src={Image3} alt="Design OKR" />
        </ImageWrapper>
      </Slide>
      <Slide bottom delay={0}>
        <ImageWrapper
          style={{
            transform: "rotate(4deg)",
            top: "10px",
            zIndex: "-1",
          }}
        >
          <Img src={Image4} alt="Apps & Services" />
        </ImageWrapper>
      </Slide>
    </Container>
  );
};

export default CanvasResources;
