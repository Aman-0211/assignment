import fetch from "isomorphic-unfetch";

export const getMovies = (value) => {
  return fetch(`http://www.omdbapi.com/?s=${value}&apikey=e6d61984`);
};
