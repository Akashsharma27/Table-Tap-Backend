const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { signupValidation, loginValidation } = require("../validations/auth.validation");
const validate = require("../middleware/validate");

router.post(
    "/signup",
    signupValidation,
    validate,
    authController.signup
);

router.post(
    "/login",
    loginValidation,
    validate,
    authController.login
);

module.exports = router;