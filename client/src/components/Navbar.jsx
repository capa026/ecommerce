import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register")
    return;

  return <div>Navbar</div>;
};
export default Navbar;
