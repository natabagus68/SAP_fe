import axios from "axios";
import { config } from "../../common/utils";

const api = axios.create({
  baseURL: config.apibaseUrl,
});

api.interceptors.request.use(async (config) => {
  const auth = await JSON.parse(localStorage.getItem("aop-sap"));
  config.headers["Authorization"] = `jwt ${auth?.token}`;
  return config;
});

export { api };
