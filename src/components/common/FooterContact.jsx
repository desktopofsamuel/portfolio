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
import Boxed from "../../elements/Boxed";
import Icon from "components/common/Icon";

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

  h5 {
    color: var(--color-title);
  }
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
    <Boxed>
      <Container>
        <Section>
          <h5>Let's Chat</h5>
          <Content>
            I am excited for new opportunities, let's talk about working
            togther. <br />
            <Link to="mailto:desktopofsamuel&#64;gmail.com">
              desktopofsamuel&#64;gmail.com
            </Link>
          </Content>
        </Section>
        <Section>
          <h5>Keep In Touch</h5>
          <Content>
            Follow my social media and see what I'm up to.
            <IconList>
              <Icon
                to="https://www.linkedin.com/in/wongchunlong/"
                target="_blank"
                icon={faLinkedin}
              />
              <Icon
                to="http://www.twitter.com/desktopofsamuel/"
                target="_blank"
                icon={faTwitter}
              />
              <Icon
                to="http://www.instagram.com/desktopofsamuel"
                target="_blank"
                icon={faInstagram}
              />
            </IconList>
          </Content>
        </Section>
        <Section>
          <h5>Subscribe</h5>
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
    </Boxed>
  );
};

export default FooterContact;
