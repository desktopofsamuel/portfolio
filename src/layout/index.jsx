import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import "./index.css";
import Nav from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const Layout = styled.div`
  background-color: var(--color-background-500);
`;

const Main = styled.main`
  margin: 0 auto var(--var-padding-m) auto;

  @media only screen and (max-width: 1024px) {
    max-width: 95vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <SEO />
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    );
  }
}

{
  /* <MDXProvider
        components={{
          h2: (props) => (
            <h2
              {...props}
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "var(--font-weight-bold)",
                marginTop: "var(--padding-m)",
              }}
            />
          ),
        }}
      > */
}
/*       </MDXProvider> */
