import React from "react";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";
import ScrollspyNav from "react-scrollspy-nav";

const Table = styled.aside`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  flex-direction: column;

  .is-current {
    color: red;
  }

  h6 {
    margin: 0;
  }
`;

export default function TableOfContent(props) {
  const { post } = props;
  let title = post.items.map(function(post) {
    return post["url"].substring(1);
  });

  return (
    <Table>
      <h6>Table of Content</h6>
      <Scrollspy items={title} currentClassName="is-current">
        {post.items.map(p => (
          <li key={p.url}>
            <a href={p.url}>{p.title}</a>
          </li>
        ))}
      </Scrollspy>
    </Table>
  );
}

{
  // <Table>
  //   <h6>Table of Content</h6>
  //   <ScrollspyNav
  //     scrollTargetIds={title}
  //     activeNavClass="is-active"
  //     offset={1000}
  //   >
  //     {post.items.map(p => (
  //       <li key={p.url}>
  //         <a href={p.url}>{p.title}</a>
  //       </li>
  //     ))}
  //   </ScrollspyNav>
  // </Table>
}
