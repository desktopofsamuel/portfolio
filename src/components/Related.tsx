import React from "react";
import styled from "styled-components";
import Boxed from "./utils/Boxed";
import Link from "./common/GatsbyLink";

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

  h3 {
    margin-top: var(--var-padding-s);
  }

  p {
    margin: 0;
  }
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
        <small>Read Next</small>
        <h3>
          <Link to={node.path}>{node.title}</Link>
        </h3>
        <p>{node.excerpt}</p>
      </Wrapper>
    </Container>
  );
};

export default Related;
