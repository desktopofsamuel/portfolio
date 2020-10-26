import React, { Component } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";

export default class DefaultPageLayout extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>{`${this.props.pageContext.frontmatter.title} | ${config.siteTitle} `}</title>
        </Helmet>
        <SEO postPath={this.props.path} postNode={this.props.pageContext} />
        <Boxed>{this.props.children}</Boxed>
      </Layout>
    );
  }
}
