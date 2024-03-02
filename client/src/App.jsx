import { Box, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login, Home, Profile } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import CreateProduct from "./routes/CreateProduct";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/products" element={<Box>Products</Box>} />
              <Route path="/addProduct" element={<CreateProduct />} />
              <Route path="/products/:id" element={<CreateProduct />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
