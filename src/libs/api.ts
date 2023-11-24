import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
});

export const setAuthToken = (token: string | null): void => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
