import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import ToolCard from "components/ToolCard";
import Layout from "../layout";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const DesignCareerKit = ({ data }) => {
  const careerEdges = data.career.edges;
  return (
    <Layout title="UX Design Career Kit">
      <Boxed>
        <PageTitle
          title="UX Design Career Kit"
          description="A list of my favorite tools"
        />
        <Grid>
          {careerEdges.map(item => (
            <ToolCard postEdges={item} />
          ))}
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
            Image {
              url
            }
            Name
            Author
            AuthorLink
            Category
            Description
            Handle
            ID
            Status
            Tag
            Tags
          }
        }
      }
    }
  }
`;
