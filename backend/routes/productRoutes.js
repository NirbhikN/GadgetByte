import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import Product from "../models/productModel.js"; //* Since data is already imported in Product model.

//* @desc  Fetch all products
//* @route  GET /api/products
//* @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //* Returns all the products

    res.json(products);
  })
);

//* @desc  Fetch single product
//* @route  GET /api/products/:id
//* @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //* Finds product by id that is in url
    let product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);

export default router;
