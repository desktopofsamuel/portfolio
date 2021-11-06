import React from "react";
import styled, { keyframes } from "styled-components";
import ReadOn from "components/ReadOn";
import Icon from "components/common/Icon";
import Link from "components/common/GatsbyLink";
import { SmallText, H1, H2, BodyMain } from "components/common/TextStyles";
import IndexBackground from "components/page/IndexBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import GridBlock from "../GridBlock";

type Props = {
  noMargin: boolean,
};

const IconList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Wrapper =
  styled.div <
  Props >
  `
  margin: ${props =>
    props.noMargin === true
      ? "0"
      : "var(--var-padding-s) 0 var(--var-padding-xs) 0"};
  padding: var(--var-padding-l);
  display: grid;
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 50vh;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--var-padding-s);
  margin: 0 auto;
`;

const rotate = keyframes`
   0%   { transform: scale(1)   translate(10px, -30px); }
  38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  78%  { transform: scale(1.3) translate(0vw, 20vh) rotate(-20deg); }
  80%  { transform: scale(1.3) translate(0vw, 20vh) rotate(-20deg); }
  100% { transform: scale(1)   translate(10px, -30px); }
  `;

const color = keyframes`
  0% { fill: var(--color-stop1) } 
  50% { fill: var(--color-stop2)}
  100% { fill: var(--color-stop1)}
  `;

const Foreground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -2;
  margin: auto;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  /* background-image: linear-gradient(45deg, #0077cc 20%, #4b4ded); */
  opacity: 0.2;
  filter: blur(20px);
  animation: ${color} 2s ease-in-out infinite;
  --color-stop1: red;
  --color-bot1: green;
  --color-stop2: #0077cc;
  --color-bot2: #4b4ded;
`;

const Index = styled(SmallText)``;

const Title = styled(H1)`
  font-size: var(--font-size-xxl);
  font-family: var(--font-primary);
  margin: 0;
`;

const Description = styled(BodyMain)`
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  margin: 0;
`;

type HeroProps = {
  index: string,
  title: string,
  description?: string,
  label: string,
  href: string,
  noMargin: boolean,
};

const Hero = ({
  index,
  title,
  description,
  label,
  href,
  noMargin,
}: IndexIntroProps) => {
  return (
    <Wrapper noMargin={noMargin}>
      <Index>Welcome to portfolio of </Index>
      <Title>Samuel Wong</Title>
      <Description>
        Full-stack UI/UX designer crafting websites &<br /> mobile applications
        with bespoke experience.
      </Description>
      <HStack>
        <ReadOn text="Read my portfolio" href="/work/" target="_self" />
        <ReadOn text="View my CV" href="/about/#resume" target="_self" />
      </HStack>
      <HStack>
        {" "}
        <Icon
          to="https://www.linkedin.com/in/wongchunlong/"
          target="_blank"
          icon={["fab", "linkedin"]}
          title="Linkedin"
          data-splitbee-event="External Link"
          data-splitbee-event-type="Linkedin"
        />
        <Icon
          to="https://www.twitter.com/desktopofsamuel/"
          target="_blank"
          icon={["fab", "twitter"]}
          title="Twitter"
          data-splitbee-event="External Link"
          data-splitbee-event-type="twitter"
        />
        <link href="https://twitter.com/desktopofsamuel/" rel="me" />
        <Icon
          to="https://www.instagram.com/desktopofsamuel"
          data-splitbee-event="External Link"
          data-splitbee-event-type="instagram"
          target="_blank"
          icon={["fab", "instagram"]}
          title="Instagram"
        />
      </HStack>
      {/* <Foreground>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
            <stop stop-color="var(--color-stop1)" offset="0" />
            <stop stop-color="var(--color-bot1)" offset="100%" />
          </linearGradient>
          <path
            fill="url(#gradient)"
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
          />
        </svg>
      </Foreground> */}
    </Wrapper>
  );
};

export default Hero;
