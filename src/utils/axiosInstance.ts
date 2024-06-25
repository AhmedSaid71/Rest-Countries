import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_BASE_URL = import.meta.env.VITE_API_AUTH_BASE_URL;

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const AUTH_API = axios.create({
  baseURL: AUTH_BASE_URL,
  withCredentials: true,
});
