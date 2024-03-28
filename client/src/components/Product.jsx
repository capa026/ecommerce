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
import { Favorite, Share } from "@mui/icons-material";
import { useProducts } from "../context/ProductsContext";

const Product = ({ product }) => {
  const { getProduct } = useProducts();
  const { _id, name, categories, description, price, quantity, image } =
    product;

  const handleClick = () => {
    getProduct(_id);
  };

  return (
    <Card sx={{ width: "300px" }} elevation={4}>
      <Box
        onClick={handleClick}
        sx={{
          position: "relative",
          cursor: "pointer",
          "&:hover": {
            "& .hoverable": {
              background:
                "linear-gradient(162deg, rgba(129,129,129,1) 0%, rgba(0,0,0,3) 71%)",
              left: "0",
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
            left: "-100px",
            opacity: "0.5",
            transition: ".3s",
          }}
        ></Box>
        <CardMedia sx={{ height: 140 }} image={image[0]} title="green iguana" />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
          >
            {name}
          </Typography>
          <Typography variant="h6">{price}$</Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Typography color="green">Free Shipping!</Typography>
        {/* <IconButton aria-label="share">
          <Share />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};
export default Product;
