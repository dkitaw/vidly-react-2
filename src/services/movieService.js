import http from "../services/httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/movies`;

export const getMovies = async () => {
  const { data: movies } = await http.get(apiEndpoint);
  return movies;
};

export const getMovie = async movieId => {
  const { data: movie } = await http.get(movieUrl(movieId));
  return movie;
};

export const saveMovie = async movie => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    const { data } = await http.put(movieUrl(movie._id), body);
    return data;
  }

  const { data } = await http.post(apiEndpoint, movie);
  return data;
};

export const deleteMovie = async movieId => {
  const { data: movie } = await http.delete(movieUrl(movieId));
  return movie;
};

const movieUrl = movieId => {
  return `${apiEndpoint}/${movieId}`;
};
