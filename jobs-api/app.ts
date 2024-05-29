import dotenv from "dotenv";
import express from "express";

import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";

dotenv.config();

const app = express();

app.use(express.json());


// Error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Routers

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
