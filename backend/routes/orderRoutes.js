import express from "express";
const router = express.Router();
import { addOrderItems, getOrderbyId } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js"; //*protect middleware only when we want to protect it i.e for sensitive files

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderbyId);

export default router;
