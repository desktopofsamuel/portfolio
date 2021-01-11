import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ToolCard from "components/ToolCard";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReadOn from "components/ReadOn";
import Layout from "../layout";
// import "react-tabs/style/react-tabs.css";

const TabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 2rem;
`;

const TabListStyled = styled(TabList)`
  display: flex;
  list-style-type: none;
`;

// type ToolPageProps = {
//   data: {
//     tech: {
//       edges: object,
//     },
//   },
// };

const ToolPage = ({ data }) => {
  const techEdges = data.tech.edges;
  return (
    <Layout>
      <Boxed>
        <PageTitle
          title="Tools & Tech"
          description="A list of my favorite tools"
        />
        <Tabs>
          <TabListStyled>
            <Tab>
              <ReadOn text="Mac" href="" />
            </Tab>
            <Tab>
              <ReadOn text="Windows" href="" />
            </Tab>
            <Tab>
              <ReadOn text="Web" href="" />
            </Tab>
            <Tab>
              <ReadOn text="iOS" href="" />
            </Tab>
          </TabListStyled>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Mac")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanel>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Windows")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanel>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Web")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanel>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "iOS")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanel>
        </Tabs>
      </Boxed>
    </Layout>
  );
};

export default ToolPage;

export const pageQuery = graphql`
  query ToolQuery {
    tech: allAirtable(filter: { table: { eq: "Tech" } }) {
      edges {
        node {
          id
          data {
            Description
            Link
            Image {
              url
            }
            Name
            Platform
          }
        }
      }
    }
  }
`;
