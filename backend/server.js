import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHander } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Helloooo");
});

//* Any route that goes to '/api/products', it goes to productRoutes
app.use("/api/products", productRoutes);

//* Error Handlers
app.use(notFound);
app.use(errorHander);

const PORT = process.env.PORT || 8080; //* Checks if there is any "PORT" present in env variables else uses 8080 as port

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold
  );
});
