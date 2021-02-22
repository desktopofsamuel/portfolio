import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "components/common/GatsbyLink";

const IconWrapper = styled(FontAwesomeIcon)`
  margin: 0.5rem 1rem 0 0;
  font-size: ${props => (props.size ? props.size : "18px")};
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
  size: string,
};

const Icon = ({ to, icon, target, title, size, ...props }: IconProps) => {
  return (
    <Link to={to} target={target} className="noeffect" {...props}>
      <IconWrapper icon={icon} title={title} size={size} />
    </Link>
  );
};

export default Icon;
