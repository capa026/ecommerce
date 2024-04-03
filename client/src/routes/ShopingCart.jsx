import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useProducts } from "../context/ProductsContext";
import { DeleteForever, ShoppingBagOutlined } from "@mui/icons-material";
import { useEffect } from "react";

const ShopingCart = () => {
  const { currentCart, updateCart, trigger, deleteCart } = useProducts();

  if (!currentCart) return "Loading...";

  let totalValueOfCart = 0;
  currentCart?.products?.forEach((product) => {
    totalValueOfCart += parseFloat(
      (product.quantity * product.product.price).toFixed(2)
    );
  });

  const handleDelete = (action, product) => {
    if (action == "deleteOne") {
      const deleted = currentCart.products.toSpliced(product, 1);

      if (deleted.length == 0) {
        deleteCart();
      } else updateCart({ products: deleted });
    } else if (action == "deleteAll") {
      deleteCart();
    }
  };

  return (
    <Card gap={3} sx={{ padding: "1rem" }}>
      {!currentCart.products ? (
        <Typography variant="h5" color="text.secondary" textAlign="center">
          No tienes productos en el carrito...
        </Typography>
      ) : (
        <>
          <Stack gap="10px">
            <Button
              color="error"
              size="small"
              endIcon={<DeleteForever />}
              onClick={() => handleDelete("deleteAll")}
              sx={{ ml: "auto", width: "content-width" }}
            >
              Eliminar Carrito
            </Button>
            {currentCart?.products?.map((product, i) => (
              <Stack
                key={i}
                direction="row"
                borderBottom="1px solid black"
                position="relative"
                border="1px solid black"
              >
                <Stack alignItems="center" gap="10px" flex={2}>
                  <CardMedia
                    sx={{
                      width: "150px",
                      height: "150px",
                      objectFit: "center",
                      borderRadius: "50%",
                    }}
                    component="img"
                    image={product.product.image[0]}
                  />
                  <Typography>{product.product.name}</Typography>
                </Stack>

                <Stack
                  flex={3}
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="red"
                >
                  <Typography>{product.product.price}$</Typography>
                  <Typography>
                    Total:{" "}
                    {(product.quantity * product.product.price).toFixed(2)}$
                  </Typography>
                </Stack>

                <Stack
                  alignItems="center"
                  justifyContent="center"
                  flex={2}
                  direction="row"
                >
                  <Typography>{product.quantity}</Typography>
                  <Button
                    color="error"
                    size="small"
                    onClick={() => handleDelete("deleteOne", i)}
                  >
                    <DeleteForever />
                  </Button>
                </Stack>
              </Stack>
            ))}
          </Stack>

          <Stack width="50%" m="auto" alignItems="center">
            <Typography>
              Total de compra: {totalValueOfCart.toFixed(2)}$
            </Typography>
            <Button
              variant="contained"
              sx={{ width: "content-width" }}
              startIcon={<ShoppingBagOutlined />}
            >
              Comprar
            </Button>
          </Stack>
        </>
      )}
    </Card>
  );
};
export default ShopingCart;
