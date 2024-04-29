import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";
import SkeletonLoading from "../components/SkeletonLoading";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowCircleRight,
  ArrowCircleLeft,
  ShoppingCart,
  Shop,
  ShoppingCartOutlined,
  ShopOutlined,
  ShoppingBagOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import IncreaseDecreaseAmount from "../components/IncreaseDecreaseAmount";

const ProductPage = () => {
  const { currentProduct, getProduct, handleCart } = useProducts();
  const username = localStorage.getItem("username");
  const [productsAmount, setProductsAmount] = useState(1);

  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, [params.id]);

  if (!currentProduct) return <SkeletonLoading />;

  const handleSetCart = () => {
    const { _id, name, price, image, quantity } = currentProduct;

    const productToAdd = {
      product: { _id, name, price, image },
      quantity: productsAmount,
    };

    handleCart({ productToAdd, quantity, productsAmount });
  };

  return (
    <Card sx={{ display: "flex", flexWrap: "wrap" }} elevation={6}>
      <CardMedia
        sx={{ flex: 2, height: "300px", objectFit: "center" }}
        component="img"
        image={currentProduct.image[0]}
      />
      <Divider orientation="vertical" variant="middle" flexItem />
      <Stack flex={1}>
        <CardContent>
          <Typography variant="h5">{currentProduct.name}</Typography>
          <Divider>Cantidad disponible: {currentProduct.quantity}</Divider>
          <Typography>{currentProduct.price}$</Typography>
        </CardContent>

        <IncreaseDecreaseAmount
          currentProduct={currentProduct}
          productsAmount={productsAmount}
          setProductsAmount={setProductsAmount}
        />

        {!username ? (
          <Stack alignItems="center" mt="10px" gap="10px">
            <Button
              component={Link}
              variant="contained"
              sx={{ width: "content-width" }}
              startIcon={<LoginOutlined />}
              to="/login"
            >
              Login
            </Button>
          </Stack>
        ) : (
          <Stack alignItems="center" mt="10px" gap="10px">
            <Button
              variant="contained"
              sx={{ width: "content-width" }}
              startIcon={<ShoppingBagOutlined />}
            >
              Comprar
            </Button>
            <Button
              variant="contained"
              sx={{ width: "content-width" }}
              startIcon={<ShoppingCartOutlined />}
              size="small"
              onClick={handleSetCart}
            >
              Añadir al carrito
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
export default ProductPage;
