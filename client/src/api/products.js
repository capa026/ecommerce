import axios from "./axios.js";

export const getProductsRequest = () => axios.get("/products/");
export const getProductRequest = (id) => axios.get(`/products/${id}`);
