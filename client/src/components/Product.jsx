import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Favorite, LocalShipping, Share } from "@mui/icons-material";
import { useProducts } from "../context/ProductsContext";
import { locateColor } from "../Theme";

const Product = ({ product }) => {
  const { getProduct } = useProducts();
  const { _id, name, categories, description, price, quantity, image } =
    product;

  const handleClick = () => {
    getProduct(_id);
  };

  return (
    <Card sx={{ width: { xs: "150px", md: "200px" } }} elevation={4}>
      <Box
        onClick={handleClick}
        sx={{
          position: "relative",
          cursor: "pointer",
          "&:hover": {
            "& .hoverable": {
              background: locateColor("primaryGradient.transparent"),
              left: "0",
              top: "0",
            },
          },
        }}
      >
        <Box
          className="hoverable"
          position="absolute"
          width="100%"
          height="100%"
          zIndex={10}
          sx={{
            left: "-200px",
            top: "-140px",
            opacity: "0.5",
            transition: ".2s ease",
            background: "transparent",
          }}
        ></Box>
        <CardMedia sx={{ height: 140 }} image={image[0]} title={name} />
        <CardContent>
          <Typography fontSize="0.9rem" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="h6" fontSize="1.2rem">
            {price}$
          </Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Typography
          color="green"
          fontSize={{ xs: "0.6rem", md: "0.8rem" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <LocalShipping fontSize="small" />
          Envio Gratis!
        </Typography>
        {/* <IconButton aria-label="share">
          <Share />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};
export default Product;
