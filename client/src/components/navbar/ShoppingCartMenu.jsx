import {
  Badge,
  Box,
  Button,
  CardMedia,
  Divider,
  IconButton,
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
      (product.quantity * product.product.price).toFixed(1)
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
      <Stack direction="row" justifyContent="center">
        {currentCart.products ? (
          <Typography
            variant="body1"
            color="primary"
            align="center"
            width="100%"
          >
            Cantidad de productos: <b>{currentCart.products.length}</b>
          </Typography>
        ) : (
          <Typography>Shopping Cart</Typography>
        )}
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
      </Stack>

      <Divider />

      {!currentCart.products ? (
        <Typography>No hay productos...</Typography>
      ) : (
        <>
          {currentCart?.products?.map((product, i) => (
            // Product
            <Stack
              key={i}
              direction="row"
              alignItems="center"
              borderBottom="1px solid rgba(0,0,0,0.2)"
              pb="0.3rem"
            >
              {/* Delete product */}
              <Box
                onClick={() => handleDelete("deleteOne", i)}
                sx={{ display: "grid", placeItems: "center" }}
              >
                <IconButton size="small">
                  <Clear fontSize="small" />
                </IconButton>
              </Box>

              {/* Product picture */}
              <Stack alignItems="center" flex={2}>
                <CardMedia
                  sx={{
                    width: "50px",
                    objectFit: "center",
                    borderRadius: "50%",
                    aspectRatio: "1 / 1",
                    boxShadow: 4,
                  }}
                  component="img"
                  image={product.product.image[0]}
                />
              </Stack>

              {/* Product Description */}
              <Stack flex={3} borderRight="1px solid rgba(0,0,0,0.3)" pl="5px">
                <Typography variant="body1">
                  <b>{product.product.name}</b>
                </Typography>
                <Typography variant="body2" color="primary.lighter">
                  {product.product.price}$
                </Typography>
              </Stack>

              {/* Increase, Decrease Product */}
              <Stack alignItems="center" justifyContent="center" flex={2}>
                <Typography variant="subtitle1" color="primary.light">
                  <b>
                    {(product.quantity * product.product.price).toFixed(2)}$
                  </b>
                </Typography>
                <Typography>{product.quantity}</Typography>
              </Stack>
            </Stack>
          ))}
        </>
      )}
      {currentCart.products && (
        <Button
          variant="contained"
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            m: "0.5rem",
          }}
        >
          <Box fontWeight="bold">${totalValueOfCart}</Box>
          <Box fontWeight="100">- Comprar</Box>
        </Button>
      )}
    </Stack>
  );
};
