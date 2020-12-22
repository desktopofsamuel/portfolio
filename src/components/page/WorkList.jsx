import React from "react";
import styled from "styled-components";
import ReadOn from "../../elements/ReadOn";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Playa from "../../static/images/workshot/Playa.png";
import CDC from "../../static/images/workshot/CDC.png";
import TgtAtHomeClub from "../../static/images/workshot/TgtAtHomeClub.png";
import WaterForFree from "../../static/images/workshot/WaterForFree.png";
import Pingspace from "../../static/images/workshot/Pingspace.png";

const IconWrapper = styled.div`
  padding: var(--var-padding-m);
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Item = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: start; */
  padding: var(--padding-s);
  margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  max-width: 36ch;
`;

const Image = styled.img``;

const ListedItem = ({ title, description, url, role, year, image }) => (
  <Item key={title}>
    <Image src={image} alt={title} />
    <ItemTitle>{title}</ItemTitle>
    <small>{role}</small>
    <ItemText>{description}</ItemText>
    <ReadOn target="_blank" href={url} text="View Project" />
  </Item>
);

const WorkList = data => {
  return (
    <Carousel
      autoPlay={10000}
      animationSpeed={1000}
      infinite
      arrowLeft={
        <IconWrapper>
          <FaAngleLeft size="1.5em" />
        </IconWrapper>
      }
      arrowRight={
        <IconWrapper>
          <FaAngleRight size="1.5em" />
        </IconWrapper>
      }
      addArrowClickHandler
      breakpoints={{
        768: {
          slidesPerPage: 1,
          arrows: true,
        },
        1024: {
          slidesPerPage: 2,
          arrows: true,
        },
        2440: {
          slidesPerPage: 3,
          arrows: false,
        },
      }}
      slidesPerPage={3}
    >
      <ListedItem
        title="Together At Home"
        description="A collection of free and discounted resources during COVID-19 outbreak."
        url="https://tgtathome.club/"
        role="Creator"
        image={TgtAtHomeClub}
      />
      <ListedItem
        title="CDC Connects"
        description="App for Parents, School and Children to track goals for Children With Special Educational Needs"
        url="https://www.cdchk.org/news/cdc-app-launch/"
        year="2019"
        role="UI/UX Designer, Project Manager"
        image={CDC}
      />
      <ListedItem
        title="Pingspace"
        description="Landing page for SaaS side-project, an intelligent website uptime monitor"
        url="https://playa.hk/projects/pingspace.html"
        role="UI/UX Designer"
        image={Pingspace}
      />
      <ListedItem
        title="Playa"
        description="Homepage and Portfolio for the digital agency that I have co-founded"
        url="https://playa.hk/"
        role="Director, Design Lead"
        image={Playa}
      />
    </Carousel>
  );
};

export default WorkList;
