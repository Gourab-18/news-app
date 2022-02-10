import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <Container>
      <h1>Loading...</h1>;
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
  }
`;
