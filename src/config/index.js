require("dotenv").config();

const config = {
    app: {
        port: Number(process.env.PORT) || 5000,
        env: process.env.NODE_ENV || "development"
    },

    database: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRE
    },

    bcrypt: {
        saltRounds:
            Number(process.env.BCRYPT_SALT_ROUNDS) || 10
    }
};

module.exports = config;