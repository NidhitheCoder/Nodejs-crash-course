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
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
);

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Routes
app.get("/ping", (req, res) => {
  res.send("Ping is successful");
});
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
