import React from "react";
import styled, { StyledFunction } from "styled-components";
import HyperAir from "../../static/about/hyperair.svg";
import Playa from "../../static/about/playa.svg";
import Apple from "../../static/about/apple.svg";
import HSBC from "../../static/about/hsbc.svg";

/*Resume Item Component*/
type ItemWrapperProps = {
  noBorder: boolean,
  haveGrid: boolean,
};

const ItemWrapper =
  styled.div <
  ItemWrapperProps >
  `
  border-top: ${props =>
    props.noBorder ? "none" : "1px var(--color-white-light-300) solid"};
  padding-top: ${props => (props.noBorder ? "0" : "1rem")};
  display: ${props => (props.haveGrid ? "grid" : "block")};
  grid-template-columns: 7fr 2fr;
  grid-gap: var(--padding-s);
`;

const ItemTitle = styled.h3`
  font-size: var(--font-size-m);
  color: var(--color-white-light-300);
  margin: 0;
`;

type ContentProps = {
  noBorder: boolean,
};

const Content =
  styled.p <
  ContentProps >
  `
  color: var(--color-secondary-light-100);
  font-size: var(--font-size-s);
  line-height: auto;
  margin-top: ${props => (props.noBorder ? "0" : "1rem")};
`;

const Meta = styled.p`
  color: var(--color-secondary-light-100);
  opacity: 0.5;
  font-family: var(--font-primary);
  font-size: var(--font-size-2xs);
  text-transform: uppercase;
  letter-spacing: var(--font-small-letter-spacing);
`;

const Image = styled.img`
  justify-self: flex-end;
`;

type ResumeItemProps = {
  title?: string,
  content: string,
  meta?: string,
  image?: string,
  noBorder?: boolean,
  haveGrid?: boolean,
};

const ResumeItem = ({
  title,
  content,
  meta,
  image,
  noBorder,
  haveGrid,
}: ResumeItemProps) => {
  return (
    <ItemWrapper noBorder={noBorder} haveGrid={haveGrid}>
      <div>
        <ItemTitle>{title}</ItemTitle>
        <Content noBorder={noBorder}>{content}</Content>
        <Meta>{meta}</Meta>
      </div>
      {image && <Image src={image} alt={`${title} Logo`} />}
    </ItemWrapper>
  );
};

/*Resume Section*/
const Section = styled.section`
  color: var(--color-white-light-300);
`;

const Title = styled.h3`
  font-family: var(--font-primary);
  color: var(--color-white-light-300);
  margin: 0;
`;

const ResumeSectionTitle = styled.small`
  color: var(--color-secondary-light-100);

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    transform-origin: top left;
    transform: rotate(90deg);
    margin-left: 22px;
  }
`;

const Block = styled.section`
  display: grid;
  grid-template-columns: 10ch 1fr;
  grid-gap: var(--var-padding-m);
  margin: 2rem 0;
  @media only screen and (max-width: 1024px) {
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 22px 1fr;
  }
`;

const ResumeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  grid-gap: var(--var-padding-s) var(--var-padding-m);
`;

const Resume = () => {
  return (
    <Section>
      <Title as="h1">Samuel Wong</Title>
      {/*     <Subtitle>
      I’m now pursuing a career in the field of UI/UX Design because I'm deeply
      passionate about technology and how it profoundly changes our way of
      living. The process of turning an idea into a viable product gives me
      great satisfaction.
    </Subtitle> */}
      <Block>
        <ResumeSectionTitle>Career</ResumeSectionTitle>
        <ResumeSection>
          <ResumeItem
            title="UX/UI Consultant"
            content="Design end-to-end stock trading journeys finance sector"
            meta="2021 - Now"
            image={HSBC}
            haveGrid
            noBorder
          />
          <ResumeItem
            title="Principal Designer"
            content="Lead design direction, initiate and execute design workflow as the first designer onboard."
            meta="2019 - 2021"
            image={HyperAir}
            haveGrid
            noBorder
          />
          <ResumeItem
            title="Co-founder & Director"
            content="Manage and design app and website development projects for start-ups and businesses."
            meta="2015 - 2019"
            image={Playa}
            haveGrid
            noBorder
          />
          <ResumeItem
            title="Cross Content Intern"
            content="Curate editorial content for iTunes & App Store in  a year-long internship"
            meta="2013 - 2014"
            image={Apple}
            haveGrid
            noBorder
          />
        </ResumeSection>
      </Block>

      <Block>
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <ResumeItem
          title="The University of Hong Kong"
          content="Bachelor of Arts"
          meta="2011 - 2015"
        />
      </Block>
      <Block>
        <ResumeSectionTitle>Achievements</ResumeSectionTitle>
        <div>
          <ResumeItem
            noBorder
            content="Triple Gold Award in Web Accessibility Recognition Scheme"
            meta="Office of the Government Chief Information Officer, 2016 & 2018"
          />
          <ResumeItem
            noBorder
            content="Best .HK LegCo Members Website Award (Gold)"
            meta="Hong Kong Internet Registration Corporation, 2017 & 2019"
          />
          <ResumeItem
            noBorder
            content="Cyberport Creative Micro Fund 2015"
            meta="Cyberport, 2015"
          />
        </div>
      </Block>
      {/* <Block>
        <ResumeSectionTitle>Tools</ResumeSectionTitle>
        <div>
          <ResumeItem
            noBorder
            content="Figma, Sketch, Zeplin, Abstract, Marvel, Adobe Creative Suite"
            meta="Design"
          />
          <ResumeItem
            noBorder
            content="Wordpress, Webflow, HTML, CSS, Javascript, React"
            meta="Development"
          />
          <ResumeItem
            noBorder
            content="Google Analytics, Google Tag Manager, Hotja, Jira"
            meta="Analytics"
          />
        </div>
      </Block> */}
      <Block>
        <ResumeSectionTitle>Languages</ResumeSectionTitle>
        <div>
          <ResumeItem noBorder content="Chinese (Cantonese)" />
          <ResumeItem noBorder content="English" />
        </div>
      </Block>
    </Section>
  );
};

export default Resume;
