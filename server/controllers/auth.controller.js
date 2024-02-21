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
    res.json({ message: "User Created Successfully" });

    //res.status(200).send("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next("User not found");

    const isPasswordCorrect = await bcrypt.compare(
      user.password,
      req.body.password
    );

    if (!isPasswordCorrect) return next("Incorrect Email or Password");

    jwt.sign(
      { id: user._id },
      "tokenpass",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) return next(err);
        res.cookie("token", token);
        res.json({ message: "User Created Successfully" });
      }
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
