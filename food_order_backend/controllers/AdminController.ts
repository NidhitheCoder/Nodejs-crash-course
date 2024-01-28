import { Response, Request, NextFunction } from "express";
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";

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

  const createVender = await Vendor.create({
    address,
    email,
    foodType,
    name,
    ownerName,
    password,
    phone,
    pinCode,
    salt: "",
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
  });

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
