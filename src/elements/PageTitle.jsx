import React from "react";
import styled from "styled-components";

const PageTitleWrapper = styled.section`
  margin-top: var(--var-padding-m);
`;

const PageDescriptionWrapper = styled.div`
  /*  width: 70ch;
  margin: 0 auto 2rem auto; */
`;

const Subtitle = styled.h2`
  font-family: var(--font-secondary);
  font-weight: 400;
  text-transform: uppercase;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.075rem;
  margin-top: 0;
  color: var(--color-secondary-500);
`;

const Title = styled.h1`
  font-family: var(--font-primary);
  font-size: var(--font-size-xxl);
  margin-bottom: 4rem;
`;

const Description = styled.p`
  font-size: var(--font-size-m);
  line-height: 170%;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

class PageTitle extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <PageTitleWrapper>
          <Subtitle>{props.subtitle}</Subtitle>
          <Title>{props.title}</Title>
        </PageTitleWrapper>
        <PageDescriptionWrapper>
          <Description>{props.description}</Description>
        </PageDescriptionWrapper>
      </div>
    );
  }
}

export default PageTitle;
