import express, { Request, Response, NextFunction } from "express";

const AdminRoute = express.Router();

AdminRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Admin route" });
});

export default AdminRoute;
