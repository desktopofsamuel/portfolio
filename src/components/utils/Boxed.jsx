import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
  max-width: ${props =>
    (props.size === "large" && "var(--page-container-l)") ||
    (props.size === "medium" && "var(--page-container-m)") ||
    (props.size === "small" && "var(--page-container-s)") ||
    `var(--page-container-m)`};
  padding: ${props => (props.padding ? props.padding : "0rem")};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isCenter ? "center" : "initial")};
  text-align: ${props => (props.isCenter ? "center" : "initial")};

  @media only screen and (max-width: 768px) {
    padding: ${props => (props.padding ? props.padding : "1rem")};
    margin: 0 auto;
  }
`;

const Boxed = ({ children, className, size, isCenter, padding }) => (
  <Grid size={size} className={className} isCenter={isCenter} padding={padding}>
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
  isCenter: PropTypes.bool,
  padding: PropTypes.string,
};

Boxed.defaultProps = {
  className: "",
  size: "",
  isCenter: false,
  padding: "",
};
