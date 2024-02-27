import { Box, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login, Home } from "./routes";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Box>Products</Box>} />
            <Route path="/addProduct" element={<Box>Create Product</Box>} />
            <Route path="/products/:id" element={<Box>Update Product</Box>} />
            <Route path="/profile" element={<Box>Profile</Box>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
