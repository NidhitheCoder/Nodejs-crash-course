import express from "express";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();

// app.use("/", (req, res) => {
//   return res.send("Hello from food order backend");
// });

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
