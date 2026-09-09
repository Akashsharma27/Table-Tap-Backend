const { body } = require("express-validator");

exports.signupValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    body("restaurant_name")
        .trim()
        .notEmpty()
        .withMessage("Restaurant name is required")
];

exports.loginValidation = [

    body("email")
        .isEmail(),

    body("password")
        .notEmpty()

];