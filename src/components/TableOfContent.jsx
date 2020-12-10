import React from "react";
import styled from "styled-components";
// import Scrollspy from "react-scrollspy";
import ScrollspyNav from "react-scrollspy-nav";

const Table = styled.aside`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  flex-direction: column;

  .is-active {
    color: red;
  }

  h6 {
    margin: 0;
  }
`;

export default function TableOfContent(props) {
  const { post } = props;
  let title = post.items.map(function(post) {
    return post["title"];
  });

  return (
    <Table>
      <h6>Table of Content</h6>
      {/* <Scrollspy
        items={title}
        currentClassName="is-current"
        scrolledPastClassName="is-passed"
      >
       */}
      <ScrollspyNav scrollTargetIds={title} activeNavClass="is-active">
        <ul>
          {post.items.map(p => (
            <li key={p.url}>
              <a href={p.url}>{p.title}</a>
            </li>
          ))}
        </ul>
        {/* <li>
          <a href="#section-1">section 1</a>
        </li>
        <li>
          <a href="#section-2">section 2</a>
        </li>
        <li>
          <a href="#section-3">section 3</a>
        </li> */}
      </ScrollspyNav>
    </Table>
  );
}
