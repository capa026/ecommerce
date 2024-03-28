import { Stack } from "@mui/material";
import Product from "../components/Product";
import { useProducts } from "../context/ProductsContext";
import { useEffect } from "react";

const Home = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  if (!products) return "Loading...";

  return (
    <Stack
      gap="1rem"
      m="auto"
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {products.map((p, i) => (
        <Product product={p} key={i} />
      ))}
    </Stack>
  );
};
export default Home;
