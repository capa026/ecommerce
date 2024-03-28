import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../utils/jwt.js";
import Jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

export const register = async (req, res, next) => {
  const { name, lastName, email, password, phoneNumber } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email already exists."]);

    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const newUser = new User({
      name,
      lastName,
      email,
      password: passwordHash,
      phoneNumber,
    });

    await newUser.save();

    res.status(200).json("Registered successfully.");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json(["Password or Email incorrect"]);

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json(["Password or Email incorrect"]);

    const token = await createAccesToken({ id: user._id });

    res.cookie("token", token, { maxAge: 28800000 }); //8 Hours

    res.status(200).json({
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found." });

  res.status(200).json({
    id: userFound._id,
    name: userFound.name,
    lastName: userFound.lastName,
    email: userFound.email,
    createdAt: userFound.createdAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized." });

  Jwt.verify(token, TOKEN_KEY, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized." });

    const userFound = await User.findById(user.id);

    if (!userFound) return res.status(401).json({ message: "Unauthorized." });

    return res.status(200).json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    });
  });
};

export const verifySession = (req, res, next) => {
  const { logged_in, user_name } = req.cookies;

  if (!logged_in || !user_name)
    return res.status(401).json({ message: "Unauthorized." });
  return res.json({ user_name, logged_in });
};
