import React from "react";
import styled from "styled-components";
import ReadOn from "../elements/ReadOn";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
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
{
  /* <ProjectBox
                img={PinSVG}
                title="Pins"
                blurb="Curated design resource site coded by myself using GatsbyJS."
                year="2018"
                url="https://pins.desktopofsamuel.com"
              /> */
}
{
  /* <ProjectBox
                  img={DocuSVG}
                  title="Road Not Taken"
                  blurb="A documentary I directed with multiple Asian film festival selected."
                  year="2016"
                  url="https://vimeo.com/ondemand/roadnottaken"
                /> */
}
{
  /* <ProjectBox
                img={PingspaceSVG}
                title="Pingspace"
                blurb="Websites uptime monitor as a personal project"
                year="2018"
                url="https://pingspace.webflow.io/"
              />
              <ProjectBox
                img={WaterSVG}
                title="CDC Connects"
                blurb="Goals Tracking for Children With Special Educational Needs"
                year="2019"
                url="https://www.cdchk.org/news/cdc-app-launch/"
              />
              <ProjectBox
                img={PlayaSVG}
                title="Playa"
                blurb="Revamped portfolio and landing page of my agency"
                year="2018"
                url="https://playa.hk/portfolio.html"
              />
              <ProjectBox
                img={WaterSVG}
                title="New Asia Institue"
                blurb="Chinese Cultural Courses & Events"
                year="2017"
                url="https://newasia.org.hk/"
              />
              <ProjectBox
                img={BookSVG}
                title="Creation Cabin"
                blurb="Online novel platform supported by an independent publisher"
                year="2017"
                url="https://playa.hk/projects/creation-cabin-reading-platform.html"
              /> */
}
