import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ToolCard from "components/ToolCard";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ButtonPill from "components/button-pill";
import { faApple, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilRuler,
  faDollarSign,
  faDesktop,
  faMobileAlt,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../layout";
// import "react-tabs/style/react-tabs.css";

const TabsStyled = styled(Tabs)`
  display: grid;
  place-content: center;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-gap: 0;
  }
`;

const TabGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content;
  grid-gap: 2rem;

  & > * {
    height: 100%;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

const TabListStyled = styled(TabList)`
  display: flex;
  grid-gap: 1rem;
  margin: 0 auto;
  place-content: center;

  & li::before {
    content: "";
    margin: 0;
  }

  .active > * {
    background-color: var(--color-primary-light-500);
    color: var(--color-white-light-300);
  }

  @media (max-width: 768px) {
    display: contents;
  }
`;

const TabPanelStyled = styled(TabPanel)``;

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
    <Layout title="Apps & Services">
      <Boxed>
        <PageTitle
          title="Apps & Services"
          description="A list of my favorite tools"
        />
        <TabsStyled selectedTabClassName="active">
          <TabListStyled>
            <Tab as="button">
              <ButtonPill text="Desktop" lefticon={faDesktop} />
            </Tab>
            <Tab>
              <ButtonPill text="Mobile" lefticon={faMobileAlt} />
            </Tab>
            <Tab>
              <ButtonPill text="Subscriptions" lefticon={faDollarSign} />
            </Tab>
            <Tab>
              <ButtonPill text="Design" lefticon={faPencilRuler} />
            </Tab>
          </TabListStyled>
          <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Desktop")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled>
          <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Mobile")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled>
          <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Subscriptions")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled>
          <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Design")
                .map(item => (
                  <ToolCard postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled>
        </TabsStyled>
      </Boxed>
    </Layout>
  );
};

export default ToolPage;

export const pageQuery = graphql`
  query ToolQuery {
    tech: allAirtable(
      filter: { table: { eq: "Tech" } }
      sort: { fields: data___Name }
    ) {
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
            Category
          }
        }
      }
    }
  }
`;
