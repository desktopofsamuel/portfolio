import React from "react";
import styled from "styled-components";
import TableOfContent from "./TableOfContent";

const Container = styled.div`
  position: sticky;
  top: 3rem;
`;

const PostSidebar = ({ postToc }) => {
  return (
    <Container>
      {!!postToc.items && <TableOfContent post={postToc} />}
    </Container>
  );
};

export default PostSidebar;
