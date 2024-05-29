import dotenv from "dotenv";
import express from "express";

import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";
import authRoute from "./routes/auth";
import jobsRoute from "./routes/jobs";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", jobsRoute);

// Error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
