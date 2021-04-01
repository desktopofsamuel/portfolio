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
import Boxed from "../utils/Boxed";
import Link from "../common/GatsbyLink";
import Column from "../utils/Column";
import Emoji from "../common/Emoji";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import ReadOn from "components/ReadOn";

const Container = styled(Boxed)``;

const IntroWrapper = styled.div``;

// Disabled Contact Section

const ContactWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--color-secondary-light-300);
  padding: var(--var-padding-s);

  &::before {
    content: "contact";
    position: absolute;
    top: -11px;
    left: 12px;
    line-height: 20px;
    padding: 0 5px;
    color: var(--color-primary-light-700);
    background-color: var(--color-white-light-100);
    font-family: var(--font-primary);
    letter-spacing: var(--font-small-letterspacing);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    font-size: 12px;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 2rem;
  }
`;

const Image = styled.div`
  width: 200px;
  height: 200px;

  img {
    box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
  }
`;

const Title = styled.h1``;

const Subtitle = styled.p``;

const IndexHero = () => {
  // const profilephoto = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "images/Profile.webp" }) {
  //       ...fluidImage
  //     }
  //   }
  // `);

  return (
    <Container>
      <Image>
        <GatsbyImage
          src="../../../static/images/Profile.png"
          alt="Portrait of Samuel"
        />
        {/* <GatsbyImage
          image={data.profile.childImageSharp.gatsbyImageData}
          alt="Samuel W."
        /> */}
      </Image>
      <Title>Samuel W.</Title>
      <Column>
        <IntroWrapper>
          <Subtitle>
            I am a{" "}
            <Link to="/#experience-designer">user experience designer</Link>,{" "}
            <Link to="/#blog">blogger</Link> and{" "}
            <Link to="/#photography">photographer</Link>.
          </Subtitle>
          <Subtitle>
            I co-founded Playa, a web & app agency. Before that, I worked as
            Cross-Content Intern at iTunes & App Store, Apple.
          </Subtitle>
          <ReadOn text="View My Work" href="/work/" />
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
            <Link
              className="link-contact"
              to="mailto:desktopofsamuel&#64;gmail.com"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Email"
            >
              desktopofsamuel&#64;gmail.com
            </Link>
          </div>
          <div>
            <Emoji symbol="🎤" />{" "}
            <Link
              to="https://www.linkedin.com/in/wongchunlong/"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Linkedin"
            >
              Linkedin
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.twitter.com/desktopofsamuel"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Twitter"
            >
              Twitter
            </Link>{" "}
            /{" "}
            <Link
              to="https://www.instagram.com/desktopofsamuel"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Instagram"
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
