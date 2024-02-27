import axios from "axios";

const API = "http://localhost:8000/api/auth";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
export const loginRequest = (user) => axios.post(`${API}/login`, user);
