import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LinkComponent from "../LinkComponent";
import { AccountCircle, LocalShipping, Logout } from "@mui/icons-material";
import styled from "@emotion/styled";

const CustomDrawer = styled(Drawer)({
  display: { xs: "none !important", md: "flex !imortant" },
  "& .MuiDrawer-paper": {
    background:
      "linear-gradient(to right bottom, #23003b60, #25063b60, #270c3b60, #29123b60, #2b173b60, #29234d60, #20306060, #003e7160, #005b8d60, #00758b60, #008c6960, #069e2d60)",
    backdropFilter: "blur(8px)",
  },
});

const ItemList = ({ text, icon, handler, toggleDrawer }) => {
  const handleClick = () => {
    handler();
    toggleDrawer(false);
  };
  return (
    <LinkComponent
      to="#"
      sx={{ borderRadius: "0 !important", color: "white !important" }}
    >
      <ListItem disablePadding onClick={handleClick} sx={{ color: "white" }}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </LinkComponent>
  );
};

const ItemListLink = ({ text, icon, to, toggleDrawer }) => {
  const handleClick = () => {
    toggleDrawer(false);
  };
  return (
    <LinkComponent
      to={to}
      sx={{ borderRadius: "0 !important", color: "white !important" }}
    >
      <ListItem disablePadding onClick={handleClick}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
          {text}
        </ListItemButton>
      </ListItem>
    </LinkComponent>
  );
};

const NavbarDrawrMenu = ({ open, toggleDrawer, handler }) => {
  return (
    <CustomDrawer
      open={open}
      onClose={() => toggleDrawer(false)}
      anchor="right"
    >
      <Box width={250}>
        <List>
          <ItemListLink
            text="Perfil de usuario"
            to="/profile"
            icon={<AccountCircle />}
            toggleDrawer={toggleDrawer}
          />
          <ItemListLink
            text="Tus Productos"
            to="/products"
            icon={<LocalShipping />}
            toggleDrawer={toggleDrawer}
          />
          <Divider sx={{ borderColor: "white" }} variant="middle" />
          <ItemList
            text="Cerrar Sesion"
            icon={<Logout />}
            handler={handler.handleLogout}
            toggleDrawer={toggleDrawer}
          />
        </List>
      </Box>
    </CustomDrawer>
  );
};
export default NavbarDrawrMenu;
