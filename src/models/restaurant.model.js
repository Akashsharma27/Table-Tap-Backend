const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { commonModelFields } = require("../helpers/model.helper");

class Restaurant extends Model {}

Restaurant.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        ...commonModelFields,

        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: "user_id"
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false,

            validate: {
                notEmpty: true,
                len: [2, 150]
            }
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: true,

            validate: {
                isEmail: true
            },

            set(value) {
                if (value) {
                    this.setDataValue(
                        "email",
                        value.trim().toLowerCase()
                    );
                }
            }
        },

        phone: {
            type: DataTypes.STRING(20)
        },

        address: {
            type: DataTypes.TEXT
        },

        city: {
            type: DataTypes.STRING(80)
        },

        state: {
            type: DataTypes.STRING(80)
        },

        country: {
            type: DataTypes.STRING(80),
            defaultValue: "India"
        },

        logo: {
            type: DataTypes.STRING
        },

        coverImage: {
            type: DataTypes.STRING,
            field: "cover_image"
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: "is_active"
        }
    },
    {
        sequelize,

        tableName: "restaurants",

        modelName: "Restaurant",

        timestamps: true,

        paranoid: true,

        underscored: true,

        indexes: [
            {
                fields: ["user_id"]
            },
            {
                unique: true,
                fields: ["public_id"]
            }
        ]
    }
);

module.exports = Restaurant;