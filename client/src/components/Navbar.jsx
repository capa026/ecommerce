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

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "#eca400",
    marginTop: "0.5rem",
    marginLeft: "1.1rem",
    borderRadius: 0,
  },
});
const Navbar = () => {
  const username = localStorage.getItem("username");

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut, isAuthenticated } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  addEventListener("resize", () => {
    if (open) handleClose();
    if (open2) handleClose2();
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
          <LinkComponent to="/" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            <Store />
            eCOMMERCe
          </LinkComponent>

          <SearchBar />
          <Box>
            {username ? (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <LinkComponent to="/profile">
                    <AccountCircle /> {username}
                  </LinkComponent>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
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
                    <CustomMenu
                      id="fade-menu"
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                    >
                      <MenuItem onClick={handleClose}>
                        <LinkComponent
                          to="/products"
                          sx={{ color: "white !important" }}
                        >
                          <AccountCircle /> Your Products
                        </LinkComponent>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Box
                          sx={{
                            display: "flex",
                            color: "white !important",
                            alignItems: "center",
                            gap: "5px",
                          }}
                          onClick={handleLogout}
                        >
                          <Logout /> Logout
                        </Box>
                      </MenuItem>
                    </CustomMenu>
                  </Box>
                </Stack>
                {/*  */}
                <Box
                  sx={{
                    display: { xs: "block", sm: "none" },
                    overflow: "hidden",
                  }}
                >
                  <Button
                    id="fade-button"
                    onClick={handleClick2}
                    sx={{ minWidth: "0" }}
                  >
                    <MenuOutlined htmlColor="white" />
                  </Button>
                  <CustomMenu
                    id="fade-menu"
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl2}
                  >
                    <MenuItem onClick={handleClose2}>
                      <LinkComponent
                        to="/profile"
                        sx={{ color: "white !important" }}
                      >
                        <AccountCircle /> {username}
                      </LinkComponent>
                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <LinkComponent
                        to="/products"
                        sx={{ color: "white !important", background: "red" }}
                      >
                        <AccountCircle /> Your Products
                      </LinkComponent>
                    </MenuItem>
                    <MenuItem
                      onClick={handleLogout}
                      sx={{
                        display: "flex",
                        color: "white !important",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Logout /> Logout
                    </MenuItem>
                  </CustomMenu>
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
                    PaperProps={{ sx: { background: "#eca400" } }}
                  >
                    <MenuItem onClick={handleClose}>
                      <LinkComponent
                        to="/login"
                        sx={{ color: "white !important" }}
                      >
                        <Login /> Login
                      </LinkComponent>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <LinkComponent
                        to="/register"
                        sx={{ color: "white !important" }}
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
