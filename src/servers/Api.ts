import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openbrewerydb.org",
  timeout: 5000,
});

export default api;
