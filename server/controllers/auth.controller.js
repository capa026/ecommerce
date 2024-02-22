import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../utils/jwt.js";

export const register = async (req, res, next) => {
  const { name, lastName, email, password, phoneNumber } = req.body;

  try {
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const newUser = new User({
      name,
      lastName,
      email,
      password: passwordHash,
      phoneNumber,
    });

    await newUser.save();

    const token = await createAccesToken({ id: newUser._id });
    res.cookie("token", token);
    res.status(200).json({
      id: newUser._id,
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
      createdAt: newUser.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).json({ message: "Password or Email incorrect" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Password or Email incorrect" });

    const token = await createAccesToken({ id: user._id });

    res.cookie("token", token);
    res.status(200).json({
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = (req, res) => {
  res.send("profile");
};
