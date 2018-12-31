import http from "../services/httpService";
import { apiURL } from "../config.json";

export const getMovies = async () => {
  const { data: movies } = await http.get(`${apiURL}/movies`);
  return movies;
};

export const deleteMovie = async movieId => {
  const { data: movie } = await http.delete(`${apiURL}/movies/${movieId}`);
  return movie;
};
