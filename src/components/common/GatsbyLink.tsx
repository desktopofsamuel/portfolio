import { Link as GatsbyLink } from "gatsby";
import React, { Component } from "react";
import "../../layout/index.css";

const ActiveLink = {
  fontWeight: 600,
};

type LinkProps = {
  children: React.ReactNode,
  to: string,
  activeClassName?: string,
  partiallyActive?: boolean,
  className?: string,
};

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  className,
  activeClassName,
  partiallyActive,
  ...other
}: LinkProps) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        activeStyle={ActiveLink}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} className={className} rel="noreferrer noopener" {...other}>
      {children}
    </a>
  );
};

export default Link;
