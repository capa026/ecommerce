import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyToken,
  logout,
} from "../api/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signin = async (values) => {
    try {
      const res = await loginRequest(values);
      setUser(res.data);
      setIsAuthenticated(true);
      localStorage.setItem("username", res.data.name);
      navigate("/");
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logOut = async () => {
    setIsAuthenticated(false);
    setUser(null);
    setLoading(false);
    localStorage.removeItem("username");
    await logout();
  };

  const signup = async (values) => {
    try {
      const res = await registerRequest(values);
      setUser(res.data);
      setIsAuthenticated(true);
      navigate("/login");
    } catch (error) {
      setErrors(error.response.data);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      const username = localStorage.getItem("username");

      if (cookies.token) {
        try {
          const res = await verifyToken(cookies.token);

          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
          }

          if (username) {
            if (res.data.name !== username)
              localStorage.setItem("username", res.data.name);
          } else {
            localStorage.setItem("username", res.data.name);
          }

          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        logOut,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
