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
import { AccountCircle, Logout } from "@mui/icons-material";
import styled from "@emotion/styled";

const CustomDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    backgroundColor: "#39393a",
  },
});
const ItemList = ({ text, icon, handler, toggleDrawer }) => {
  const handleClick = () => {
    handler();
    toggleDrawer(false);
  };
  return (
    <ListItem disablePadding onClick={handleClick} sx={{ color: "white" }}>
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const ItemListLink = ({ text, icon, to, toggleDrawer }) => {
  const handleClick = () => {
    toggleDrawer(false);
  };
  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
        <LinkComponent to={to} sx={{ color: "white !important" }}>
          {text}
        </LinkComponent>
      </ListItemButton>
    </ListItem>
  );
};

const NavbarDrawrMenu = ({ open, toggleDrawer, handler }) => {
  return (
    <CustomDrawer
      open={open}
      onClose={() => toggleDrawer(false)}
      anchor="right"
      sx={{}}
    >
      <Box width={250}>
        <List>
          <ItemListLink
            text="Your Products"
            to="/products"
            icon={<AccountCircle />}
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
