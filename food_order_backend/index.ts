import express from "express";

const app = express();

app.use("/", (req, res) => {
  return res.send("Hello from food order backend");
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
