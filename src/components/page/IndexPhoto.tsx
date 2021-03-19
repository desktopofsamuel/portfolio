import React from "react";
import styled from "styled-components";
import IndexPhotoItem from "./IndexPhotoItem";
import IndexIntro from "components/page/IndexIntro";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2px;
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1980px;
    margin: 0 auto;
  }
`;

const PhotoIntroWrapper = styled.div`
  padding: 1rem;
  display: grid;
  place-content: center;

  @media only screen and (max-width: 768px) {
    grid-column: span 2;
  }
`;

const IndexPhoto = ({ photo1Edges, photo2Edges }) => {
  return (
    <PhotoGrid>
      <IndexPhotoItem postEdges={photo1Edges} />
      <PhotoIntroWrapper>
        <IndexIntro
          index="#04"
          title="Through the lens"
          description="Sets of photos according to cities that I have visited."
          label="More Photos"
          href="/photo/"
          noMargin
        />
      </PhotoIntroWrapper>
      <IndexPhotoItem postEdges={photo2Edges} />
    </PhotoGrid>
  );
};

export default IndexPhoto;
