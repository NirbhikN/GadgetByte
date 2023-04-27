import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js"; //*protect middleware only when we want to protect it i.e for sensitive files

router.route("/").post(protect, addOrderItems);

export default router;
