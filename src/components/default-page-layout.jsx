import React, { Component } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Sidebar from "./sidebar";

const Main = styled.main``;

const Container = styled(Boxed)`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export default class DefaultPageLayout extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>{`${this.props.pageContext.frontmatter.title} | ${config.siteTitle} `}</title>
        </Helmet>
        <SEO postPath={this.props.path} postNode={this.props.pageContext} />
        <Container>
          <Main>{this.props.children}</Main>
          <Sidebar />
        </Container>
      </Layout>
    );
  }
}
