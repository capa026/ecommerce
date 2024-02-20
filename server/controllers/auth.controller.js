import User from "../models/user.model.js";

export const register = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    const { name, lastName, email, phoneNumber } = savedUser._doc;
    res.status(200).send({ name, lastName, email, phoneNumber });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  res.send("Login");
};
