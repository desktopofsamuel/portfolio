import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { H3, BodyMain } from "components/common/TextStyles";
import ButtonPill from "components/button-pill";
import config from "../../data/SiteConfig";

const Wrapper = styled.div`
  background-color: var(--color-white-light-500);
  border: 1px var(--color-secondary-light-100) solid;
  padding: 1rem;
  border-radius: 16px;
  display: grid;
  grid-template-columns: max-content auto;
`;

const Entrance = keyframes`
  from { opacity: 0; transform: rotate(-45deg)}
  to { opacity: 1; transform: rotate(0deg)}
`;

const Singing = keyframes`
  0% {
    transform: translateX(-2px) scale(1) rotate(-10deg);
    opacity: 0;
  }
  80% {
    transform: translateX(0px) scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translateX(0px) scale(1);
    opacity: 0;
  }
`;

const Animation = styled.div`
  position: relative;
  top: -20px;
  left: 10px;

  > * {
    opacity: 0;

    :nth-child(1) {
      animation: ${Singing} 1s infinite;
      animation-delay: 0s;
    }

    :nth-child(2) {
      animation: ${Singing} 1s infinite;
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation: ${Entrance} 1s forwards;
      animation-delay: 0s;
    }
  }
`;

const TwitterLogoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 36px;
  color: #1da1f2;
  width: 50px;
  height: 50px;
  left: 0px;
  top: 18px;
`;

const SoundEffect1 = styled.div`
  font-size: 16px;
  color: #75c2f1;
  position: absolute;
  width: 8px;
  height: 19px;
  left: 50px;
  top: 17px;
`;

const SoundEffect2 = styled.div`
  font-size: 8px;
  color: #96d5fc;
  position: absolute;
  width: 6px;
  height: 10px;
  left: 62px;
  top: 13px;
  transform: rotate(-4deg);
`;

const SoundEffect3 = styled.div`
  font-size: 20px;
  color: #a9daf9;
  position: absolute;
  width: 13px;
  height: 24px;
  left: 75px;
  top: -4px;
  transform: rotate(12deg);
`;

const ContentWrapper = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 1rem;
`;

const Title = styled(H3)`
  margin: 0;
`;

const Description = styled(BodyMain)``;

const TwitterShare = ({ postEdges }) => {
  return (
    <Wrapper>
      <Animation>
        <SoundEffect1>♪</SoundEffect1>
        <SoundEffect2>♬</SoundEffect2>
        <TwitterLogoWrapper>
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterLogoWrapper>
      </Animation>
      <ContentWrapper>
        <Title>Enjoy reading the article?</Title>
        {console.log(postEdges)}
        <ButtonPill
          to={`https://twitter.com/intent/tweet?text=${postEdges.frontmatter.title}&url=${config.siteUrl}${postEdges.fields.slug}`}
          text="Share on Twitter"
          lefticon={faTwitter}
          isSolid
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default TwitterShare;
