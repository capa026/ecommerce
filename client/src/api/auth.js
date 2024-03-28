import axios from "./axios.js";

export const registerRequest = (user) => axios.post("/auth/register", user);
export const loginRequest = (user) => axios.post("/auth/login", user);
export const getLogin = () => axios.get("/auth/login");
export const verifyToken = () => axios.get("/auth/verify");
export const logout = () => axios.post("/auth/logout");

export const createProduct = (product) => axios.post("/products/", product);
