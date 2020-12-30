import React from "react";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import Icon from "components/common/Icon";
import Link from "components/common/GatsbyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { PageData, AboutData } from "../../../data/FooterMenu";

/* Newsletter Form */
const FormContainer = styled.div`
  overflow: hidden;
  padding: var(--var-padding-m);
  position: relative;
  color: white;
  border-radius: 24px;
  h3 {
    margin: 0;
    color: white;
  }

  p {
    opacity: 0.7;
  }
`;

const FormButton = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-secondary);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  border-radius: 24px;
`;

const FormBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #0099cc 0deg,
    #ff008a 360deg
  );
  filter: blur(250px);
  z-index: -100;
`;

const FormInput = styled.input`
  min-width: 200px;
  border-radius: 8px;
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 7fr 3fr;
    grid-gap: 2rem;
  }
`;

const Form = () => {
  return (
    <FormContainer>
      <FormBackground />
      <h3>Stay tuned for my latest update</h3>
      <p>
        Be the first to hear about my new content and updates! No spam, promise
      </p>
      <FormWrapper>
        <FormInput type="text" />
        <FormButton type="submit" value="Subscribe" />
      </FormWrapper>
      <Link to="/rss.xml">Subscribe via RSS</Link>
    </FormContainer>
  );
};

/* Vertical Menu */
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  h5 {
    margin: 0;
  }
`;

const MenuHeader = styled.small`
  opacity: 0.5;
  color: white;
  font-weight: var(--font-weight-normal);

  &.social {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const MenuItem = styled.li.attrs({
  className: "MenuItem",
})`
  padding: -16px;
  transition: var(--transition);

  &:hover {
    opacity: 0.7;
  }

  ul li::before {
    content: none;
  }
`;

const Menu1 = () => {
  return (
    <MenuWrapper>
      <MenuHeader>About</MenuHeader>
      <ul>
        {PageData.map((item, index) => (
          <MenuItem key={item}>
            <Link className="noeffect" to={item.link}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </ul>
    </MenuWrapper>
  );
};

const Menu2 = () => {
  return (
    <MenuWrapper>
      <MenuHeader>Pages</MenuHeader>
      <ul>
        {AboutData.map((item, index) => (
          <MenuItem>
            <Link className="noeffect" to={item.link}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </ul>
    </MenuWrapper>
  );
};

const IconList = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    display: grid;
  }
`;

const Menu3 = () => {
  return (
    <MenuWrapper>
      <MenuHeader className="social">Social</MenuHeader>
      <IconList>
        <Icon
          to="https://www.linkedin.com/in/wongchunlong/"
          target="_blank"
          icon={faLinkedin}
          title="Linkedin"
        />
        <Icon
          to="http://www.twitter.com/desktopofsamuel/"
          target="_blank"
          icon={faTwitter}
          title="Twitter"
        />
        <Icon
          to="http://www.instagram.com/desktopofsamuel"
          target="_blank"
          icon={faInstagram}
          title="Instagram"
        />
        <Icon
          to="http://www.desktopofsamuel.medium.com/"
          target="_blank"
          icon={faMedium}
          title="Medium"
        />
      </IconList>
    </MenuWrapper>
  );
};

/* Bottom Bar */

const ScrollToTopContainer = styled.div`
  background-color: var(--color-secondary);
  height: 62px;
  width: 62px;
  display: none;
  font-size: var(--font-size-m);
  color: var(--color-white);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--color-primary-shades-700);
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    place-content: center;
  }
`;

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollToTop = () => {
  return (
    <ScrollToTopContainer onClick={scrollTop}>
      <FontAwesomeIcon icon={faChevronUp} title="Back To Top" />
    </ScrollToTopContainer>
  );
};

const CreditText = styled.p`
  font-size: var(--font-size-2xs);
  color: var(--color-text-secondary);
  margin: 0;
`;

const CreditContainer = styled.div`
  min-height: 62px;
  padding: var(--var-padding-s);
  background-color: var(--color-primary-shades-100);
  text-align: center;
`;

const ScrollToWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

/* Footer */
const Container = styled.footer`
  width: 100%;
  position: relative;
`;

const Row = styled.section`
  margin-top: 0;
  margin-bottom: 0;
`;

const FooterRow = styled(Row)`
  background-color: #2f2f2f;
`;

const GridRow = styled(Row)`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 4rem 0;
  }
`;

const CreditRow = styled(Row)``;

const Footer = () => {
  return (
    <Container>
      <Boxed>
        <FooterRow className="full-bleed">
          <Boxed>
            <GridRow>
              <Form />
              <Menu3 />
              <Menu1 />
              <Menu2 />
            </GridRow>
          </Boxed>
        </FooterRow>
        <CreditRow className="full-bleed">
          <CreditContainer>
            <CreditText>
              Designed & Coded by Samuel W. © 2018 - 2021 | Built with{" "}
              <Link to="https://www.gatsbyjs.org">Gatsby</Link>.
            </CreditText>
          </CreditContainer>
          <ScrollToWrapper>
            <ScrollToTop />
          </ScrollToWrapper>
        </CreditRow>
      </Boxed>
    </Container>
  );
};

export default Footer;
