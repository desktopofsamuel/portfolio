import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import CardApp from "components/CardApp";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ButtonPill from "components/button-pill";
import {
  faPencilRuler,
  faDollarSign,
  faDesktop,
  faMobileAlt,
  faLaptop,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Centered from "components/utils/Centered";
import Layout from "../layout";
import { string } from "prop-types";

// import "react-tabs/style/react-tabs.css";

const TabsStyled = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-gap: 0;
  }
`;

const TabGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

type Props = {
  data: {
    software: {
      edges: {
        node: {
          id: String,
          data: {
            Description: {
              childMdx: {
                body: object,
              },
            },
            Link: string,
            Image: {
              url: string,
            },
            Name: string,
            Category: string,
            Platform: string,
            CTA: string,
            ExtraLink: string,
          },
        },
      },
    },
  },
};

const ToolPage = ({ data }: Props) => {
  const softwareEdges = data.software.edges;
  const hardwareEdges = data.hardware.edges;
  return (
    <Layout
      title="My Setup"
      description=" A shout out to all my favorite apps, tools, services, games and more."
    >
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
          title="What I Use"
          description={[
            <span>
              Inspired by the{" "}
              <a href="https://uses.tech/" target="_blank">
                community
              </a>
              {", "}I created a list to share my love to some hardwares, apps,
              services that I use.
            </span>,
            ,
          ]}
        />
      </Boxed>
      <Boxed>
        <TabsStyled selectedTabClassName="active">
          {/* <TabListStyled>
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
          </TabListStyled> */}
          {/* <TabPanelStyled> */}
          <h2>🖥️ Hardware</h2>
          <TabGrid>
            {hardwareEdges
              // .filter(t => t.node.data.Category === "Desktop")
              .map(item => (
                <CardApp postEdges={item} />
              ))}
          </TabGrid>
          <h2>📋 Software</h2>
          <TabGrid>
            {softwareEdges
              // .filter(t => t.node.data.Category === "Desktop")
              .map(item => (
                <CardApp postEdges={item} />
              ))}
          </TabGrid>
          {/* </TabPanelStyled> */}
          {/* <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Mobile")
                .map(item => (
                  <CardApp postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled>
          <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Subscriptions")
                .map(item => (
                  <CardApp postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled> */}
          {/* <TabPanelStyled>
            <TabGrid>
              {techEdges
                .filter(t => t.node.data.Category === "Design")
                .map(item => (
                  <CardApp postEdges={item} />
                ))}
            </TabGrid>
          </TabPanelStyled> */}
        </TabsStyled>
      </Boxed>
    </Layout>
  );
};

export default ToolPage;

export const pageQuery = graphql`
  query AppsQuery {
    hardware: allAirtable(
      filter: {
        table: { eq: "Tech" }
        data: { Category: { eq: "Hardware" }, Status: { eq: "Published" } }
      }
      sort: { fields: data___ID }
    ) {
      edges {
        ...tech
      }
    }
    software: allAirtable(
      filter: {
        table: { eq: "Tech" }
        data: { Category: { ne: "Hardware" }, Status: { eq: "Published" } }
      }
      sort: { fields: data___Name }
    ) {
      edges {
        ...tech
      }
    }
  }
`;
