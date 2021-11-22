// import React from "react";
// import styled from "styled-components";
// import Boxed from "../components/utils/Boxed";
// import { GatsbyImage } from "gatsby-plugin-image";

// const Section = styled.div`
//   min-height: 50vh;
//   background-color: ${props => (props.color ? `${props.color}` : "black")};
//   padding: var(--padding-m) var(--padding-m) 0 var(--padding-m);
// `;

// const Container = styled(Boxed)``;

// const Subtitle = styled.h6`
//   color: var(--color-white-light-300);
//   z-index: 100;
// `;

// const Title = styled.h1`
//   margin: 0;
//   color: var(--color-white-light-300);
//   z-index: 100;
// `;

// const Image = styled(GatsbyImage)`
//   background-color: rgba(0, 0, 0, 0);

//   @media only screen and (max-width: 768px) {
//     position: absolute !important;
//     width: 80%;
//     max-height: 800px;
//     bottom: 0;
//     z-index: 99;
//   }
// `;

// const WorkPageHero = ({ data }) => {
//   return (
//     <Section className="full-bleed" color={data.color}>
//       <section>
//         <Boxed size="large">
//           <Subtitle>{data.title}</Subtitle>
//           <Title>{data.subtitle}</Title>
//           <Image fluid={data.cover.childImageSharp.gatsbyImageData} alt={data.title} />
//         </Boxed>
//       </section>
//     </Section>
//   );
// };

// export default WorkPageHero;
