import http from "../services/httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/users`;

export const register = async user => {
  return await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
};
