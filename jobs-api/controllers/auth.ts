import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";

import User from "../models/user";
// import { BadRequestError } from "../errors";
import { NextFunction } from "express";

const register = async (req: any, res: any, next: NextFunction) => {
  try {
    // const { name, email, password } = req.body;

    // if (!name || !email || !password) {
    //   throw new BadRequestError("Please provide name, email and password.");
    // }

    const { name, email, password } = req.body; 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const tempUser = { name, email, password: hashedPassword };

    const user = await User.create(tempUser);
    res.status(StatusCodes.CREATED).json({ user });
  } catch (err) {
    next(err);
  }
};

const login = (req: any, res: any) => {
  res.send("Login user");
};

export { register, login };

/*
stack = [
  express-json
  /auth
  /job
  middleware 404
  middleware error
]
*/

// router => validation middleware => controller => service => db/service/email
