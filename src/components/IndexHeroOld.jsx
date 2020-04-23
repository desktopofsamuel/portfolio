import React from "react";
import styled from "styled-components";
import Boxed from "../elements/Boxed";

const Box = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
  }
`;

const Intro = styled(Row)`
  justify-content: center;
  text-align: center;
`;

const Hero = styled.div`
  text-align: left;

  h1 {
    font-family: var(--font-primary);
    margin-top: 0;
  }
`;

const HeroGraphics = styled.figure`
  margin: 0;
  padding: 0;
`;

const WhiteBox = styled.div`
  border-top: 1px var(--color-brand-500) solid;
  background: white;
  height: 50px;
  position: relative;
  overflow: hidden;
  bottom: 50px;
`;

const GraphicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: -24px;

  & > * {
    margin-right: 16px;
    overflow: hidden;
    position: relative;
    left: 0;
    bottom: 20px;
    transition: all 0.3s ease-in;

    &:hover {
      bottom: 30px;
    }

    &:first-child {
      margin-right: -8px;
    }
  }
`;
const IntroBox = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 0 0 2rem 0;
  max-width: 400px;
`;

const IndexHeroOld = () => {
  return (
    <Intro>
      <Box>
        <Hero>
          <small>When Design Meets Technology</small>
          <h1>
            Designing with
            <br />
            <span className="brand">complexity</span>
          </h1>
          <HeroGraphics>
            <GraphicBox>
              <svg
                className="triangle"
                width="96"
                height="83"
                viewBox="0 0 96 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.96668 81L48 3L93.0333 81H2.96668Z"
                  stroke="#535E7C"
                  strokeWidth="3"
                />
              </svg>
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="53.5"
                  cy="53.5"
                  r="52"
                  stroke="#535E7C"
                  strokeWidth="3"
                />
              </svg>
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="79"
                  height="79"
                  stroke="#535E7C"
                  strokeWidth="3"
                />
              </svg>
              <svg
                width="133"
                height="126"
                viewBox="0 0 133 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16493 48.5963L66.5 1.8541L130.835 48.5963L106.261 124.227H26.7387L2.16493 48.5963Z"
                  stroke="#535E7C"
                  strokeWidth="3"
                />
              </svg>
            </GraphicBox>
            <WhiteBox />
          </HeroGraphics>
        </Hero>
        <IntroBox>
          <small>Hi! My name is Samuel</small>
          <p>
            I believe design is the way to navigate today's complex world. Join
            me in this journey.
          </p>
        </IntroBox>
        <CTAButton href="#contact" text="Get In Touch" />
      </Box>
    </Intro>
  );
};

export default IndexHeroOld;
