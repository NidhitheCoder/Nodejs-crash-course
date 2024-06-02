import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import rateLimiter from "express-rate-limit";

import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";
import authenticatedUser from "./middlewares/authentication";
import authRoute from "./routes/auth";
import jobsRoute from "./routes/jobs";
import connectDB from "./connect/db";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimiter);

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", authenticatedUser, jobsRoute);

// Error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  // Connect with DB
  await connectDB(process.env.MONGO_URI || "");
  try {
    app.listen(port, () => console.log(`Server listening Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
