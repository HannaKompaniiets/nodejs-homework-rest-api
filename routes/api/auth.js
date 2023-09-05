const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");

const { schemas } = require("../../models/user");
const { authenticate, validatedBody, upload } = require("../../middleware");

router.post(
  "/register",
  validatedBody(schemas.addRegisterSchema),
  ctrl.register
);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validatedBody(schemas.addEmailSchema),
  ctrl.resendVerifyEmail
);
router.post("/login", validatedBody(schemas.addLoginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
