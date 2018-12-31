import http from "../services/httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/genres`;

export const getGenres = async () => {
  const { data: genres } = await http.get(apiEndpoint);
  return genres;
};
