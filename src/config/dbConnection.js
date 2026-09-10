const sequelize = require("./database");
const logger = require("../utils/logger");

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();

        logger.info(
            "Database connected successfully."
        );
    } catch (error) {
        logger.error(error);

        process.exit(1);
    }
};

module.exports = connectDatabase;