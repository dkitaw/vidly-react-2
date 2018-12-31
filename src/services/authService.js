import http from "../services/httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/auth`;

export const login = async (email, password) => {
  return await http.post(apiEndpoint, { email, password });
};
