import React from "react";
import styled from "styled-components";
import Boxed from "./utils/Boxed";
import Link from "./common/GatsbyLink";
import { H2, SmallText, BodyMain } from "./common/TextStyles";

const Container = styled.section`
  margin-top: var(--var-padding-l);
  background-color: var(--color-white-light-300);
`;

const Wrapper = styled(Boxed)`
  padding: var(--padding-l) var(--var-padding-m);
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled(H2)`
  margin-top: var(--var-padding-s);
`;
type RelatedProps = {
  node: {
    path: string,
    title: string,
    excerpt: string,
  },
};

const Related = ({ node }: RelatedProps) => {
  return (
    <Container className="full-bleed">
      <Wrapper size="small">
        <SmallText>Read Next</SmallText>
        <Title>
          <Link to={node.path}>{node.title} </Link>
        </Title>
        <BodyMain>{node.excerpt}</BodyMain>
      </Wrapper>
    </Container>
  );
};

export default Related;
