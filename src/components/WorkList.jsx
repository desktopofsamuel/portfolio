import React from "react";
import styled from "styled-components";
import ReadOn from "../elements/ReadOn";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

const Item = styled.div`
  border: 1px var(--color-black-500) solid;
  padding: var(--padding-m);
  display: grid;
  grid-gap: 8px;
  margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  max-width: 36ch;
`;

const ListedItem = ({ title, description, url, role, year }) => (
  <Item>
    <ItemTitle>{title}</ItemTitle>
    <ItemText>{description}</ItemText>
    <ReadOn href={url} text="View Project" />
  </Item>
);

const WorkList = data => {
  return (
    <Container>
      <ListedItem
        title="Together At Home"
        description="A collection of free and discounted resources to keep you staying at home during COVID-19 outbreak."
        url="https://tgtathome.club/"
      />
      <ListedItem
        title="Creation Cabin"
        description="Creation Cabin is a independent publisher in Hong Kong. I have designed their online novel publishing platform."
        url="https://playa.hk/projects/creation-cabin-reading-platform.html"
        role="UI Designer, Project Manager"
      />
    </Container>
  );
};

export default WorkList;
