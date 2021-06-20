import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import WorkIndex from "components/page/IndexWork";
import WorkDetail from "components/WorkDetail";
import Column from "components/utils/Column";
import Layout from "../layout";
import { H2, BodyMain } from "../components/common/TextStyles";

const Grid = styled.div`
  transition: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: repeat(1, minmax(400px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: var(--var-padding-m);
  }
`;

const WorkPage = ({ data }) => {
  const postEdges = data.feature.edges;
  const workEdges = data.work.edges;
  return (
    <Layout
      title="Portfolio"
      description="Websites & apps portfolio with UI/UX design showcase"
      keywords="UI, UX, Design, Product Design, Portfolio, Showcase, Samuel Wong Portfolio, Experience Design"
    >
      <Boxed>
        <PageTitle
          title="Portfolio"
          description="Selected websites and apps showcase since 2015."
        />
      </Boxed>
      <Boxed>
        <WorkDetail postEdges={postEdges} />
      </Boxed>
      <Boxed>
        <H2>More Works</H2>
        <BodyMain>
          Check out some of my personal work & design projects.
        </BodyMain>
        <Column>
          <WorkIndex postEdges={workEdges} detail />
        </Column>
      </Boxed>
    </Layout>
  );
};

export default WorkPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkQuery {
    feature: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { eq: true } }
      }
    ) {
      edges {
        ...workpost
      }
    }
    work: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { draft: { ne: true }, feature: { ne: true } }
      }
    ) {
      edges {
        ...workpost
      }
    }
  }
`;
