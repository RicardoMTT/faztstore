import { Request, Response } from "express";
import User from "../models/user.model";
import { generateToken } from "../libs/jwt";
import { SignupSchemaType } from "../schemas/auth.schemat";
export const signinHandler = (req: Request, res: Response) => {};

export const signupHandler = async (
  req: Request<unknown, unknown, SignupSchemaType>,
  res: Response
) => {
  const { name, lastname, email, password } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    return res.status(400).json({
      msg: "user already exits",
    });
  }
  const user = new User({
    name,
    lastname,
    email,
    password,
  });
  user.password = await user.encryptPassword(password);

  const saveUser = await user.save();
  console.log("saveUser._id", saveUser._id);
  const token = generateToken({
    id: saveUser._id,
  });
  res.json({
    token,
  });
};
