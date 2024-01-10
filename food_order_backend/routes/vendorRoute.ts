import express, { Request, Response, NextFunction } from "express";

const VendorRoute = express.Router();

VendorRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Vendor route" });
});

export default VendorRoute;
