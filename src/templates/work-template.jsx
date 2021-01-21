import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import Boxed from "components/utils/Boxed";
import { SmallText, H1, Subtitle } from "components/common/TextStyles";
import SEO from "components/SEO";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "../layout/work.css";

const Header = styled.div`
  max-width: 48ch;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled(H1)`
  font-family: var(--font-tertiary);
  padding-top: var(--var-padding-m);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold-alt);
  letter-spacing: -2px;
  margin: 0;
`;

const SecondaryTitle = styled(Subtitle)`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-m);
  color: var(--color-text-secondary);
  margin-top: 2rem;
  line-height: 1.8;
`;

const Quote = styled.h3`
  font-family: var(--font-tertiary);
  padding-top: var(--var-padding-m);
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold-alt);
  letter-spacing: -1px;
  margin: 0;
  grid-column: span 8;
`;

const Meta = styled.small`
  margin: 0;
`;

const Opening = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 36px;
`;

const WorkPageTemplate = ({ pageContext, data }) => {
  const path = "/work" + pageContext.slug;
  const postEdges = data.mdx.frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{`${postEdges.projectTitle} — ${postEdges.shortTitle} | Case Studies of ${config.siteTitleAlt}`}</title>
      </Helmet>
      <SEO postPath={path} postNode={data.mdx} postSEO />
      {/* <WorkPageHero data={postEdges} /> */}

      <Boxed size="medium">
        {/* <GatsbyLink to="/work">Back</GatsbyLink> */}
        <Header>
          <SmallText>Case Studies — {postEdges.year}</SmallText>
          <Title>
            {postEdges.shortTitle ? postEdges.shortTitle : postEdges.title}
          </Title>
          <SecondaryTitle>{postEdges.projectTitle}</SecondaryTitle>
        </Header>
        <div className="work">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Boxed>
    </Layout>
  );
};

export default WorkPageTemplate;

export const pageQuery = graphql`
  query WorkPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        subtitle
        shortTitle
        projectTitle
        intro
        year
        role
        team
        path
        tags
        color
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
