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
          type="secondary"
        />
        <Tabs>
          <TabList>
            <Tab>
              <ReadOn text="Mac" href="" />
            </Tab>
            <Tab>
              <ReadOn text="Windows" href="" />
            </Tab>
            <Tab>
              <ReadOn text="Web" href="" />
            </Tab>
          </TabList>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Mac")
                .map(item => (
                  <ToolCard postEdges={item} className="noeffect" />
                ))}
            </TabGrid>
          </TabPanel>
          <TabPanel>
            {" "}
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Windows")
                .map(item => (
                  <ToolCard postEdges={item} className="noeffect" />
                ))}
            </TabGrid>
          </TabPanel>
          <TabPanel>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Platform === "Web")
                .map(item => (
                  <ToolCard postEdges={item} className="noeffect" />
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
    tech: allAirtable(filter: { table: { eq: "Tech" } }, sort: { fields: id }) {
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
