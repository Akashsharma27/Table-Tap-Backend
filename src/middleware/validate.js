const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {

        return next();

    }

    const formatted = {};

    errors.array().forEach(error => {

        formatted[error.path] = error.msg;

    });

    return res.status(422).json({

        success: false,

        message: "Validation Failed",

        errors: formatted

    });

}