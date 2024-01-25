import { Response, Request, NextFunction } from "express";
import { CreateVendorInput } from "../dto";

export const createVender = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, address, password, phone, email, foodType, ownerName } = <
    CreateVendorInput
  >req.body;
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
