import React, { Component } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Nav from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Boxed from "elements/Boxed";

const Layout = styled.div`
  background-color: var(--color-background-500);
  border-top: 3px var(--color-palette-500) solid;
`;

const Main = styled(Boxed)``;

export default class DefaultPageLayout extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Nav />
        <Main>{this.props.children}</Main>
        <Footer />
      </Layout>
    );
  }
}
