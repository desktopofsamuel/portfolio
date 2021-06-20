import React from "react";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import { StaticImage } from "gatsby-plugin-image";
import { H2, BodyMain } from "components/common/TextStyles";
import ReadOn from "components/ReadOn";
import Link from "components/common/GatsbyLink";
import Column from "components/utils/Column";
import Layout from "../layout";

const Grid = styled(Column)`
  gap: var(--var-padding-m);
  align-items: center;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const StyledTitle = styled(H2)``;

const StyledMain = styled(BodyMain)`
  color: var(--color-text-secondary);
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
            <Link
              to="/navigating-design-career-with-design-okrs/"
              className="noeffect"
            >
              <StaticImage
                src="../../content/blog/2021-03-09 Design OKR/20210309-DesignOKR.png"
                alt="Design OKR Template"
                placeholder="blurred"
              />
            </Link>
          </Wrapper>
          <Wrapper>
            <StyledTitle>Design OKR</StyledTitle>
            <StyledMain>
              OKR template to get you started to progress your design career!
              With actionable objectives and key results.
            </StyledMain>
            <ReadOn
              text="Read How To Use"
              href="/navigating-design-career-with-design-okrs/"
            />
          </Wrapper>
          <Wrapper>
            <Link to="/ux-design-career-kit/" className="noeffect">
              <StaticImage
                src="../../static/images/20210310-UXDesignCareerKit.png"
                alt="UX Design Career Kit"
                placeholder="blurred"
              />
            </Link>
          </Wrapper>
          <Wrapper>
            <StyledTitle>UX Design Career Kit</StyledTitle>
            <StyledMain>
              My list of favorite and helpful resources for job hunting. Helpful
              tips from Twitter's design leaders are included!
            </StyledMain>
            <ReadOn text="Get The Kit" href="/ux-design-career-kit/" />
          </Wrapper>
          <Wrapper>
            <Link to="/uses/" className="noeffect">
              <StaticImage
                src="../../static/images/20210310-whatiuse.png"
                alt="What I Use"
                placeholder="blurred"
              />
            </Link>
          </Wrapper>
          <Wrapper>
            <StyledTitle>What I Use</StyledTitle>
            <StyledMain>Walkthrough of my hardware & software setup</StyledMain>
            <ReadOn text="What I Use" href="/uses/" />
          </Wrapper>
        </Grid>
      </Boxed>
    </Layout>
  );
};

export default ResourcePage;
