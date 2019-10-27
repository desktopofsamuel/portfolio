import React, { Component } from "react";
import Link from "../GatsbyLink/GatsbyLink";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

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

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    justify-content: left;
  }
`;

const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
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

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

const CreditContainer = styled.div`
  margin-top: 2rem;
  padding: var(--var-padding-s);
  text-align: center;

  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;

const Main = styled.footer`
  @media only screen and (max-width: 1024px) {
    padding: 2rem 0;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 3rem 0;
  }
`;

const Boxx = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Main>
        <Boxx>
          <SubContainer className="full-bleed">
            <Boxed>
              <SubTitle>Follow Me To Manage Complexity</SubTitle>
              <SubText>
                You can subscribe to the <Link to="/rss.xml">RSS feed</Link> or
                follow me on social media for updates.
              </SubText>
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
              </div>
            </Boxed>
          </SubContainer>
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
            <FooterItem to="https://photo.desktopofsamuel.com">
              <FooterText>Photo</FooterText>
            </FooterItem>
          </LinkContainer>
          <CreditContainer>
            <CreditText>
              Design & Code © 2018 - 2019 Samuel W. | Built with{" "}
              <Link to="https://www.gatsbyjs.org">Gatsby</Link>, powered by{" "}
              <Link to="https://www.netlify.com/">Netlify</Link>.{" "}
            </CreditText>
          </CreditContainer>
        </Boxx>
      </Main>
    );
  }
}
