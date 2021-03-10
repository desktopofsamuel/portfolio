import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component";
import { SmallText } from "components/common/TextStyles";

const LoadableScroll = loadable(() => import("react-scrollspy"));

const Table = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-light-300);
  border-radius: 8px;
  padding: 1rem;
  transition: 0.5s all ease-in-out;

  .is-current {
    font-weight: var(--font-weight-bold);
  }

  h6 {
    margin: 0;
    font-size: var(--font-size-2xs);
  }

  li {
    font-size: var(--font-size-xs);
  }

  ul {
    padding: 0;
  }

  ul li::before {
    content: none;
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
      <SmallText>Table of Content</SmallText>
      <LoadableScroll items={title} currentClassName="is-current">
        {post.items.map(p => (
          <li key={p.url}>
            <a href={p.url}>{p.title}</a>
          </li>
        ))}
      </LoadableScroll>
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
