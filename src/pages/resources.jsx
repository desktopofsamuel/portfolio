import React from "react";
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
  gap: var(--var-padding-m);
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled(H2)`
  margin: 0;
`;

const Wrapper = styled.div``;

const ResourcePage = () => {
  return (
    <Layout title="Tools & Resources" description="Hello">
      <Boxed>
        <PageTitle title="Tools & Resources" />
      </Boxed>
      <Boxed>
        <Grid>
          <Wrapper>
            <img src={Resource1} alt="Design Career Kit" />
          </Wrapper>
          <Wrapper>
            <Title>Design Career Kit</Title>
            <BodyMain>My list of favorite and helpful resources</BodyMain>
            <ReadOn text="Get The Kit" href="/ux-design-career-kit" />
          </Wrapper>
          <Wrapper>
            {" "}
            <img src={Resource1} alt="Design Career Kit" />
          </Wrapper>
          <Wrapper>
            <H2>Apps & Services</H2>
            <BodyMain>
              A shout out to all my favorite apps, tools, services, games and
              more.
            </BodyMain>
            <ReadOn text="Apps & Services" href="/apps" />
          </Wrapper>
          <Wrapper>
            {" "}
            <img src={Resource1} alt="Design Career Kit" />
          </Wrapper>
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
