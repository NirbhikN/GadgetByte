import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  let { id } = req.params;
  let product = products.find((p) => p._id === id);
  res.json(product);
});

const PORT = process.env.PORT || 8080; //* Checks if there is any "PORT" present in env variables else uses 8080 as port

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold
  );
});
