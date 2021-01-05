import React from "react";
import styled from "styled-components";
import ToolCard from "components/ToolCard";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ToolData } from "../../data/ToolData";
import Layout from "../layout";
import "react-tabs/style/react-tabs.css";

const ToolPage = () => {
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

          <TabPanel>
            {ToolData.filter(t => t.platform === "Mac").map(item => (
              <ToolCard item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {ToolData.filter(t => t.platform === "Windows").map(item => (
              <ToolCard item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {ToolData.filter(t => t.platform === "Web").map(item => (
              <ToolCard item={item} />
            ))}
          </TabPanel>
        </Tabs>
      </Boxed>
    </Layout>
  );
};

export default ToolPage;
