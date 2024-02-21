import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const createAccesToken = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_KEY,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
