import React, { Component } from "react";
import _ from "lodash";
import styled from 'styled-components';
import { Link } from "gatsby";

const Tag = styled.button`
  background: #EDEDED;
  color: #A9A9A9;
  border: none;
  padding: 0.5em 1em;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background: #FFD644;
    color: #FFFFFF;
  }

  & h5 {
    margin: 0;
  }

  & a {
    border-bottom : none;
  }
`

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ border: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag><h5>{tag}</h5></Tag>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
