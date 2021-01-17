import React from "react";
import { graphql } from "gatsby";
import Link from "components/common/GatsbyLink";
import WorkIndex from "components/page/IndexWork";
import PageTitle from "components/PageTitle";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import ReadOn from "components/ReadOn";
import WorkDetail from "components/WorkDetail";
import Layout from "../layout";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);

  &:first-child {
    padding-bottom: 0;
  }
`;

const ClearRow = styled(Row)`
  padding: 0;
  p {
    color: var(--color-text-secondary);
  }
`;
const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;

const ProjectWrapper = styled.div`
  background: var(--color-white-light-500);
  align-content: space-between;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025, 1.025);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Item = styled.div`
  padding: var(--padding-m);
  display: grid;
  grid-gap: 8px;
  margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  max-width: 36ch;
`;

const ListedItem = ({ title, description, url, role, year }) => (
  <Item>
    <ItemTitle>{title}</ItemTitle>
    <ItemText>{description}</ItemText>
    <ReadOn href={url} text="View Project" />
  </Item>
);

const CenterRow = styled(Row)`
  text-align: center;
  padding-top: 0;

  h1 {
    font-family: var(--font-tertiary);
    font-size: var(--font-size-xxl);
    margin: 0;
  }

  p {
    color: var(--color-text-secondary);
  }
`;

const Grid = styled.div`
  transition: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: repeat(1, minmax(400px, 1fr));
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: var(--var-padding-s);
  }
`;

const WorkPage = ({ data }) => {
  const postEdges = data.feature.edges;
  const workEdges = data.work.edges;
  return (
    <Layout title="Portfolio">
      <Boxed>
        <PageTitle
          title="Portfolio"
          description="Selected websites and apps showcase since 2015."
        />
        <Row>
          <WorkDetail postEdges={postEdges} />
        </Row>
        <ClearRow>
          <h2>More Works</h2>
          <p>Check out some of my personal work & design projects.</p>
        </ClearRow>
        <Row>
          <Grid>
            <WorkIndex postEdges={workEdges} detail />
          </Grid>
        </Row>
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
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            shortTitle
            projectTitle
            smallTitle
            feature
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            photo {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            date
          }
        }
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
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            shortTitle
            projectTitle
            smallTitle
            feature
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            photo {
              publicURL
              size
              childImageSharp {
                fluid(maxHeight: 1400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
