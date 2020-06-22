import React from "react";
import styled from "styled-components";
import Link from "components/common/GatsbyLink";
import kebabCase from "lodash/kebabCase";

const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  margin: 0 1rem 0.5rem 0;
  transition: var(--transition);
  a {
    border-bottom: none;
  }

  color: var(--color-primary);
  font-size: var(--font-size-xs);

  span {
    opacity: 0.5;
    margin-right: 4px;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);

    a {
      border-bottom: none;
    }
  }
`;

const Tag = ({ children, className, index, tag }) => (
  <Wrapper>
    <Link key={index} className={className} to={`/tags/${kebabCase(tag)}`}>
      <span>#</span>
      {children}
    </Link>
  </Wrapper>
);

export default Tag;
