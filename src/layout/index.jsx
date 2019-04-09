import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import "./index.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer"


const Layout = styled.div`
    background-color: var(--color-background-500);
    border-top: 3px var(--color-palette-500) solid;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(auto,5%) [content] minmax(auto, 1000px) minmax(auto,5%);
  max-width: 1000px;
  margin: 0 auto;
`

const Content = styled.div`
  grid-area: content;
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Layout>
        <Navigation />
        <Main>
        <Content>
        {children}
        </Content>
        </Main>
        <Footer/>
        </Layout>
      </div>
    );
  }
}
