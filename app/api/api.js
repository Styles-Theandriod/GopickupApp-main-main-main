import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
  baseURL: "http://192.168.0.255:5000/api/auth", // replace with your local IP
});

// attach token automatically
API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const forgotPassword = (data) => API.post("/forgot-password", data);
export const googleLogin = (data) => API.post("/google", data);
