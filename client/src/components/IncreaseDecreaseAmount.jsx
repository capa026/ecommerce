/*
  I have to move here the logic that is in the product page to  make it global for both shopping cart and products page.
  The idea is to recieve a product and from there on perform the operations.
  Its important to receive the product to fetch it from the database and work properly in the shopping cart.
*/

/*
  I realized that the logic in the product page differs from the one in this component, because in the product page we have the product to compare the quantity of the products to be buyed
  and we are not getting here in any way the product to be compared with the ammount of proucts in the shopping cart.
*/

import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../context/ProductsContext";

const IncreaseDecreaseAmount = ({
  currentProduct,
  productsAmount,
  setProductsAmount,
}) => {
  const { currentProduct: cup, handleCart, getProduct } = useProducts();
  const [modifiedCurrentProduct, setModifiedCurrentProduct] =
    useState(currentProduct);
  const [currentAmount, setCurrentAmount] = useState(
    modifiedCurrentProduct.quantity
  );

  const handleSetCart = () => {
    const { _id, name, price, image } = modifiedCurrentProduct.product;
    const { quantity } = modifiedCurrentProduct;

    const productToAdd = {
      product: { _id, name, price, image },
      quantity: currentAmount,
    };

    console.log(productToAdd, cup);
    setModifiedCurrentProduct(productToAdd);
    handleCart({ productToAdd, quantity, productsAmount });
  };

  const handleArrow = (action) => {
    if (productsAmount) {
      if (action === "+" && productsAmount < currentProduct.quantity) {
        if (productsAmount) setProductsAmount(productsAmount + 1);
      }
      if (action === "-" && productsAmount > 1) {
        if (productsAmount) setProductsAmount(productsAmount - 1);
        return;
      }
    } else {
      if (action === "+" && currentAmount < modifiedCurrentProduct.quantity) {
        setCurrentAmount(currentAmount + 1);
      }
      if (action === "-" && productsAmount > 1) {
        setCurrentAmount(currentAmount - 1);
      }
      console.log(currentAmount, modifiedCurrentProduct.quantity);
      handleSetCart();
    }
  };

  const handleAmountChange = (e) => {
    if (isNaN(e.target.value)) return;
    if (productsAmount) {
      setProductsAmount(
        parseInt(e.target.value) > currentProduct.quantity
          ? currentProduct.quantity
          : 1
      );
    } else {
      setCurrentAmount(
        parseInt(e.target.value) > currentProduct.quantity
          ? currentProduct.quantity
          : 1
      );
    }
  };

  return (
    <Stack direction="row" justifyContent="center">
      <IconButton onClick={() => handleArrow("-")} size="small">
        <ArrowCircleLeft sx={{ fontSize: "3rem" }} />
      </IconButton>

      <TextField
        name="amount"
        variant="outlined"
        sx={{ width: "100px" }}
        onChange={handleAmountChange}
        value={productsAmount || currentAmount}
        inputProps={{ sx: { textAlign: "center", fontSize: "1.3rem" } }}
      />

      <IconButton onClick={() => handleArrow("+")} size="small">
        <ArrowCircleRight sx={{ fontSize: "3rem" }} />
      </IconButton>
    </Stack>
  );
};
export default IncreaseDecreaseAmount;
