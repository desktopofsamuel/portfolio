import React, { Component } from "react";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import Column from "elements/Column";
import social from "../../../static/SVG/social_media.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "./GatsbyLink";

const Row = styled.section`
  padding: var(--var-padding-s) 1rem;
`;

const BgRow = styled(Row)`
  @media only screen and (max-width: 767px) {
    padding: var(--var-padding-m);
    background-color: var(--color-white-500);
    box-shadow: 0 10px 0 -5px var(--color-white-700);
    margin: 24px;
  }
`;

const BoxNow = styled(Boxed)``;

const FooterGrid = styled.div`
  display: block;
`;

const FooterItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  font-family: var(--font-primary);
  color: var(--color-secondary-500);
  border-bottom: 0;
  text-align: center;
  &:last-child {
    margin-right: 0;
  }

  p {
    margin: 0;
    font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(32px + (40 - 32) * ((100vw - 320px) / (1600 - 320)));

    text-align: center;

    @media only screen and (max-width: 768px) {
      text-align: left;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-right: 0;
    justify-content: left;
  }
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  font-size: 24px;
  border-bottom: none;
`;

const ImageWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.small`
  color: var(--color-secondary-500);
  font-weight: var(--font-weight-bold);
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  max-width: 40ch;
`;

const CreditText = styled.p`
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 150%;
  color: var(--color-secondary-500);
`;

const SubContainer = styled.div`
  padding: var(--var-padding-l) 0rem;
  background: var(--color-white-300);
`;

const LinkContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
  display: flex;

  @media only screen and (max-width: 767px) {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

const CreditContainer = styled.div`
  margin-top: 2rem;
  padding: var(--var-padding-xs);
  text-align: center;

  @media only screen and (max-width: 767px) {
    text-align: left;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="#contact">
        <BgRow>
          <BoxNow>
            <div>
              <FooterGrid>
                <Heading>Follow Me</Heading>
                <Paragraph>
                  <Link to="mailto:desktopofsamuel@gmail.com">Let's chat</Link>{" "}
                  and talk about working togther.
                </Paragraph>
                <Paragraph>
                  Follow my blog via <Link to="/rss.xml">RSS</Link>, or follow
                  me on social media.
                </Paragraph>
                <IconList>
                  <Link
                    to="http://www.twitter.com/desktopofsamuel"
                    className="noeffect linkicon"
                    target="_blank"
                  >
                    <FooterIcon icon={faTwitter} size="lg" />
                  </Link>
                  <Link
                    to="http://www.instagram.com/desktopofsamuel"
                    className="noeffect linkicon"
                    target="_blank"
                  >
                    <FooterIcon icon={faInstagram} size="lg" />
                  </Link>
                  <Link
                    to="https://medium.com/@desktopofsamuel"
                    className="noeffect linkicon"
                    target="_blank"
                  >
                    <FooterIcon icon={faMedium} size="lg" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/wongchunlong/"
                    className="noeffect linkicon"
                    target="_blank"
                  >
                    <FooterIcon icon={faLinkedin} size="lg" />
                  </Link>
                </IconList>
              </FooterGrid>
            </div>
          </BoxNow>
        </BgRow>
        <Row className="full-bleed">
          <Boxed>
            <LinkContainer>
              <FooterItem to="/about">About</FooterItem>
              <FooterItem to="/work">Work</FooterItem>
              <FooterItem to="/blog">Blog</FooterItem>
              <FooterItem to="https://pins.desktopofsamuel.com">
                Pins
              </FooterItem>
              <FooterItem to="/photo">Photo</FooterItem>
            </LinkContainer>
            <CreditContainer>
              <CreditText>
                Design & Code © 2018 - 2020 Samuel W. | Built with{" "}
                <Link to="https://www.gatsbyjs.org">Gatsby</Link>.
              </CreditText>
            </CreditContainer>
          </Boxed>
        </Row>
      </footer>
    );
  }
}
