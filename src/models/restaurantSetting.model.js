const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { commonModelFields } = require("../helpers/model.helper");

class RestaurantSetting extends Model {}

RestaurantSetting.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        ...commonModelFields,

        restaurantId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: "restaurant_id"
        },

        currency: {
            type: DataTypes.STRING(10),
            defaultValue: "INR"
        },

        currencySymbol: {
            type: DataTypes.STRING(5),
            defaultValue: "₹",
            field: "currency_symbol"
        },

        taxPercentage: {
            type: DataTypes.DECIMAL(5,2),
            defaultValue: 0,
            field: "tax_percentage"
        },

        serviceCharge: {
            type: DataTypes.DECIMAL(5,2),
            defaultValue: 0,
            field: "service_charge"
        },

        themeColor: {
            type: DataTypes.STRING(20),
            defaultValue: "#ff5722",
            field: "theme_color"
        }
    },
    {
        sequelize,

        tableName: "restaurant_settings",

        modelName: "RestaurantSetting",

        timestamps: true,

        paranoid: true,

        underscored: true,

        indexes: [
            {
                unique: true,
                fields: ["restaurant_id"]
            },
            {
                unique: true,
                fields: ["public_id"]
            }
        ]
    }
);

module.exports = RestaurantSetting;