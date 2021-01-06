import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ToolCard from "components/ToolCard";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Layout from "../layout";
import "react-tabs/style/react-tabs.css";

const ToolPage = ({ data }) => {
  const techEdges = data.tech.edges;
  console.log(techEdges);
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
            <Tab>Mac</Tab>
            <Tab>Windows</Tab>
            <Tab>Web</Tab>
          </TabList>
          {}
          <TabPanel>
            {techEdges
              .filter(t => t.node.data.Platform === "Mac")
              .map(item => (
                <ToolCard postEdges={item} />
              ))}
          </TabPanel>
          <TabPanel>
            {techEdges
              .filter(t => t.node.data.Platform === "Windows")
              .map(item => (
                <ToolCard postEdges={item} />
              ))}
          </TabPanel>
          <TabPanel>
            {techEdges
              .filter(t => t.node.data.Platform === "Web")
              .map(item => (
                <ToolCard postEdges={item} />
              ))}
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
