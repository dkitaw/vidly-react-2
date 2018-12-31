import http from "../services/httpService";
import config from "../config.json";

export const getMovies = async () => {
  const { data: movies } = await http.get(`${config.apiEndpoint}/movies`);
  return movies;
};

export const deleteMovie = async movieId => {
  const { data: movie } = await http.delete(
    `${config.apiEndpoint}/movies/${movieId}`
  );
  return movie;
};
