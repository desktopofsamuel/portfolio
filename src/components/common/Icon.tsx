import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "components/common/GatsbyLink";

const IconWrapper = styled(FontAwesomeIcon)`
  margin: 0.5rem 1rem 0 0;
  font-size: 18px;
  transition: var(--transition);
  &:hover {
    color: var(--color-secondary-light-500);
  }
`;

type IconProps = {
  to: string,
  icon: string,
  target: "_blank" | "_self",
  title: string,
};

const Icon = ({ to, icon, target, title }: IconProps) => {
  return (
    <Link to={to} target={target} className="noeffect">
      <IconWrapper icon={icon} title={title} />
    </Link>
  );
};

export default Icon;
