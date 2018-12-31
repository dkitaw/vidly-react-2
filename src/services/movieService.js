import http from "../services/httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/movies`;

export const getMovies = async () => {
  const { data: movies } = await http.get(apiEndpoint);
  return movies;
};

export const getMovie = async movieId => {
  const { data: movie } = await http.get(`${apiEndpoint}/${movieId}`);
  return movie;
};

export const saveMovie = async movie => {};

export const deleteMovie = async movieId => {
  const { data: movie } = await http.delete(`${apiEndpoint}/${movieId}`);
  return movie;
};
