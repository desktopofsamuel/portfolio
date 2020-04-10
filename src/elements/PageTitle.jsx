import React from "react";
import styled from "styled-components";

const PageTitleWrapper = styled.div`
  margin-top: var(--var-padding-m);
`;

const Subtitle = styled.small`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--color-secondary-500);
`;

const Title = styled.h1`
  font-family: var(--font-primary);
  margin: 0;
`;

class PageTitle extends React.Component {
  render() {
    const props = this.props;
    return (
      <PageTitleWrapper>
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </PageTitleWrapper>
    );
  }
}

export default PageTitle;
