import JWT from "jsonwebtoken";
import { NextFunction } from "express";
import { Unauthenticated } from "../errors";

const auth = (req: any, res: any, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader && authHeader.startsWith("Bearer")) {
    throw new Unauthenticated("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload: any = JWT.verify(
      token,
      process.env.JWT_SECRET || "jwtSecret"
    );
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (err) {
    throw new Unauthenticated("Authentication invalid");
  }
};

export default auth;
