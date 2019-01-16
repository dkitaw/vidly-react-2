import http from "../services/httpService";

const apiEndpoint = "/users";

export const register = async user => {
  return await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
};
