import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Button,
  Typography,
  Link as L,
} from "@mui/material";
import { Visibility, VisibilityOff, LoginOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap="1rem"
        bgcolor="white"
        padding="1rem"
        borderRadius="8px"
        boxShadow="0 0 15px -3px black"
        width={{ xs: "80%", md: "40%" }}
      >
        <Stack
          fontSize="2rem"
          flexDirection="row"
          alignItems="center"
          gap="0.5rem"
        >
          <LoginOutlined fontSize="1rem" />
          Login
        </Stack>
        <TextField label="Email" variant="filled" fullWidth />
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="outlined">Login</Button>
        <hr />
        <Typography variant="h7" m={"auto"}>
          Still without and account?{" "}
          <Link to="/register">
            <L>Register</L>
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};
export default Login;
