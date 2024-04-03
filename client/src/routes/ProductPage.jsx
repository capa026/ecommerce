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

const ProductPage = () => {
  const { currentProduct, getProduct, handleCart } = useProducts();
  const username = localStorage.getItem("username");
  const [productsAmount, setProductsAmount] = useState(1);
  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  const handleArrow = (action) => {
    if (action === "+" && productsAmount < currentProduct.quantity)
      setProductsAmount(productsAmount + 1);
    if (action === "-" && productsAmount > 1)
      setProductsAmount(productsAmount - 1);
  };

  const handleAmountChange = (e) => {
    if (isNaN(e.target.value)) return;
    setProductsAmount(
      parseInt(e.target.value) > currentProduct.quantity
        ? currentProduct.quantity
        : 1
    );
  };

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

        <Stack direction="row" justifyContent="center">
          <IconButton onClick={() => handleArrow("-")}>
            <ArrowCircleLeft sx={{ fontSize: "3rem" }} />
          </IconButton>

          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "100px" }}
            onChange={handleAmountChange}
            value={productsAmount}
            inputProps={{ sx: { textAlign: "center", fontSize: "1.3rem" } }}
          />

          <IconButton onClick={() => handleArrow("+")}>
            <ArrowCircleRight sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Stack>

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
