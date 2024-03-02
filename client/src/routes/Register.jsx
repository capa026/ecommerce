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
  Alert,
} from "@mui/material";
import {
  Groups2Outlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoBar from "../components/LogoBar";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <LogoBar />
      <Stack justifyContent="center" alignItems="center" height="90vh">
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
          onSubmit={onSubmit}
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
          {registerErrors.map((error, i) => (
            <Alert key={i} severity="error">
              {error}
            </Alert>
          ))}
          <TextField
            label="First Name"
            variant="filled"
            fullWidth
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Typography
              variant="span"
              sx={{ marginTop: "-15px", fontSize: "0.8rem", color: "red" }}
            >
              Name is required
            </Typography>
          )}
          <TextField
            label="Last name"
            variant="filled"
            fullWidth
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <Typography
              variant="span"
              sx={{ marginTop: "-15px", fontSize: "0.8rem", color: "red" }}
            >
              Last name is required
            </Typography>
          )}
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
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
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
          {/* <FormControl variant="filled" fullWidth>
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
        </FormControl> */}
          <TextField
            label="Phone number"
            variant="filled"
            fullWidth
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && (
            <Typography
              variant="span"
              sx={{ marginTop: "-15px", fontSize: "0.8rem", color: "red" }}
            >
              Phone number is required
            </Typography>
          )}
          <Button variant="outlined" type="submit">
            Register
          </Button>
          <hr />
          <Typography variant="h7" m={"auto"}>
            Already Registered?{" "}
            <NavLink to="/login">
              <L component="span">Login</L>
            </NavLink>
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
export default Register;
