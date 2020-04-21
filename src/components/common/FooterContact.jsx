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
    grid-gap: 1rem;
  }
`;

const Section = styled.div`
  display: block;
`;

const Content = styled.div`
  font-size: 14px;
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
        <small>Contact</small>
        <Content>
          Let's chat and talk about collaborate togther. -{" "}
          <Link to="mailto:desktopofsamuel@gmail.com">
            desktopofsamuel@gmail.com
          </Link>
        </Content>
      </Section>
      <Section>
        <small>Social</small>
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
            <Link
              to="https://medium.com/@desktopofsamuel"
              className="noeffect linkicon"
              target="_blank"
            >
              <FooterIcon icon={faMedium} />
            </Link>
          </IconList>
        </Content>
      </Section>
      <Section>
        <small>Contact</small>
        <p>Let's keep in touch</p>
      </Section>
    </Container>
  );
};

export default FooterContact;
