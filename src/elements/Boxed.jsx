import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  max-width: 600px;
  padding: 0 1rem;
  margin: 5rem auto;

  @media only screen and (max-width: 1024px) {
    margin: 2rem auto;
    padding: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

const Boxed = ({ children, className }) => (
  <Grid className={className}>{children}</Grid>
);

export default Boxed;
