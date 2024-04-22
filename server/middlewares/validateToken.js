import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return;
  // return res
  //   .status(401)
  //   .json({ message: "No token could be found, access denied." });

  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.user = user;
    next();
  });
};
