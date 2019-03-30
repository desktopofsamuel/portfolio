import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import Layout from "../layout";
import styled from "styled-components";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import IconList from "../components/IconList/IconList";

const Content = styled.main``

class GearPage extends React.Component {
  render() {
    return (
      <Layout>
          <Helmet title={config .siteTitle} />
          <SEO />
          <Content>    
            <h1>Gear</h1>
            <h3>Computer</h3>
            <IconList image={this.props.data.ipad.childImageSharp.fluid} title="iPad Mini 5" subtitle="2019" content="I have recently updated"></IconList>
            <IconList image={this.props.data.ipad.childImageSharp.fluid} title="Macbook Pro 13'" subtitle="2019" content="I have recently updated"></IconList>
          </Content>
      </Layout>
    );
  }
}

export default GearPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
query {
  ipad: file(relativePath: { eq: "images/gear/ipad-mini.png" }) {
    ...fluidImage
  }  
}
`;