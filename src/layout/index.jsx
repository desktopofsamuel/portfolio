import React from "react";
import Helmet from "react-helmet";
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
  max-width: 60rem;
  padding: 0 2rem;
  margin-left: auto;
  margin-right: auto;

@media only screen and (max-width: 768px) {
padding: 1rem 2rem;
}
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Nav />
        <Main>
        {children}
        </Main>
        <Footer/>
      </Layout>
    );
  }
}
