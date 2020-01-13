import React, { Component } from "react";
import Link from "../GatsbyLink/GatsbyLink";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import Column from "elements/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Row = styled.section`
  padding: var(--var-padding-s) 0;
`;

const FooterItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  color: var(--color-secondary-500);
  border-bottom: 0;
  text-align: center;
  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 767px) {
    margin-right: 0;
    justify-content: left;
  }
`;

const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  font-size: 24px;
  border-bottom: none;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(32px + (40 - 32) * ((100vw - 320px) / (1600 - 320)));
  font-family: var(--font-secondary);
  text-align: center;

  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;

const SubTitle = styled.h3``;

const SubText = styled.p`
  color: var(--color-secondary-500);
  max-width: 40ch;
`;

const CreditText = styled.p`
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
        <Row className="full-bleed">
          <Boxed>
            <SubTitle>Follow Me</SubTitle>
            <Column>
              <div>
                <SubText>
                  You can subscribe my design blog via{" "}
                  <Link to="/rss.xml">RSS feed</Link>, or follow me on social
                  media for updates.
                </SubText>
                <SubText>
                  <Link to="mailto:desktopofsamuel@gmail.com">Let's chat</Link>{" "}
                  and talk about working togther.
                </SubText>
              </div>
              <div>
                <div>
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
                </div>
              </div>
            </Column>
          </Boxed>
        </Row>
        <Row className="full-bleed">
          <Boxed>
            <LinkContainer>
              <FooterItem to="/about">
                <FooterText>About</FooterText>
              </FooterItem>
              <FooterItem to="/work">
                <FooterText>Work</FooterText>
              </FooterItem>
              <FooterItem to="/blog">
                <FooterText>Blog</FooterText>
              </FooterItem>
              <FooterItem to="https://pins.desktopofsamuel.com">
                <FooterText>Pins</FooterText>
              </FooterItem>
              <FooterItem to="/photo">
                <FooterText>Photo</FooterText>
              </FooterItem>
            </LinkContainer>
            <CreditContainer>
              <CreditText>
                Design & Code © 2018 - 2020 Samuel W. | Built with{" "}
                <Link to="https://www.gatsbyjs.org">Gatsby</Link>, powered by{" "}
                <Link to="https://www.netlify.com/">Netlify</Link>.{" "}
              </CreditText>
            </CreditContainer>
          </Boxed>
        </Row>
      </footer>
    );
  }
}
