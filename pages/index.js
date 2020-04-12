import React, { useState, useEffect, useReducer } from "react";
import Layout from "../components/Layout";
import MoviList from "../components/MoviList";
import Header from "../components/header";
import { getMovies } from "../common/action/movie";
import {
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST,
  GET_MOVIES_LIST_FAILER,
} from "../common/action/constant";
import { reducer, initialState } from "../common/action/reducer/movies";

const Index = () => {
  const [value, setValue] = useState("batman");
  const [state, dispatch] = useReducer(reducer, initialState);

  function handelChange(value) {
    setValue(value);
  }
  async function fetchApi() {
    try {
      dispatch({
        type: GET_MOVIES_LIST_REQUEST,
      });

      const res = await getMovies(value);
      const data = await res.json();

      dispatch({
        type: GET_MOVIES_LIST,
        data,
      });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_LIST_FAILER,
      });
    }
  }

  const Loading = () => (
    <div className="row">
      <div className="spinner-grow text-primary text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  useEffect(() => {
    fetchApi();
  }, [value]);

  return (
    <Layout>
      <Header handelChangeValue={handelChange} />
      <div className="container-fluid">
        <h1 className="text-white text-center">Movies List</h1>
        <div className="row" style={{ height: "20%" }}>
          {state.isLoading ? (
            <Loading />
          ) : state.data ? (
            state.data.map((movie) => (
              <MoviList key={movie.imdbID} id={movie.imdbID} movie={movie} />
            ))
          ) : (
            <div className="container-fluid  align-center">
              <p className="text-white tect-center p-4"> No Movies found</p>
            </div>
          )}
        </div>
        <style>{`
    .card{
      position: block;
    }
    `}</style>
      </div>
    </Layout>
  );
};

export default Index;
