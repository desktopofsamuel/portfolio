import React, { Component } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Nav from "../components/Navigation/navigation";
import Footer from "../components/Footer/Footer";

const Layout = styled.div`
  background-color: var(--color-background);
  border-top: var(--page-border-top);
`;

const Main = styled.main`
  padding: 0 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default class DefaultPageLayout extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Nav />
        <Main>
          <h1>Work</h1>
          {this.props.children}
        </Main>
        <Footer />
      </Layout>
    );
  }
}
