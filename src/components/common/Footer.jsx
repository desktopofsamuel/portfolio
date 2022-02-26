import React from "react";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Icon from "components/common/Icon";
import Link from "components/common/GatsbyLink";
import { SmallText } from "./TextStyles";

library.add(faTwitter, faInstagram, faLinkedin, faChevronUp);

/* Back To Top Button */
const ScrollToTopContainer = styled.div`
  display: none;
  font-size: var(--font-size-m);
  cursor: pointer;
  transition: var(--transition);

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
      <FontAwesomeIcon
        icon={["fa", "chevron-up"]}
        size={8}
        title="Back To Top"
      />
    </ScrollToTopContainer>
  );
};

/* Footer Contact  Section */

const SectionContainer = styled.section`
  display: block;
  padding: var(--padding-m) 0;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;

const Section = styled.div`
  display: block;
`;

const Title = styled(SmallText)`
  font-weight: var(--font-weight-bold);
  color: var(--color-title);
`;

const Content = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;

const FooterContact = () => {
  return (
    <Boxed>
      <SectionContainer>
        <Section>
          <Title>Let's Chat</Title>
          <Content>
            I am excited for new opportunities, let's talk about working
            together. <br />
            <Link
              className="link-contact"
              to="mailto:desktopofsamuel&#64;gmail.com"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Email"
            >
              desktopofsamuel&#64;gmail.com
            </Link>
          </Content>
        </Section>
        <Section>
          <Title>Keep In Touch</Title>
          <Content>
            Follow my social media and see what I'm up to.
            <IconList>
              <Icon
                to="https://www.linkedin.com/in/wongchunlong/"
                target="_blank"
                icon={["fab", "linkedin"]}
                title="Linkedin"
                data-splitbee-event="External Link"
                data-splitbee-event-type="Linkedin"
              />
              <Icon
                to="https://www.twitter.com/desktopofsamuel/"
                target="_blank"
                icon={["fab", "twitter"]}
                title="Twitter"
                data-splitbee-event="External Link"
                data-splitbee-event-type="twitter"
              />
              <link href="https://twitter.com/desktopofsamuel/" rel="me" />
              <Icon
                to="https://www.instagram.com/desktopofsamuel"
                data-splitbee-event="External Link"
                data-splitbee-event-type="instagram"
                target="_blank"
                icon={["fab", "instagram"]}
                title="Instagram"
              />
            </IconList>
          </Content>
        </Section>
        <Section>
          <Title>Subscribe</Title>
          <Content>
            I write regularly on the subject of design and technology. Feel free
            to subscribe via{" "}
            <Link
              to="/rss.xml"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="RSS"
            >
              RSS
            </Link>{" "}
            or follow me on{" "}
            <Link
              to="https://medium.com/@desktopofsamuel"
              target="_blank"
              data-splitbee-event="External Link"
              data-splitbee-event-type="Medium"
            >
              Medium
            </Link>
            .
          </Content>
        </Section>
      </SectionContainer>
    </Boxed>
  );
};

/* Footer Section */
const Container = styled.footer`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Row = styled.section`
  /* background-color: #e5e9d8; */
  padding: var(--var-padding-s) 0;
`;

const EndRow = styled.section``;

const FooterItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  font-family: var(--font-primary);
  color: var(--color-text-secondary);
  border-bottom: 0;
  text-align: center;
  transition: var(--transition);
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: var(--color-primary-light-500);
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

const CreditText = styled(SmallText)`
  font-size: var(--font-size-2xs);
  color: var(--color-text-secondary);
  margin: 0;
`;

const LinkContainer = styled.div`
  margin-top: 2rem;
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
  min-height: 62px;
  padding: var(--var-padding-s) 0;
  // background-color: var(--color-primary-light-100);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    text-align: left;
  }
`;

const ScrollToWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <Container id="contact">
      {/* <BgRow>
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
        </BgRow> */}
      <Row>
        <FooterContact />
      </Row>

      <EndRow>
        <Boxed>
          <LinkContainer>
            <FooterItem className="noeffect" to="/about/">
              About
            </FooterItem>
            <FooterItem className="noeffect" to="/work/">
              Work
            </FooterItem>
            <FooterItem className="noeffect" to="/blog/">
              Blog
            </FooterItem>
            <FooterItem className="noeffect" to="/photo/">
              Photo
            </FooterItem>
            <FooterItem className="noeffect" to="/resources/">
              Resources
            </FooterItem>
            <FooterItem className="noeffect" to="/changelog/">
              Changelog
            </FooterItem>
          </LinkContainer>
          <CreditContainer>
            <CreditText>
              Design & Code by Samuel Wong © 2018 - {new Date().getFullYear()} |
              Built with <Link to="https://www.gatsbyjs.org">Gatsby</Link>.
            </CreditText>{" "}
            <ScrollToTop />
          </CreditContainer>
        </Boxed>
      </EndRow>
    </Container>
  );
};

export default Footer;
