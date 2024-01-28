import express, { Request, Response, NextFunction } from "express";
import { createVender, getVenderByID, getVendor } from "../controllers";

const AdminRoute = express.Router();

AdminRoute.post("/vendor", createVender);
AdminRoute.get("/vendor", getVendor);
AdminRoute.get("/vendor/:id", getVenderByID);

AdminRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Admin route" });
});

export default AdminRoute;
