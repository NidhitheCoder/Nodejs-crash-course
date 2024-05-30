import { StatusCodes } from "http-status-codes";

import User from "../models/user";
import { BadRequestError } from "../errors";
import { NextFunction } from "express";

const register = async (req: any, res: any, next: NextFunction) => {
  try {
    // const { name, email, password } = req.body;

    // if (!name || !email || !password) {
    //   throw new BadRequestError("Please provide name, email and password.");
    // }

    const user = await User.create(req.body);
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
