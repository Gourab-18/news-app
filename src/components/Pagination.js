import React, { useContext } from "react";
import { NewsContext } from "../context";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Pagination = () => {
  const { API, loading, changePage, page, nbPages } = useContext(NewsContext);

  return (
    <>
      <Container>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => changePage("decrease")}
        >
          Prev
        </Button>
        <span>
          {page + 1} of {nbPages}{" "}
        </span>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={() => changePage("increase")}
        >
          Next
        </Button>
      </Container>
    </>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  > button {
    margin: 1rem;
  }
`;
