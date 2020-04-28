import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "./GatsbyLink";

const Container = styled.section`
  display: block;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;

const Section = styled.div`
  display: block;
`;
const Content = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterIcon = styled(FontAwesomeIcon)`
  margin: 0.5rem 1rem 0 0;
  font-size: 18px;
  border-bottom: none;
`;

const FooterContact = () => {
  return (
    <Container>
      <Section>
        <h6>Let's Chat</h6>
        <Content>
          I am excited for new opportunities, let's talk about working togther.{" "}
          <br />
          <Link to="mailto:desktopofsamuel&#64;gmail.com">
            desktopofsamuel&#64;gmail.com
          </Link>
        </Content>
      </Section>
      <Section>
        <h6>Keep In Touch</h6>
        <Content>
          Follow my social media and see what I'm up to.
          <IconList>
            <Link
              to="https://www.linkedin.com/in/wongchunlong/"
              className="noeffect linkicon"
              target="_blank"
            >
              <FooterIcon icon={faLinkedin} />
            </Link>
            <Link
              to="http://www.twitter.com/desktopofsamuel"
              className="noeffect linkicon"
              target="_blank"
            >
              <FooterIcon icon={faTwitter} />
            </Link>
            <Link
              to="http://www.instagram.com/desktopofsamuel"
              className="noeffect linkicon"
              target="_blank"
            >
              <FooterIcon icon={faInstagram} />
            </Link>
          </IconList>
        </Content>
      </Section>
      <Section>
        <h6>Subscribe</h6>
        <Content>
          I write regularly on the subject of design and technology. Feel free
          to subscribe via{" "}
          <Link to="/rss.xml" target="_blank">
            RSS
          </Link>{" "}
          or follow me on{" "}
          <Link to="https://medium.com/@desktopofsamuel" target="_blank">
            Medium
          </Link>
          .
        </Content>
      </Section>
    </Container>
  );
};

export default FooterContact;
