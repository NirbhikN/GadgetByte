const express = require("express");
const products = require("./data/products");

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

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
