import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";
import SkeletonLoading from "../components/SkeletonLoading";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";

const ProductPage = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const params = useParams();
  const { currentProduct, getProduct } = useProducts();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  const handleArrow = (action) => {
    if (action === "+") setProductsAmount(productsAmount + 1);
    if (action === "-" && productsAmount > 0)
      setProductsAmount(productsAmount - 1);
  };
  const handleAmountChange = (e) => {
    if (!isNaN(e.target.value)) return;
    setProductsAmount(e.target.value);
  };

  if (!currentProduct) return <SkeletonLoading />;

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

        <Typography>{productsAmount}</Typography>
      </Stack>
    </Card>
  );
};
export default ProductPage;
