const express = require("express");
const {
  processPayment,
  paytmResponse,
  getPaymentStatus,
  processPaymentStripe,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middlewares/user_actions/auth");

const router = express.Router();

router.route("/payment/process").post(processPayment);

router.route("/stripe").post(processPaymentStripe);

router.route("/callback").post(paytmResponse);

router.route("/payment/status/:id").get(isAuthenticatedUser, getPaymentStatus);

module.exports = router;
