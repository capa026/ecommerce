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
} from "@mui/material";
import { LibraryAdd, Login, Store } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import LinkComponent from "./LinkComponent";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();

  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  return (
    <Stack bgcolor="#39393a" color="white" p="0.5rem 0">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <LinkComponent>
            <Store />
            eCOMMERCe
          </LinkComponent>

          <SearchBar />
          <Box>
            {!isAuthenticated ? (
              <Stack direction="row" gap="1rem" alignItems="center">
                <LinkComponent to="/login">
                  {" "}
                  <Login /> Login
                </LinkComponent>
                <Divider
                  orientation="vertical"
                  sx={{ height: "20px", backgroundColor: "white" }}
                  variant="middle"
                />
                <LinkComponent to="/register">
                  {" "}
                  <LibraryAdd /> Register
                </LinkComponent>
              </Stack>
            ) : (
              <LinkComponent to="/profile">Carlos</LinkComponent>
            )}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Navbar;
