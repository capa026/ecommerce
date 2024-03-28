import { createContext, useContext, useEffect, useState } from "react";
import { getProductsRequest, getProductRequest } from "../api/products";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("Context must be within and ProductsProvider");
  return context;
};

export const ProductsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState();
  const [error, setError] = useState(null);

  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      setCurrentProduct(res.data);
      navigate(`/products/${res.data._id}`);
    } catch (error) {
      setError(error.response.data);
    }
  };
  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    const fillProducts = async () => {
      try {
        await getProducts();
      } catch (error) {
        setError(error.response.data);
      }
    };

    fillProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{ products, getProducts, getProduct, currentProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
