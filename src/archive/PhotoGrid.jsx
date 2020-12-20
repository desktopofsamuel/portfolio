import React, { Component } from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Grid_Photo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Grid_Label = styled.div`
  text-align: center;
  color: var(--color-primary-shades-300);
`;

class PhotoGrid extends Component {
  render() {
    return (
      <Grid>
        <Grid_Photo>{this.props.children}</Grid_Photo>
        <Grid_Label>
          <small>{this.props.label}</small>
        </Grid_Label>
      </Grid>
    );
  }
}

export default PhotoGrid;
