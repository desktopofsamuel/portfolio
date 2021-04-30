import React, { Component } from "react";
import { PageProps } from "gatsby";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import { Helmet } from "react-helmet";
import SEO from "components/SEO";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { fromPromise } from "public/render-page";
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

type Props = {
  pageContext: {
    frontmatter: {
      title: string,
    },
  },
  children: object,
  path: string,
};

const DefaultPageLayout: React.FC<PageProps> = ({
  pageContext,
  children,
  path,
}: Props) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.frontmatter.title} | ${config.siteTitle} `}</title>
      </Helmet>
      <SEO postPath={path} postNode={pageContext} postSEO />

      <Container>
        <Main>{children}</Main>
        <Sidebar></Sidebar>
      </Container>
    </Layout>
  );
};

export default DefaultPageLayout;
