import React from "react";
import styled from "styled-components";
import ResumeItem from "elements/ResumeItem";
import Column from "elements/Column";
import HyperAir from "../../static/icons/resume-hyperair.svg";
import Playa from "../../static/icons/resume-playa.svg";
import Apple from "../../static/icons/resume-apple.svg";

const Section = styled.section`
  color: var(--color-white-500);
`;

const Title = styled.h3`
  font-family: var(--font-primary);
  color: var(--color-white-500);
  margin: 0;
`;

// const Subtitle = styled.p`
//   font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1600 - 320)));
//   line-height: 2em;
//   color: var(--color-primary-shades-100);
//   margin-bottom: 4rem;
// `;

const ResumeSectionTitle = styled.small`
  color: var(--color-primary-shades-100);

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
  grid-template-columns: 1fr 1fr;

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
            title="Principal Designer"
            content="Lead design direction, initiate and execute design workflow as the first designer onboard."
            meta="2019 - Now"
            image={HyperAir}
            haveGrid
          />
          <ResumeItem
            title="Co-founder & Director"
            content="Manage and design app and website development projects for start-ups and businesses."
            meta="2015 - 2019"
            image={Playa}
            haveGrid
          />
          <ResumeItem
            title="Cross Content Intern"
            content="Curate editorial content for iTunes & App Store in  a year-long internship"
            meta="2013 - 2014"
            image={Apple}
            haveGrid
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
      <Block>
        <ResumeSectionTitle>Tools</ResumeSectionTitle>
        <div>
          <ResumeItem
            noBorder
            content="Dsign: Figma, Sketch, Zeplin, Abstract, Marvel, Adobe Creative Suite"
          />
          <ResumeItem
            noBorder
            content="Development: Wordpress, Webflow, HTML, CSS, Javascript, React, Git"
          />
          <ResumeItem
            noBorder
            content="Others: Google Analytics, Google Tag Manager, Hotja, Jira"
          />
        </div>
      </Block>
      <Block>
        <ResumeSectionTitle>Languages</ResumeSectionTitle>
        <div>
          <ResumeItem noBorder content="Native in Cantonese" />
          <ResumeItem noBorder content="Professional Proficiency in English" />
        </div>
      </Block>
    </Section>
  );
};

export default Resume;
