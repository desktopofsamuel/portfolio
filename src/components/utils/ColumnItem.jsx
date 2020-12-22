import React from "react";
import styled from "styled-components";

const Column = styled.div`
  grid-column: ${props => props.span};
`;

const ColumnItem = ({ children, className, span }) => {
  return (
    <>
      <Column className={className} style={{ gridColumn: `${span}` }}>
        {children}
      </Column>
    </>
  );
};

export default ColumnItem;
