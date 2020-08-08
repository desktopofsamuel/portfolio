import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "components/common/GatsbyLink";
import PropTypes from "prop-types";

const IconWrapper = styled(FontAwesomeIcon)`
  margin: 0.5rem 1rem 0 0;
  font-size: 18px;
  transition: var(--transition);
  &:hover {
    color: var(--color-primary);
  }
`;

const Icon = ({ to, icon, target, title }) => {
  return (
    <Link to={to} target={target} className="noeffect">
      <IconWrapper icon={icon} title={title}></IconWrapper>
    </Link>
  );
};

export default Icon;
