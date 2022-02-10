// import { getByTitle } from "@testing-library/react";
import React, { useContext } from "react";
import { NewsContext } from "../context";
import Loading from "./Loading";
import styled from "styled-components";
import { Button } from "@material-ui/core";
const News = () => {
  const { loading, hits, removeNews } = useContext(NewsContext);
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <>
      <OuterContainer>
        {hits.map((data) => {
          const { title, url, author, objectID, num_comments } = data;

          return (
            <Container>
              <article key={objectID}>
                {url && (
                  <>
                    <Block>
                      {console.log(data)}
                      <h1>{title}</h1>

                      <Span>
                        <span>Author:{author}</span>
                        <span>Comments: {num_comments}</span>
                      </Span>

                      <Buttons>
                        <a href={url} target="_blank" rel="noreferrer">
                          <Button variant="contained" color="primary">
                            Read
                          </Button>
                        </a>

                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeNews(objectID)}
                        >
                          Remove
                        </Button>
                      </Buttons>
                    </Block>
                  </>
                )}
              </article>
            </Container>
          );
        })}
      </OuterContainer>
    </>
  );
};

export default News;
const OuterContainer = styled.div`
  width: 80vw;
  /* centers everything */
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* height: 200%; */
  gap: 1rem;
`;
const Container = styled.div`
  width: 30vw;
  /* border: 2px solid red; */
  background-color: white;
  padding: 0.5rem;
`;

const Block = styled.div`
  /* border: 2px solid blue; */
  /* max-height: 100%; */
  > h1 {
    letter-spacing: 2px;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  > button {
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Span = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;

  text-transform: capitalize;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;

  > a {
    text-decoration: none;
  }
`;
