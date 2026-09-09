module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
};