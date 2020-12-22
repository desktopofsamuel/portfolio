import React, { Component } from "react";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import { Helmet } from "react-helmet";
import SEO from "components/SEO";
import Layout from "../layout";
import config from "../../data/SiteConfig";
// import Sidebar from "components/Sidebar";

const Main = styled.main`
  h2 {
    font-size: var(--font-size-m);
    margin: 2rem 0 1rem 0;
  }

  h5 {
    margin: 0;
  }

  p {
    font-size: var(--font-size-s);
  }
`;

const Container = styled(Boxed)`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.aside``;

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
          <Sidebar>
            <p>hello</p>
          </Sidebar>
        </Container>
      </Layout>
    );
  }
}
