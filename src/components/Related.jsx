import React from "react";
import styled from "styled-components";
import Boxed from "../elements/Boxed";
import Link from "./common/GatsbyLink";

const Container = styled.section`
  margin-top: var(--var-padding-l);
  background-color: #fff;
`;

const Wrapper = styled(Boxed)`
  padding: var(--padding-m) 0;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin-top: var(--var-padding-s);
  }
`;

const Related = ({ node }) => {
  return (
    <Container className="full-bleed">
      <Wrapper size="small">
        <small>Read Next</small>
        <Link to={node.path}>
          <h3>
            <a>{node.title}</a>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Related;
