import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import PropTypes from "prop-types";
import ReadOn from "components/ReadOn";
import Zoom from "react-reveal/Zoom";
import Resume from "components/Resume";
import SEO from "components/SEO";
import Link from "components/common/GatsbyLink";
import Layout from "../layout";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-white-light-100);

  &:first-child {
    padding-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

const InvertRow = styled(Row)`
  background: var(--color-background-reverse);
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: var(--var-padding-m);
  align-items: center;
`;

const IntroContent = styled.div``;

const IntroPhoto = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const BioContainer = styled.div`
  background: #eaf1f6;
  display: grid;
  grid-template-columns: auto;
  grid-gap: var(--var-padding-s);
  padding: var(--var-padding-m);
  border-radius: var(--border-radius);
`;

const BioWrapper = styled.div``;

const BioTitleContainer = styled.div`
  border-radius: var(--border-radius);
  background-image: ${props => props.color};
  background-color: ${props => props.color};
  display: inline-block;
  padding: 4px 16px;
  align-items: center;
`;

const BioTitle = styled.h3`
  margin: 0;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold-alt);
  text-transform: uppercase;
  letter-spacing: 1.35px;
  color: white;
`;

const Content = styled.p`
  max-width: 50ch;
  color: var(--color-text-secondary);
`;

const SkillItemGrid = styled.div`
  display: grid;
  grid-gap: var(--var-padding-m);
`;

const SkillItemContainer = styled.div`
  border: 0.5px solid var(--color-secondary-light-100);
  padding: var(--var-padding-m);
  border-radius: 24px;
`;

const SkillTitle = styled.h3`
  margin: 0;
`;

const SkillDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 55ch;
`;

const SkillListItem = styled.li`
  font-family: var(--font-primary);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
`;

const BioSectionTitle = ({ title, color }) => (
  <BioTitleContainer color={color}>
    <BioTitle>{title}</BioTitle>
  </BioTitleContainer>
);

const SkillItem = ({ title, description, items }) => (
  <SkillItemContainer>
    <SkillTitle>{title}</SkillTitle>
    <SkillDescription>{description}</SkillDescription>
    <ul>
      {items.map(function(item) {
        return <SkillListItem>{item}</SkillListItem>;
      })}
    </ul>
  </SkillItemContainer>
);

SkillItem.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const AboutPage = ({ data }) => {
  return (
    <Layout
      title="About"
      description="Samuel Wong is a Hong Kong based UI/UX designer specialising in creating delightful user interface & experience."
    >
      <Row>
        <Boxed size="small">
          <IntroGrid>
            <IntroPhoto
              fluid={data.cover.childImageSharp.fluid}
              width="100%"
              alt="Photo portrait of Samuel Wong"
            />
            <IntroContent>
              <h2>Hello, My name is Samuel Wong.</h2>
              <p>
                I’m a <strong>UI/UX designer</strong> with over 5 years of
                experience. I&apos;m pursuing a career in the field because I'm
                deeply passionate about technology and how it profoundly changes
                our way of living.
              </p>
              <ReadOn text="Let's Chat" href="#contact" />
            </IntroContent>
          </IntroGrid>
        </Boxed>
      </Row>
      <Row>
        <Boxed size="small">
          <h2>My Journey</h2>
          <BioContainer>
            <BioWrapper>
              <BioSectionTitle
                title="Interned At Apple"
                color="linear-gradient(90deg, #53B137 0%, #FBAA20 22.4%, #F16D1A 45.31%, #D5232F 65.1%, #812685 83.33%, #108AD3 100%);"
              />
              <p>
                Majoring in Arts in college, I took a gap year working in iTunes
                & App Store, Apple. This valuable experience cultivated my
                interest and knowledge in digital products.
              </p>
            </BioWrapper>
            <BioWrapper>
              <BioSectionTitle title="Starting my agency" color="#47BA00" />
              <p>
                With growing freelance web & design projects, I have started an
                agency, Playa, in 2015 to help small businesses, entrepreneurs
                and non-profits launching their projects.
              </p>
            </BioWrapper>
            <BioWrapper>
              <BioSectionTitle title="switching to product" color="#0176ee" />
              <p>
                Currently, I work as a UX/UI consultant in finance sector.
                Before that, I worked as a Principal Designer at Hyperair, a
                travel start-up based in Hong Kong.
              </p>
            </BioWrapper>
          </BioContainer>
        </Boxed>
      </Row>
      <Row>
        <Boxed size="small">
          <h2>My skills</h2>
          <SkillItemGrid>
            <SkillItem
              title="Interface Design"
              description="Design has been an integral part of my life. It’s been my passion to learn how to deliver functional and elegant design."
              items={[
                "Response Web Design",
                "User Interface Design",
                "Component Design",
                "Design System",
                "Frontend Development",
              ]}
            />
            <SkillItem
              title="Experience Strategy"
              description="Attempting to be an user advocate, I value user experience as well as aligning with business goals."
              items={[
                "User Research",
                "User Testing",
                "Wireframing",
                "Prototyping",
                "Design Validation",
              ]}
            />
          </SkillItemGrid>
        </Boxed>
      </Row>
      <InvertRow id="resume" className="full-bleed">
        <Boxed padding="2rem">
          <small>Resume</small>
          <Resume />
        </Boxed>
      </InvertRow>
      <Row id="contact">
        <Boxed isCenter padding="2rem 0">
          <h2>Let's Connect</h2>
          <Content>
            Drop me a line if you want to say hi, <br /> or share your thoughts
            on my writings.
          </Content>
          <ReadOn
            className="link-contact"
            href="mailto:desktopofsamuel@gmail.com"
            text="Start Conversation"
          />
        </Boxed>
      </Row>
    </Layout>
  );
};

export default AboutPage;

// const AltRow = styled(Row)`
//   background: var(--color-white-light-500);
// `;

// const InvertRow = styled(Row)`
//   background: var(--color-background-reverse);
// `;
// const PhotoFrame = styled.figure`
//   grid-area: Photo;
//   width: 100%;
//   margin: 0;
//   padding: 2rem 0;
// `;

// const WrapperIntro = styled.div`
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   margin-top: -100px;
//   padding-bottom: 100px;

//   @media only screen and (max-width: 768px) {
//     margin-top: 0;
//     display: block;
//   }
// `;

// const WrapperNav = styled.div`
//   > * {
//     display: inline-block;
//     margin-right: 2rem;
//   }
// `;

// const GridBio = styled.div`
//   display: grid;
//   grid-template-columns: auto [P2] minmax(auto, 45ch);
// `;

// const GridSkill = styled.div`
//   display: grid;
//   grid-template-columns: minmax(auto, 4fr) minmax(auto, 6fr);
//   grid-gap: var(--var-padding-m);
//   width: 100%;
//   margin: var(--var-padding-m) 0;

//   @media only screen and (max-width: 768px) {
//     display: block;
//   }
// `;

// const Intro = styled.div`
//   grid-column: span 5 / 8;
//   background: var(--color-background);
//   padding: 2rem;
//   z-index: 1000;
//   @media only screen and (max-width: 768px) {
//     padding: 0;
//     background: none;
//   }
// `;

// const P1 = styled.div`
//   grid-area: P1;
//   max-width: 60ch;
// `;
// const P2 = styled.div`
//   grid-area: P2;
// `;

// const DesignPart = styled.div`
//   h3 {
//     margin: 0;
//   }
// `;
// const DesignContent = styled.div``;
// const SkillList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style-type: none;

//   li {
//     font-family: var(--font-primary);
//     font-size: 1.2rem;
//     color: var(--color-text);
//     font-weight: var(--font-weight-bold);
//     margin-bottom: var(--var-padding-m);
//   }
// `;

// const GridProject = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   grid-gap: 1rem;
// `;

// const PassionPart = styled.div`
//   h3 {
//     margin: 0;
//   }
// `;
// const PassionContent = styled.div``;

// const ProjectWrapper = styled.div`
//   background: var(--color-white-light-500);
//   align-content: space-between;
//   padding: 2rem;
//   display: flex;
//   flex-flow: column;
//   transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.025, 1.025);
//     box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
//   }
// `;

// const ProjectContent = styled.div``;

// const ProjectBottom = styled.div`
//   display: flex;
//   align-items: baseline;
//   justify-content: space-between;
//   justify-self: flex-end;
// `;

// const ProjectIcon = styled.div`
//   margin-bottom: 2rem;
// `;

// const ProjectTitle = styled.h3``;

// const ProjectBlurb = styled.p`
//   font-size: 0.975rem;
// `;

// const ProjectYear = styled.small`
//   margin-bottom: 0;
// `;

// const ProjectLink = styled(Link)``;

// const ProjectBox = ({ img, title, blurb, year, url }) => (
//   <ProjectWrapper>
//     <ProjectIcon>
//       <img src={img} alt={title} width="50px" />
//     </ProjectIcon>
//     <ProjectContent>
//       <ProjectTitle>{title}</ProjectTitle>
//       <ProjectBlurb>{blurb}</ProjectBlurb>
//     </ProjectContent>
//     <ProjectBottom>
//       <ProjectYear>{year}</ProjectYear>
//       <ProjectLink className="noeffect" to={url} target="blank">
//         ↗
//       </ProjectLink>
//     </ProjectBottom>
//   </ProjectWrapper>
// );

// const AboutPage = ({ data }) => {
//   return (
//     <Layout title="About">
//       <Row>
//         <Boxed>
//           <PageTitle title="About Me" subtitle="Hello There" />
//           <PhotoFrame>
//             <Img
//               fluid={data.cover.childImageSharp.fluid}
//               width="100%"
//               alt="Photo portrait of Samuel Wong"
//             />
//           </PhotoFrame>
//           <Zoom duration={500}>
//             <WrapperIntro>
//               <Intro>
//                 <small>Hi! My name is Samuel.</small>
//                 <p>
//                   I&apos;m pursuing a career in the field of UI/UX Design
//                   because I&apos;m deeply passionate about technology and how it
//                   profoundly changes our way of living. <br />
//                   <br />
//                   The process of turning an idea into a viable product gives me
//                   great satisfaction. Being a self-starter, I’m highly motivated
//                   staying up-to-date with the latest technology, industry
//                   practice and design trends.
//                 </p>
//                 <WrapperNav>
//                   <Link to="#bio">
//                     <small>01. Bio </small>
//                   </Link>
//                   <Link to="#resume">
//                     <small>02. Resume </small>
//                   </Link>
//                   <Link to="#skills">
//                     <small>03. Skills </small>
//                   </Link>
//                 </WrapperNav>
//               </Intro>
//             </WrapperIntro>
//           </Zoom>
//         </Boxed>
//       </Row>
//       <AltRow id="bio" className="full-bleed">
//         <Boxed>
//           <P1>
//             <small>01. Bio</small>
//             <h2 className="no-margin">Journey to Design</h2>
//             <p>
//               I studied cultural and film theories at The University of Hong
//               Kong. I took a gap year and worked in iTunes & App Store, Apple as
//               a Cross-Content Intern during college and this valuable experience
//               sparked my interest in digital products and web.
//             </p>
//           </P1>
//           <PhotoFrame>
//             <Img
//               fluid={data.bio.childImageSharp.fluid}
//               width="100%"
//               alt="About Cover Photo"
//             />
//           </PhotoFrame>
//           <GridBio>
//             <P2>
//               <p>
//                 After my internship, I took on some freelance projects as well
//                 as volunteered for students and community organisations,
//                 acquiring various skill sets to be a hybrid designer.
//                 <br />
//                 <br />I started an agency Playa with a partner in 2015, hoping
//                 to help small businesses, entrepreneurs and non-profits launch
//                 their projects and bridge the gap between project owners and
//                 end-users. We have launched dozens of websites and apps in Hong
//                 Kong with multiple recognitions.
//                 <br />
//                 <br />
//                 Currently, I work as Principal Designer at Hyperair, a start-up
//                 that aims to reinvent travel experiences.
//               </p>
//             </P2>
//           </GridBio>
//         </Boxed>
//       </AltRow>
//       <InvertRow id="resume" className="full-bleed">
//         <Boxed>
//           <small>02. Resume</small>
//           <Resume />
//         </Boxed>
//       </InvertRow>

//       <AltRow id="skills" className="full-bleed">
//         <Boxed>
//           <small>03. Skills</small>
//           <h2 className="no-margin">Design, Photography, Writing.</h2>
//           <GridSkill>
//             <DesignPart>
//               <h3>Interface Design</h3>
//             </DesignPart>
//             <DesignContent>
//               <p>
//                 Design has been an integral part of my life. It’s been my
//                 passion to learn how to deliver functional and elegant design.{" "}
//               </p>
//               <SkillList>
//                 <li>Response Web Design</li>
//                 <li>User Interface Design</li>
//                 <li>Component Design</li>
//                 <li>Frontend Development</li>
//               </SkillList>
//             </DesignContent>
//           </GridSkill>
//           <GridSkill>
//             <PassionPart>
//               <h3>Experience Design</h3>
//             </PassionPart>
//             <PassionContent>
//               <p>
//                 Through freelancing, I&apos;m also practicing in the field of
//                 digital products and media, to become a hybrid creative.
//               </p>
//               <SkillList>
//                 <li>User Research</li>
//                 <li>User Experience Audit</li>
//                 <li>Wireframing</li>
//                 <li>Prototyping</li>
//               </SkillList>
//             </PassionContent>
//           </GridSkill>
//           <GridSkill>
//             <PassionPart>
//               <h3>Marketing</h3>
//             </PassionPart>
//             <PassionContent>
//               <p>
//                 Through freelancing, I&apos;m also practicing in the field of
//                 digital products and media, to become a hybrid creative.
//               </p>
//               <SkillList>
//                 <li>Social Media Management</li>
//                 <li>Search Engine Optimization</li>
//                 <li>Videography & Editing</li>
//                 <li>Event Photography</li>
//               </SkillList>
//             </PassionContent>
//           </GridSkill>
//         </Boxed>
//       </AltRow>
//       <Row>
//         <Boxed>
//           <small>04. Now</small>
//           <h2 className="no-margin">Available for Hire</h2>
//         </Boxed>
//       </Row>
//     </Layout>
//   );
// };

// export default AboutPage;

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "images/Profile.webp" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bio: file(relativePath: { eq: "images/Bio.jpg" }) {
      ...fluidImage
    }
  }
`;
