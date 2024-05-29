import { Unauthenticated } from "./errors";

const express = require("express");

const app = express();

app.get("/welcome", (req: any, res: any) => {
  res.status(200).send({ msg: "welcome" });
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
