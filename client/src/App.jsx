import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login, Home, Profile, ProductPage } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import CreateProduct from "./routes/CreateProduct";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/navbar/Navbar";
import { theme } from "./Theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/products" element={<Box>Products</Box>} />
              <Route path="/addProduct" element={<CreateProduct />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
