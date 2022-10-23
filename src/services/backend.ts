import axios from "axios";

export const backendService = axios.create({
  baseURL: "https://cloud.pxcx.com.br:5000",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});
