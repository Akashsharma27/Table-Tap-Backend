const sequelize = require("./database");

const logger = require("../utils/logger");

const connectDB = async () => {

    try {

        await sequelize.authenticate();

        logger.info("Database Connected Successfully");

    }

    catch (err) {

        logger.error(err.message);

        process.exit(1);

    }

};

module.exports = connectDB;