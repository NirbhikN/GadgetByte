import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import { notFound, errorHander } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helloooo");
});

//* Any route that goes to '/api/products', it goes to productRoutes and so on
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

//* Config route for PayPal
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//* making 'uploads' folder static so that express can use it.
const __dirname = path.resolve(); //* mimics dirname as it is a main folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//* Error Handlers
app.use(notFound);
app.use(errorHander);

const PORT = process.env.PORT || 8080; //* Checks if there is any "PORT" present in env variables else uses 8080 as port

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold
  );
});
