import axios from "./axios.js";

export const registerRequest = (user) => axios.post("/register", user);
export const loginRequest = (user) => axios.post("/login", user);
export const getLogin = () => axios.get("/login");
export const verifyToken = () => axios.get("/verify");
export const logout = () => axios.post("/logout");
