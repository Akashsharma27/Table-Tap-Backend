const bcrypt = require("bcrypt");
const config = require("../config");

const hashPassword = async (password) => {
    return bcrypt.hash(
        password,
        config.bcrypt.saltRounds
    );
};

const comparePassword = async (
    plainPassword,
    hashedPassword
) => {
    return bcrypt.compare(
        plainPassword,
        hashedPassword
    );
};

module.exports = {
    hashPassword,
    comparePassword
};