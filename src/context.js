import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
import { LOADING, GET_STORIES, REMOVE_STORIES, SEARCH, PAGES } from "./data";
// import { type } from "@testing-library/user-event/dist/type";
const NewsContext = React.createContext();

const NewsProvider = ({ children }) => {
  const API = "https://hn.algolia.com/api/v1/search?";
  const bhasa = "Bhala Pila";

  const initial = {
    loading: true,
    hits: [], // it will contain an array of news ,
    page: 0,
    nbPages: 50,
    // query for searching
    query: "sports",
  };
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initial);
  // fetching the API
  const fetchAPI = async (url) => {
    // during fetching i will load
    dispatch({ type: LOADING });
    // fetching using try catch
    try {
      const value = await fetch(url);

      const data = await value.json();
      console.log(data);

      //   After fetching data we will the stories, we will have to use dispatch again
      dispatch({
        type: GET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (e) {
      console.log("Error" + e);
    }
  };
  useEffect(() => {
    //   This is the final API
    const url = `${API}query=${state.query}&page=${state.page}`;
    fetchAPI(url);
  }, [state.query, state.page]);

  const removeNews = (objectID) => {
    // console.log(objectID);
    // Now as we have got the objectID, we will set up a dispatch function
    dispatch({ type: REMOVE_STORIES, payload: objectID });
  };

  const searchNews = (e) => {
    dispatch({ type: SEARCH, payload: { query: e.target.value } });
  };

  const changePage = (work) => {
    dispatch({ type: PAGES, payload: work });
  };
  return (
    //   note inside value, it should be an oject
    <NewsContext.Provider
      value={{ API, bhasa, ...state, removeNews, searchNews, changePage }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
