import { Link as L } from "react-router-dom";
import { Link } from "@mui/material";
import styled from "@emotion/styled";

const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: "white",
  gap: "2px",
  textDecoration: "none",
  transition: ".3s",
  padding: "0.3rem",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
}));

const LinkComponent = ({ children, sx, to }) => {
  return (
    <NavLink component={L} to={to} sx={sx}>
      {children}
    </NavLink>
  );
};
export default LinkComponent;
