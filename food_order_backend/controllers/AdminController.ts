import { Response, Request, NextFunction } from "express";
import { CreateVendorInput } from "../dto";

export const createVender = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    address,
    email,
    foodType,
    name,
    ownerName,
    password,
    phone,
    pinCode,
  } = <CreateVendorInput>req.body;

  return res.json({
    name,
    address,
    email,
    foodType,
    ownerName,
    password,
    phone,
    pinCode,
  });
};

export const getVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getVenderByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
