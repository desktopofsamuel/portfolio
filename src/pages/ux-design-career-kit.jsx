import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import CardResource from "components/CardResource";
import CardThread from "components/CardThread";
import ReadOn from "components/ReadOn";
import Centered from "components/utils/Centered";
import ButtonPill from "components/button-pill";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { H2, H3, BodyMain } from "components/common/TextStyles";
import Layout from "../layout";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content;
  grid-gap: 16px;

  & > * {
    height: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: var(--color-primary-light-100);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
  min-height: 200px;

  h2 {
    margin: 0;
    font-size: var(--font-size-l);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const ThreadWrapper = styled.div`
  grid-column: span 3;
`;

const ThreadsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardSubmit = () => {
  return (
    <Card>
      <h2>Submit your resources for prospect designer</h2>
      <ReadOn
        text="submit"
        href="https://airtable.com/shrhwaFnDZb3Z4KoH"
        target="_blank"
      />
    </Card>
  );
};

const DesignCareerKit = ({ data }) => {
  const careerEdges = data.career.edges;
  return (
    <Layout title="UX Design Career Kit">
      <Boxed>
        <Centered>
          <ButtonPill
            lefticon={faChevronLeft}
            text="Back To Tools & Resources"
            to="/resources"
            isSecondary
          />
        </Centered>
        <PageTitle
          title="UX Design Career Kit"
          description="A list of helpful resources to kickstart your UX design career"
        />
      </Boxed>
      <Boxed>
        <Grid>
          {careerEdges
            .filter(item => item.node.data.Category === "Resources")
            .map(item => (
              <CardResource postEdges={item} />
            ))}
          <CardSubmit />
          <ThreadWrapper>
            <H2>Portfolio Tips Thread</H2>
            <BodyMain>Helpful tips for design hiring </BodyMain>
            <ThreadsGrid>
              {careerEdges
                .filter(item => item.node.data.Category === "Thread")
                .map(item => (
                  <CardThread postEdges={item} />
                ))}
            </ThreadsGrid>
          </ThreadWrapper>
        </Grid>
      </Boxed>
    </Layout>
  );
};

export default DesignCareerKit;

export const pageQuery = graphql`
  query CareerQuery {
    career: allAirtable(
      filter: { table: { eq: "Career" }, data: { Status: { eq: "Published" } } }
      sort: { fields: data___Name }
    ) {
      edges {
        node {
          id
          data {
            Link
            Category
            Image {
              url
            }
            Name
            Author
            AuthorLink
            Category
            Text
            Handle
            ID
            Status
            Tag
          }
        }
      }
    }
  }
`;
