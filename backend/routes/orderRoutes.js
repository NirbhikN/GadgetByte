import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js"; //*protect middleware only when we want to protect it i.e for sensitive files

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").post(protect, getMyOrders);
router.route("/:id").get(protect, getOrderbyId);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
