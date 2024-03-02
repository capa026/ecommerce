import { Link as L } from "react-router-dom";
import { Link } from "@mui/material";
import styled from "@emotion/styled";

const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: "white",
  gap: "5px",
  textDecoration: "none",
}));

const LinkComponent = ({ children, sx, to }) => {
  return (
    <NavLink component={L} to={to} sx={sx}>
      {children}
    </NavLink>
  );
};
export default LinkComponent;
