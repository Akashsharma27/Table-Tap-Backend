const { Sequelize } = require("sequelize");
const config = require("./index");

const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        port: config.database.port,
        dialect: "mysql",

        logging:
            config.app.env === "development"
                ? console.log
                : false,

        timezone: "+05:30",

        dialectOptions: {
            decimalNumbers: true
        },

        define: {
            underscored: true,
            freezeTableName: true,
            paranoid: true,
            timestamps: true
        },

        pool: {
            max: 10,
            min: 2,
            idle: 10000,
            acquire: 30000
        }
    }
);

module.exports = sequelize;