import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
`

class PostWithHero extends Component {
    render() {
      return (
        <Hero>
          <h1>Title</h1>
          
        </Hero>
      )
    }
  }
export default PostWithHero;