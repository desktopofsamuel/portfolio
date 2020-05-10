import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
  max-width: ${props =>
    (props.size === "large" && "var(--page-container-l)") ||
    (props.size === "medium" && "var(--page-container-m)") ||
    (props.size === "small" && "var(--page-container-s)") ||
    `var(--page-container-m)`};
  padding: 0 1rem;
  margin: 3rem auto;

  @media only screen and (max-width: 1024px) {
    margin: 1rem auto;
    padding: 0;
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
