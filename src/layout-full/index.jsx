import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import "../layout/index.css";
import Nav from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer"


const Layout = styled.div`
    background-color: var(--color-background-500);
    border-top: 3px var(--color-palette-500) solid;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(auto,5%) [content] minmax(auto, 1440px) minmax(auto,5%);
  margin-left: 50px;
  @media screen and (max-width: 1024px) {
    margin-left: 0px
  }
`

const Content = styled.div`
  grid-area: content;
  margin: 0 auto;
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
        <Nav />
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
