import { StatusCodes } from "http-status-codes";

import User from "../models/user";
import { Unauthenticated } from "../errors";
import { NextFunction } from "express";

const register = async (req: any, res: any, next: NextFunction) => {
  try {
    // const { name, email, password } = req.body;

    // if (!name || !email || !password) {
    //   throw new BadRequestError("Please provide name, email and password.");
    // }

    const user = await User.create(req.body);
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (err) {
    next(err);
  }
};

const login = async (req: any, res: any, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const isCorrectPassword = await user?.comparePassword(password);

    // Compare password
    if (!user || !isCorrectPassword) {
      throw new Unauthenticated("Invalid credentials");
    }

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
  } catch (err) {
    next(err);
  }
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
