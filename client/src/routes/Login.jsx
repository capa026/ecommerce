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
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Box
        onSubmit={onSubmit}
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
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Typography
            variant="span"
            sx={{ marginTop: "-15px", fontSize: "0.8rem", color: "red" }}
          >
            Email is required
          </Typography>
        )}
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
            {...register("password", { required: true })}
          />
        </FormControl>
        {errors.password && (
          <Typography
            variant="span"
            sx={{ marginTop: "-15px", fontSize: "0.8rem", color: "red" }}
          >
            Password is required
          </Typography>
        )}
        <Button type="submit" variant="outlined">
          Login
        </Button>
        <hr />
        <Typography variant="h7" m={"auto"}>
          Still without an account?{" "}
          <NavLink to="/register">
            <L component="span">Register</L>
          </NavLink>
        </Typography>
      </Box>
    </Stack>
  );
};
export default Login;
