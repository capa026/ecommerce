import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link as L } from "react-router-dom";

import LinkComponent from "../LinkComponent";
import SearchBar from "./SearchBar";

import { Badge, Divider, Stack } from "@mui/material";
import {
  AccountCircle,
  LibraryAdd,
  Login,
  Settings,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import NavbarDrawrMenu from "./NavbarDrawrMenu";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const { currentCart, getCart, trigger } = useProducts();
  const { isAuthenticated, logOut } = useAuth();

  useEffect(() => {
    getCart();
  }, [isAuthenticated, trigger]);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  //Don't show the navbar if the user is either login or register pages.
  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  return (
    <Stack
      bgcolor="#39393a"
      color="white"
      p="1rem 0"
      boxShadow="0 5px 15px -5px black"
      mb="1rem"
    >
      {/*First area of the navbar*/}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p="0 0.5rem"
      >
        <LinkComponent to="/">
          <Store />
          eCOMMERCe
        </LinkComponent>

        {username ? (
          <Stack direction="row" gap="5px">
            {/*If there is a user Logged in*/}
            <Badge
              badgeContent={currentCart?.products?.length || 0}
              color="primary"
            >
              <LinkComponent to="/cart">
                <ShoppingCart /> Cart
              </LinkComponent>
            </Badge>
            <LinkComponent to="/profile">
              <AccountCircle /> {username}
            </LinkComponent>

            <LinkComponent onClick={() => toggleDrawer(true)}>
              <Settings htmlColor="white" />
            </LinkComponent>
          </Stack>
        ) : (
          <Stack direction="row" gap="1rem" alignItems="center">
            {/*If there isn't a user*/}
            <LinkComponent to="/login">
              <Login /> Login
            </LinkComponent>
            <Divider
              orientation="vertical"
              sx={{ height: "20px", backgroundColor: "white" }}
              variant="middle"
            />
            <LinkComponent to="/register">
              <LibraryAdd /> Register
            </LinkComponent>
          </Stack>
        )}
      </Stack>

      {/*Second area of the navbar*/}
      <Stack
        mt="0.5rem"
        p="0 0.5rem"
        direction="row"
        gap="1rem"
        alignItems="center"
      >
        <NavbarMenu />
        <SearchBar />
      </Stack>

      <NavbarDrawrMenu
        open={open}
        toggleDrawer={toggleDrawer}
        handler={{ handleLogout }}
      />
    </Stack>
  );
};
export default Navbar;
