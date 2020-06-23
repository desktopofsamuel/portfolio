import React from "react";
import styled from "styled-components";
import ResumeItem from "elements/ResumeItem";
import Column from "elements/Column";

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

const ResumeSection = styled(Column)`
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
            title="Principal Designer at HyperAir"
            meta="2019 - Now"
          />
          <ResumeItem
            title="Co-founder & Director at Playa"
            meta="2015 - 2019"
          />
          <ResumeItem
            title="Cross Content Intern at Apple"
            meta="2013 - 2014"
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
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <div>
          <ResumeItem noBorder content="Figma, Sketch, Abstract, Avocode" />
          <ResumeItem noBorder content="HTML, CSS, Git, Google Analytics" />
          <ResumeItem noBorder content="Adobe Creative Suite" />
        </div>
      </Block>
      <Block>
        <ResumeSectionTitle>Language</ResumeSectionTitle>
        <div>
          <ResumeItem noBorder content="Native in Cantonese" />
          <ResumeItem noBorder content="Professional Proficiency in English" />
        </div>
      </Block>
    </Section>
  );
};

export default Resume;
