import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Block = styled.div`
  border-top: ${props =>
    props.noBorder ? "none" : "1px var(--color-white-500) solid"};
  padding-top: ${props => (props.noBorder ? "0" : "1rem")};
  display: ${props => props.haveGrid ? "grid" : "block"};
  grid-template-columns: 7fr 2fr;

`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--color-white-500);
  margin: 0;
`;

const Content = styled.p`
  color: var(--color-primary-shades-100);
  font-size: var(--font-size-s);
  line-height: auto;
  margin-top: ${props => (props.noBorder ? "0" : "1rem")};
`;

const Meta = styled.p`
  color: var(--color-primary-shades-100);
  opacity: 0.5;
  font-family: var(--font-primary);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--font-small-letter-spacing);
`;

const Image = styled.img`
justify-self: flex-end;
`

const ResumeItem = ({ title, content, meta, image, noBorder, haveGrid }) => {
  return (
    <Block noBorder={noBorder} haveGrid={haveGrid}>
    <div>
      <Title>{title}</Title>
      <Content noBorder={noBorder}>{content}</Content>
      <Meta>{meta}</Meta></div>
      {image.length > 0 && <Image src={image} alt={`${title} Logo`}/>}
    </Block>
  );
};

export default ResumeItem;

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  meta: PropTypes.string,
  image: PropTypes.string,
  noBorder: PropTypes.bool,
  haveGrid: PropTypes.bool,
}

ResumeItem.defaultProps = {
  content: "",
  meta: "",
  image: "",
  noBorder: false,
  haveGrid: false,
}