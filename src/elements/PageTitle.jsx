import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitleWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: var(--font-tertiary);
  color: var(--color-title);
  margin: 0;
`;

const Text = styled.p`
  color: var(--color-primary-shades-300);
  max-width: 40ch;
`;

const PageTitle = ({ title, description }) => {
  return (
    <PageTitleWrapper>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </PageTitleWrapper>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

PageTitle.defaultProps = {
  description: "",
};
