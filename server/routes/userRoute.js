const express = require("express");
const User = require("../models/userModel");

const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  getProfileDetails,
} = require("../controllers/userController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/user_actions/auth");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const multer = require("multer");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // pasta no Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
  },
});

const parser = multer({ storage: storage });

router.route("/register").post(parser.single("avatar"), registerUser);

router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/profile").post(getProfileDetails);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
