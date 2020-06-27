import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
  max-width: ${props =>
    (props.size === "large" && "var(--page-container-l)") ||
    (props.size === "medium" && "var(--page-container-m)") ||
    (props.size === "small" && "var(--page-container-s)") ||
    `var(--page-container-m)`};
  margin: 3rem auto;

  @media only screen and (max-width: 1024px) {
    width: 90vw;
    margin: 0 auto;
  }
  }
`;

const Boxed = ({ children, className, size }) => (
  <Grid size={size} className={className}>
    {children}
  </Grid>
);

export default Boxed;

Boxed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small", ""]),
};

Boxed.defaultProps = {
  className: "",
  size: "",
};
