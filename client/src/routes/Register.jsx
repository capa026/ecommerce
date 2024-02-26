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
import {
  Groups2Outlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useForm();
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
          <Groups2Outlined fontSize="1rem" />
          Register
        </Stack>
        <TextField label="First Name" variant="filled" fullWidth />
        <TextField label="Last Name" variant="filled" fullWidth />
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
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">
            Confirm Password
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField label="Phone Number" variant="filled" fullWidth />
        <Button variant="outlined">Register</Button>
        <hr />
        <Typography variant="h7" m={"auto"}>
          Already Registered?{" "}
          <Link to="/login">
            <L>Sign in</L>
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};
export default Register;
