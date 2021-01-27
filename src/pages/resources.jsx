import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import { H2, BodyMain } from "components/common/TextStyles";
import ReadOn from "components/ReadOn";
import Layout from "../layout";
import Resource1 from "../../static/SVG/Resource.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: var(--var-padding-m);
`;

const Wrapper = styled.div``;

const ResourcePage = ({}) => {
  return (
    <Layout>
      <Boxed>
        <PageTitle title="Tools & Resources" />
      </Boxed>
      <Boxed>
        <Grid>
          <Wrapper>
            <img src={Resource1} />
          </Wrapper>
          <Wrapper>
            <H2>Design Career Kit</H2>
            <BodyMain>My list of favorite and helpful resources</BodyMain>
            <ReadOn text="Get The Kit" href="/ux-design-career-kit" />
          </Wrapper>{" "}
          <Wrapper></Wrapper>
          <Wrapper>
            <H2>Apps & Services</H2>
            <BodyMain>A list of my favorite tools</BodyMain>
            <ReadOn text="Apps & Services" href="/apps" />
          </Wrapper>{" "}
          <Wrapper></Wrapper>
          <Wrapper>
            <H2>What I Use</H2>
            <BodyMain>Walkthrough of my desk setup & gears</BodyMain>
            <ReadOn text="What I Use" href="/setup" />
          </Wrapper>
        </Grid>
      </Boxed>
    </Layout>
  );
};

export default ResourcePage;
