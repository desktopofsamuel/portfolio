import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Boxed from "../elements/Boxed";
import Profile from "../../static/images/Profile.webp";
import Link from "./common/GatsbyLink";
import Column from "../elements/Column";

const Container = styled.div``;

const IntroWrapper = styled.div``;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  return (
    <Container>
      <Boxed>
        <Image>
          <img src={Profile} />
        </Image>
        <Title>Samuel W.</Title>
        <Column>
          <IntroWrapper>
            <Subtitle>
              I am an user exerpierence designer, based in Hong Kong.
            </Subtitle>
          </IntroWrapper>
          <LinkWrapper>
            <Link to="mailto:desktopofsamuel@gmail.com">
              desktopofsamuel@gmail.com
            </Link>
            <Link to="mailto:desktopofsamuel@gmail.com">Linkedin</Link> /{" "}
            <Link to="mailto:desktopofsamuel@gmail.com">Instagram</Link>
          </LinkWrapper>
        </Column>
      </Boxed>
    </Container>
  );
};

export default IndexHero;
