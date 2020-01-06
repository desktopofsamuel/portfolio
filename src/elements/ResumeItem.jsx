import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Block = styled.div`
  border-top: 1px var(--color-white-500) solid;
  padding-top: 1rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: var(--color-white-500);
  margin-bottom: 0;
`;

const Content = styled.p`
  color: var(--color-secondary-100);
`;

const Meta = styled.p`
  color: var(--color-secondary-100);
  opacity: 0.5;
  font-family: var(--font-primary);
  letter-spacing: 0.025rem;
`;

class ResumeItem extends React.Component {
  render() {
    const props = this.props;
    return (
      <Block>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <Meta>{props.meta}</Meta>
      </Block>
    );
  }
}

export default ResumeItem;
