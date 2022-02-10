import React, { useContext } from "react";
import { NewsContext } from "../context";
import styled from "styled-components";
const Search = () => {
  const { query, searchNews } = useContext(NewsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <h1>Search My News</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={(e) => searchNews(e)} />
          <br />
          {/* <button type="submit">Submit</button> */}
        </form>
      </Container>
    </>
  );
};

export default Search;
const Container = styled.div`
  width: 90vw;
  > h1 {
    width: 50vw;
    margin: 0 auto;
    margin-top: 4rem;
    text-transform: uppercase;
  }
  > form {
    width: 50vw;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  > form > input {
    width: 100%;
    border: none;
    outline: none;
    max-width: 600px;
    background: transparent;
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 1rem;
    border-bottom: 2px solid black;
  }
  > form > input&:focus {
    border: 2px solid blue;
  }
`;
