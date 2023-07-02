import axios from "axios";
import store from "../store/index.js";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use((config) => {
  store.commit("setLoading", true);
  return config;
});

http.interceptors.response.use((response) => {
  store.commit("setLoading", false);
  return response;
});
export default http;
