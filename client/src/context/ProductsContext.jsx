import { createContext, useContext, useEffect, useState } from "react";
import {
  getProductsRequest,
  getProductRequest,
  createCartRequest,
  getCartRequest,
  updateCartRequest,
  deleteCartRequest,
} from "../api/products";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

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
  const [currentCart, setCurrentCart] = useState([]);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(true);

  const getCart = async () => {
    try {
      const res = await getCartRequest();
      setCurrentCart(res.data);
      setTrigger(!trigger);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const deleteCart = async () => {
    try {
      const res = await deleteCartRequest();
      setTrigger(!trigger);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };
  const createCart = async (data) => {
    try {
      const res = await createCartRequest(data);
      setCurrentCart(res.data);
      setTrigger(!trigger);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const updateCart = async (data) => {
    try {
      const res = await updateCartRequest(data);
      setCurrentCart(res.data);
      setTrigger(!trigger);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleCart = async (data) => {
    const { productToAdd, quantity, productsAmount } = data;

    let itemFinded = null;

    if (currentCart.products?.length > 0) {
      itemFinded = currentCart.products.find(
        (e) => e.product._id == productToAdd.product._id
      );
    }

    if (itemFinded) {
      const itemIndex = currentCart.products.findIndex(
        (e) => e.product._id == productToAdd.product._id
      );

      if (itemFinded.quantity < quantity) {
        itemFinded.quantity += productsAmount;

        if (itemFinded.quantity > quantity) itemFinded.quantity = quantity;
      }
      const newCart = currentCart.products.toSpliced(itemIndex, 1, itemFinded);

      await updateCart({ products: newCart });
    } else {
      if (currentCart.products?.length > 0) {
        const products = [...currentCart.products, productToAdd];
        await updateCart({ products });
      } else {
        await createCart({ products: productToAdd });
      }
    }
  };

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
      value={{
        products,
        getProducts,
        getProduct,
        currentProduct,
        createCart,
        handleCart,
        currentCart,
        getCart,
        error,
        trigger,
        updateCart,
        deleteCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
