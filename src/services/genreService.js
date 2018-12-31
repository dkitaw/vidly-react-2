import http from "../services/httpService";
import config from "../config.json";

export const getGenres = async () => {
  const { data: genres } = await http.get(`${config.apiEndpoint}/genres`);
  return genres;
};
