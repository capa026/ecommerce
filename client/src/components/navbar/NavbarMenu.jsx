import styled from "@emotion/styled";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const Item = styled(Box)({
  display: "flex",
  cursor: "pointer",
  userSelect: "none",
  transition: ".3s",
  padding: "0.3rem",
  borderRadius: "8px",
  fontSize: "0.7rem",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
});

const ItemComponent = ({ text }) => {
  return (
    <Item>
      {text} <KeyboardArrowDown fontSize="small" />
    </Item>
  );
};
const NavbarMenu = ({ sx }) => {
  return (
    <Stack direction="row" justifyContent="center" gap="1rem" sx={sx}>
      <ItemComponent text="Categorias " />
      <ItemComponent text="Destacados" />
      <ItemComponent text="Ofertas " />
      <ItemComponent text="Tiendas " />
    </Stack>
  );
};
export default NavbarMenu;
