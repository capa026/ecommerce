import User from "../models/user.model.js";

export const register = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (error) {
    next(error);
  }
};
