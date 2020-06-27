import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitleWrapper = styled.div`
  margin: 0;
`;

const Subtitle = styled.small`
  margin: 0;
  color: var(--color-text-secondary);
`;

const Title = styled.h1`
  font-family: var(--font-primary);
  color: var(--color-title);
  margin: 0;
`;

const PageTitle = ({ subtitle, title, description }) => {
  return (
    <PageTitleWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <p>{description}</p>
    </PageTitleWrapper>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

PageTitle.defaultProps = {
  subtitle: "",
  description: "",
};
