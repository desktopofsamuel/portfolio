import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Boxed from "../elements/Boxed";
import Profile from "../../static/images/Profile.png";
import Link from "./common/GatsbyLink";
import Column from "../elements/Column";
import Emoji from "./common/Emoji";
import Img from "gatsby-image";
import Data from "elements/Data";

const Container = styled(Boxed)`
  max-width: var(--page-container-l);
`;

const IntroWrapper = styled.div``;

// Disabled Contact Section

const ContactWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--color-primary);
  padding: var(--var-padding-s);

  &::before {
    content: "contact";
    position: absolute;
    top: -11px;
    left: 12px;
    line-height: 20px;
    padding: 0 5px;
    color: var(--color-primary);
    background-color: var(--color-white-300);
    font-family: var(--font-primary);
    letter-spacing: var(--font-small-letterspacing);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    font-size: 12px;
}
  }
`;

const Image = styled.div`
  width: 200px;
  height: 200px;

  img {
    box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Subtitle = styled.p``;

const IndexHero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "images/Profile.png" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <Container>
      <Image>
        <Img fluid={data.profile.childImageSharp.fluid} alt="Samuel W." />
      </Image>
      <Title>Samuel W.</Title>
      <Column>
        <IntroWrapper>
          <Subtitle>
            I am a{" "}
            <Link to="/#experience-designer">user exerpierence designer</Link>,{" "}
            <Link to="/#blog">blogger</Link> and{" "}
            <Link to="/#photography">photographer</Link>.
          </Subtitle>
          <Subtitle>
            I co-founded Playa, a web & app agency. Before that, I worked as
            Cross-Content Intern at iTunes & App Store, Apple.
          </Subtitle>
        </IntroWrapper>
        {/* <LinkWrapper>
          <small>Contact</small>
          <div>
            <Emoji symbol="📬" />{" "}
            <Link to="mailto:desktopofsamuel&#64;gmail.com" target="_blank">
              desktopofsamuel&#64;gmail.com
            </Link>
          </div>
          <div>
            <Emoji symbol="🎤" />{" "}
            <Link
              to="https://www.linkedin.com/in/wongchunlong/"
              target="_blank"
            >
              Linkedin
            </Link>{" "}
            /{" "}
            <Link to="https://www.twitter.com/desktopofsamuel" target="_blank">
              Twitter
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.instagram.com/desktopofsamuel"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </LinkWrapper> */}
        <ContactWrapper>
          <div>
            <Emoji symbol="📬" />{" "}
            <Link to="mailto:desktopofsamuel&#64;gmail.com" target="_blank">
              desktopofsamuel&#64;gmail.com
            </Link>
          </div>
          <div>
            <Emoji symbol="🎤" />{" "}
            <Link
              to="https://www.linkedin.com/in/wongchunlong/"
              target="_blank"
            >
              Linkedin
            </Link>{" "}
            /{" "}
            <Link to="https://www.twitter.com/desktopofsamuel" target="_blank">
              Twitter
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.instagram.com/desktopofsamuel"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </ContactWrapper>
      </Column>
    </Container>
  );
};

export default IndexHero;
