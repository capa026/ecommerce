import axios from "./axios.js";

export const getProductsRequest = () => axios.get("/products/");
export const getProductRequest = (id) => axios.get(`/products/${id}`);
export const deleteProductRequest = (id) => axios.delete(`/products/${id}`);
export const updateProductRequest = (id) => axios.put(`/products/${id}`);

export const getCartRequest = () => axios.get("/cart");
export const createCartRequest = (data) => axios.post("/cart", data);
export const updateCartRequest = (products) => axios.put("/cart", products);
export const deleteCartRequest = () => axios.delete("/cart");
