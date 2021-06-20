import React from "react";
import styled from "styled-components";
import Link from "components/common/GatsbyLink";
import kebabCase from "lodash.kebabcase";
import { BodySecondary } from "components/common/TextStyles";

const TagText = styled(BodySecondary)`
  display: inline;
`;

const StyledLink = styled(Link)`
  flex-direction: column;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--color-secondary-light-100);
  border-radius: var(--border-radius);
  margin: 0 1rem 0.5rem 0;
  transition: var(--transition);

  span {
    opacity: 0.5;
    margin-right: 4px;
  }

  &:hover {
    background: var(--color-primary-light-500);
    border: 1px solid var(--color-transparent);

    span {
      color: var(--color-white-light-100);
    }

    ${TagText} {
      color: var(--color-white-light-100);
    }
  }
`;

type TagProps = {
  className?: string,
  tag: string,
};

const Tag: React.FC<TagProps> = ({ children, className, tag }) => (
  <StyledLink className={className} to={`/tags/${kebabCase(tag)}`}>
    <span>#</span>
    <TagText>{children}</TagText>
  </StyledLink>
);

export default Tag;
