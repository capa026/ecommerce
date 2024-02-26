import axios from "axios";

const API = "http://localhost:8000/api/auth/register";

export const registerRequest = (user) => axios.post(`${API}`, user);
