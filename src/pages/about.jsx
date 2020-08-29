import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Boxed from "elements/Boxed";
import PageTitle from "elements/PageTitle";
import Resume from "../components/Resume";
import SEO from "../components/SEO";
import Link from "../components/common/GatsbyLink";
import Layout from "../layout";
import Zoom from "react-reveal/Zoom";
import ReadOn from "elements/ReadOn";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-white);
`;

const InvertRow = styled(Row)`
  background: var(--color-background-reverse);
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: var(--var-padding-m);
  align-items: center;
`;

const IntroContent = styled.div`
  grid-area: intro-content;
  grid-column: 1 / span 7;
`;
const IntroPhoto = styled.div`
  grid-area: intro-photo;
  grid-column: 8 / span 5;
`;

const BioContainer = styled.div`
  background: #eaf1f6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--var-padding-s);
  padding: var(--var-padding-m);
`;

const BioWrapper = styled.div``;

const BioTitleContainer = styled.div`
  border-radius: 16px;
  background-color: ${props => props.color};
  display: inline-block;
  padding: 0.2rem 0.5rem;
`;

const BioTitle = styled.h3`
  margin: 0;
  font-size: var(--font-size-s);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: var(--font-small-letter-spacing);
  color: white;
`;

const BioSectionTitle = ({ title, color }) => (
  <BioTitleContainer color={color}>
    <BioTitle>{title}</BioTitle>
  </BioTitleContainer>
);

const AboutPage = ({ data }) => {
  return (
    <Layout title="About">
      <Row>
        <Boxed>
          <PageTitle title="About Me" description="Hello there"></PageTitle>
        </Boxed>
      </Row>
      <Row>
        <Boxed>
          <IntroGrid>
            <IntroContent>
              <h2>
                Hi, I’m Samuel. I’m a product designer that likes working with
                code.
              </h2>
              <p>
                I’m pursuing a career in the field of UI/UX Design because I'm
                deeply passionate about technology and how it profoundly changes
                our way of living. The process of turning an idea into a viable
                product gives me great satisfaction. Being a self-starter, I’m
                highly motivated staying up-to-date with the latest technology,
                industry practice and design trends.
              </p>
              <ReadOn
                text="Let's Chat"
                href="mailto:desktopofsamuel@gmail.com"
              />
            </IntroContent>
            <IntroPhoto>
              <Img
                fluid={data.cover.childImageSharp.fluid}
                width="100%"
                alt="Photo portrait of Samuel Wong"
              />
            </IntroPhoto>
          </IntroGrid>
        </Boxed>
      </Row>
      <Row>
        <Boxed>
          <h2>About Me</h2>
          <BioContainer>
            <BioWrapper>
              <BioSectionTitle title="Interned At Apple" color="red" />
              <p>
                Majoring in Arts in collage, I took a gap year working in iTunes
                & App Store, Apple. This valuable experience cultivated my
                interest and standard in digital products.
              </p>
            </BioWrapper>
            <BioWrapper>
              <p>
                With more freelance design projects, I have started an agency
                Playa in 2015, hoping to help small businesses, entrepreneurs
                and non-profits launch their projects and bridging the gap
                between project owners and end-users.
              </p>
            </BioWrapper>
            <BioWrapper>
              <p>
                Currently, I work as Principal Designer at Hyperair, a start-up
                that aims to reinvent travel experiences.
              </p>
            </BioWrapper>
          </BioContainer>
        </Boxed>
      </Row>
      <InvertRow id="resume" className="full-bleed">
        <Boxed>
          <small>02. Resume</small>
          <Resume />
        </Boxed>
      </InvertRow>
    </Layout>
  );
};

export default AboutPage;

// const AltRow = styled(Row)`
//   background: var(--color-white-700);
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
//   background: var(--color-white-700);
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
    cover: file(relativePath: { eq: "images/Profile.png" }) {
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
