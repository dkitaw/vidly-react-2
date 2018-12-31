import http from "../services/httpService";
import { apiURL } from "../config.json";

export const getGenres = async () => {
  const { data: genres } = await http.get(`${apiURL}/genres`);
  return genres;
};
