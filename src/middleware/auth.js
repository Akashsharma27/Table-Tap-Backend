const ApiError = require("../utils/ApiError");
const httpStatus = require("../constants/httpStatus");
const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
    try {
        const bearer = req.headers.authorization;

        if (!bearer || !bearer.startsWith("Bearer ")) {
            throw new ApiError(
                httpStatus.UNAUTHORIZED,
                "Unauthorized"
            );
        }

        const token = bearer.split(" ")[1];

        req.user = verifyToken(token);

        next();
    } catch (error) {
        next(error);
    }
};