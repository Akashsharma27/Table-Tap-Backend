const authService = require("../services/auth.service");

exports.signup = async (req, res, next) => {

    try {

        const response = await authService.signup(req.body);

        return res.status(201).json(response);

    } catch (error) {

        next(error);

    }

};

exports.login = async (req, res, next) => {

    try {

        const response = await authService.login(req.body);

        return res.json(response);

    } catch (error) {

        next(error);

    }

};