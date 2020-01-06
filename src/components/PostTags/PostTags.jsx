import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";
import { Link } from "gatsby";

const Tag = styled.div`
  display: inline-block;
  text-transform: capitalize;
  background: #ededed;
  color: #a9a9a9;
  border: none;
  padding: 0.5em 1em;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--color-palette-500);
    color: #ffffff;
  }

  & h5 {
    margin: 0;
    font-weight: 600;
  }

  & a {
    border-bottom: none;
  }
`;

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
              <Tag>
                <h5>{tag}</h5>
              </Tag>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
