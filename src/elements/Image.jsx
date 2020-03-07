import React from "react";
import Zoom from "react-medium-image-zoom";
import styled from "styled-components";
import Img from "gatsby-image";
import "react-medium-image-zoom/dist/styles.css";

const StyledFigcaption = styled.figcaption`
  font-family: var(--font-primary);
  text-align: right;
  font-size: 0.8em;
  padding: 0.25em 0;
  color: var(--color-grey-500);
`;

const Image = ({ src, alt, caption, width }) => {
  const text = alt || caption;
  return (
    <Zoom>
      <figure>
        <img src={src} alt={text} />
        {text && <StyledFigcaption>{text}</StyledFigcaption>}
      </figure>
    </Zoom>
  );
};

export default Image;
