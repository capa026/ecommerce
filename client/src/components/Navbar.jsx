import styled from "@emotion/styled";
import { useLocation, useNavigate, Link as L } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Box,
  Stack,
  Typography,
  Link,
  Container,
  Divider,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  AccountCircle,
  LibraryAdd,
  Login,
  Logout,
  MenuOpen,
  MenuOutlined,
  Settings,
  Store,
} from "@mui/icons-material";
import SearchBar from "./SearchBar";
import LinkComponent from "./LinkComponent";
import { useState } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut, isAuthenticated } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  const handleLogout = () => {
    console.log("logout");
    logOut();
    navigate("/");
  };
  addEventListener("resize", () => {
    if (open) handleClose();
  });

  return (
    <Stack
      bgcolor="#39393a"
      color="white"
      p="0.5rem 0"
      boxShadow="0 5px 15px -5px black"
      mb="1rem"
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <LinkComponent to="/">
            <Store />
            eCOMMERCe
          </LinkComponent>

          <SearchBar />
          <Box>
            {isAuthenticated ? (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <LinkComponent to="/profile">
                  <AccountCircle /> {user.name}
                </LinkComponent>
                <Box
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  <Button
                    id="fade-button"
                    onClick={handleClick}
                    sx={{ minWidth: "0" }}
                  >
                    <Settings htmlColor="white" />
                  </Button>
                  <Menu
                    id="fade-menu"
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    PaperProps={{ sx: { background: "#FF4000" } }}
                    // anchorOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                    // transformOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Box
                        sx={{ color: "#39393A !important" }}
                        onClick={handleLogout}
                      >
                        <Logout /> Logout
                      </Box>
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            ) : (
              <>
                <Stack
                  direction="row"
                  gap="1rem"
                  alignItems="center"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
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

                <Box
                  sx={{
                    display: { xs: "block", sm: "none" },
                    overflow: "hidden",
                  }}
                >
                  <Button
                    id="fade-button"
                    onClick={handleClick}
                    sx={{ minWidth: "0" }}
                  >
                    <MenuOutlined htmlColor="white" />
                  </Button>
                  <Menu
                    id="fade-menu"
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    PaperProps={{ sx: { background: "#FF4000" } }}
                    // anchorOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                    // transformOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                  >
                    <MenuItem onClick={handleClose}>
                      <LinkComponent
                        to="/login"
                        sx={{ color: "#39393A !important" }}
                      >
                        <Login /> Login
                      </LinkComponent>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <LinkComponent
                        to="/register"
                        sx={{ color: "#39393A !important" }}
                      >
                        <LibraryAdd /> Register
                      </LinkComponent>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            )}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Navbar;
