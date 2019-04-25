import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig";
import styled from "styled-components";
import "./index.css";
import Nav from "../components/Navigation/navigation";
import Footer from "../components/Footer/Footer"

const Layout = styled.div`
    background-color: var(--color-background-500);
    border-top: 3px var(--color-palette-500) solid;
`

const Main = styled.main`
  max-width: 60vw;
  padding: 0 2rem;
  margin: 0 auto;

@media only screen and (max-width: 1024px) {
max-width: 70vw;
padding: 0 1.5rem;
}

@media only screen and (max-width: 768px) {
max-width: 90vw;
padding: 0 1rem;
}
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <SEO />
        <Nav />
        <Main>
        {children}
        </Main>
        <Footer/>
      </Layout>
    );
  }
}
