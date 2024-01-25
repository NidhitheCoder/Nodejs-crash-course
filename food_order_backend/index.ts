import express from "express";
import bodyParser from "body-parser";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();

// app.use("/", (req, res) => {
//   return res.send("Hello from food order backend");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
