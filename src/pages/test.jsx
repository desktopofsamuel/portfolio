import React from "react";
import Container from "components/utils/Wrapper";
import WorkList from "components/WorkList";
import IndexHeroOld from "../archive/IndexHeroOld";

const TestPage = () => {
  return (
    <Container>
      <IndexHeroOld />

      <WorkList />
    </Container>
  );
};

export default TestPage;
