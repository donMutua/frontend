import axios from "axios";
import Cookies from "js-cookie";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export const login = async (email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const response = await api.post("/login", {
      email,
      password,
    });
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    const { token } = response.data;

    Cookies.set("token", token);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchLaunches = async () => {
  const response = await api.get("/launches");
  return response.data;
};

export const getLaunch = async (id: string) => {
  if (id) {
    const response = await api.get(`/launches/5eb87cd9ffd86e000604b32a`);
    return response.data;
  }
};
