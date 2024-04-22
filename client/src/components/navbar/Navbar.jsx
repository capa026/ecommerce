import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link as L } from "react-router-dom";

import LinkComponent from "../LinkComponent";
import SearchBar from "./SearchBar";

import {
  Badge,
  Divider,
  Stack,
  Container,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  AccountCircle,
  LibraryAdd,
  Login,
  Menu as IconMenu,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import NavbarDrawrMenu from "./NavbarDrawrMenu";
import NavbarMenu from "./NavbarMenu";
import CustomizedAccordions from "./AccordionMenu";
import DropdownMenu from "../DropdownMenu";
import { locateColor } from "../../Theme";
import { ShoppingCartMenu } from "./ShoppingCartMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const location = useLocation();
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const { currentCart, getCart, trigger } = useProducts();
  const { isAuthenticated, logOut } = useAuth();

  useEffect(() => {
    getCart();
  }, [isAuthenticated, trigger]);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  addEventListener("resize", () => {
    handleCloseMenu();
  });

  //Don't show the navbar if the user is either login or register pages.
  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  return (
    <Stack
      color="white"
      p="0.5rem 0"
      boxShadow="0 5px 15px -5px black"
      mb="1rem"
      position="sticky"
      top={0}
      zIndex={100}
      sx={{
        background: locateColor("primaryGradient"),
      }}
    >
      <Container fixed>
        {/*First area of the navbar*/}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2rem"
        >
          <LinkComponent to="/">
            <Store fontSize="small" />
            eCOMMERCe
          </LinkComponent>

          <Box sx={{ width: "100%", display: { xs: "none", md: "flex" } }}>
            <SearchBar />
          </Box>
          {username ? (
            <Stack direction="row" gap="5px">
              {/*If there is a user Logged in*/}
              <DropdownMenu
                wBadge={true}
                text="Cart"
                currentCart={currentCart}
                placement="bottom"
              >
                <ShoppingCartMenu />
              </DropdownMenu>

              <LinkComponent to="#" onClick={() => toggleDrawer(true)}>
                <AccountCircle fontSize="small" /> {username}
              </LinkComponent>
            </Stack>
          ) : (
            <Stack direction="row" gap="1rem" alignItems="center">
              {/*If there isn't a user*/}
              <LinkComponent to="/login">
                <Login fontSize="small" /> Login
              </LinkComponent>
              <Divider
                orientation="vertical"
                sx={{ height: "20px", backgroundColor: "white" }}
                variant="middle"
              />
              <LinkComponent to="/register">
                <LibraryAdd fontSize="small" /> Register
              </LinkComponent>
            </Stack>
          )}
        </Stack>
        <Box
          sx={{ display: { xs: "flex", md: "none" } }}
          direction="row"
          gap="10px"
          mt="0.5rem"
        >
          <DropdownMenu isMenu={true}>
            <CustomizedAccordions />
          </DropdownMenu>
          <SearchBar />
        </Box>
        <Divider
          variant="middle"
          sx={{
            m: "0.5rem 0",
            borderColor: "rgba(255,255,255, 0.4)",
            display: { xs: "none", md: "block" },
          }}
        />
        {/*Second area of the navbar*/}
        <Stack
          mt="0.5rem"
          p="0 0.5rem"
          gap="0.5rem"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <NavbarMenu />
        </Stack>

        <NavbarDrawrMenu
          open={open}
          toggleDrawer={toggleDrawer}
          handler={{ handleLogout }}
        />
      </Container>
    </Stack>
  );
};
export default Navbar;
