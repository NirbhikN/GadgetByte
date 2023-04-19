// * Adding data to database is called seeding

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    //* Clear the database before importing
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; //! add a property user to the product
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);
  }
};

//* If in terminal 'npm run import:data -d' is run then if there is "-d", data will be destroyed else imported

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}