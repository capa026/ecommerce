import {
  Badge,
  Box,
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import LinkComponent from "../LinkComponent";
import { Clear, DeleteForever, ShoppingCart } from "@mui/icons-material";
import { locateColor } from "../../Theme";
import { useProducts } from "../../context/ProductsContext";

export const ShoppingCartMenu = ({ closeMenu }) => {
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
    <Stack
      sx={{
        width: "300px",
        padding: "5px",
        background: locateColor("bg"),
        borderRadius: "0 0 4px 4px",
        boxShadow: "0 0 10px 1px rgba(0,0,0,0.5)",
        gap: "5px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          ml: "auto",
          bgcolor: "primary.main",
          borderRadius: "4px",
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={closeMenu}
      >
        <Clear sx={{ color: "bg.main" }} />
      </Box>

      <Divider />

      {!currentCart.products ? (
        <Typography>No hay productos...</Typography>
      ) : (
        <>
          {currentCart?.products?.map((product, i) => (
            <Stack
              key={i}
              direction="row"
              position="relative"
              alignItems="center"
            >
              <Box
                onClick={() => handleDelete("deleteOne", i)}
                sx={{ display: "grid", placeItems: "center" }}
              >
                <Clear />
              </Box>
              <Stack alignItems="center" flex={2}>
                <CardMedia
                  sx={{
                    width: "50px",
                    objectFit: "center",
                    borderRadius: "50%",
                    aspectRatio: "1 / 1",
                  }}
                  component="img"
                  image={product.product.image[0]}
                />
              </Stack>

              <Stack
                flex={3}
                alignItems="center"
                justifyContent="center"
                bgcolor="red"
              >
                <Typography>{product.product.name}</Typography>
                <Typography>{product.product.price}$</Typography>
                <Typography>
                  Total: {(product.quantity * product.product.price).toFixed(2)}
                  $
                </Typography>
              </Stack>

              <Stack
                alignItems="center"
                justifyContent="center"
                flex={2}
                direction="row"
              >
                <Typography>{product.quantity}</Typography>
              </Stack>
            </Stack>
          ))}
        </>
      )}
    </Stack>
  );
};
