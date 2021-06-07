import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layout";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import Link from "components/common/GatsbyLink";
import { H2, BodyMain } from "components/common/TextStyles";

const TodayPage = ({ data }) => {
  return (
    <Layout>
      <Boxed>
        <PageTitle title="Today"></PageTitle>
        <H2>Read</H2>
        <BodyMain>
          I am reading{" "}
          <Link to={data.feedReadng.link}>{data.feedReadng.title}</Link>{" "}
        </BodyMain>
      </Boxed>
    </Layout>
  );
};

export default TodayPage;

export const pageQuery = graphql`
  query TodayQuery {
    feedReadng {
      title
      link
      id
    }
  }
`;
