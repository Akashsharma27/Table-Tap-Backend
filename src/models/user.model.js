const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { commonModelFields } = require("../helpers/model.helper");
const {
    hashPassword,
    comparePassword
} = require("../helpers/password.helper");

class User extends Model {

    async comparePassword(password) {
        return comparePassword(password, this.password);
    }

    toJSON() {
        const values = { ...this.get() };

        delete values.password;

        return values;
    }

}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        ...commonModelFields,

        fullName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "full_name",

            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,

            set(value) {
                this.setDataValue(
                    "email",
                    value.trim().toLowerCase()
                );
            },

            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [6, 255]
            }
        },

        phone: {
            type: DataTypes.STRING(20),
            allowNull: true
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: "is_active"
        }
    },

    {
        sequelize,

        modelName: "User",

        tableName: "users",

        timestamps: true,

        paranoid: true,

        underscored: true,

        defaultScope: {
            attributes: {
                exclude: ["password"]
            }
        },

        scopes: {
            withPassword: {
                attributes: {}
            }
        },

        indexes: [
            {
                unique: true,
                fields: ["email"]
            },
            {
                unique: true,
                fields: ["public_id"]
            }
        ],

        hooks: {

            async beforeSave(user) {

                if (!user.changed("password")) {
                    return;
                }

                user.password = await hashPassword(user.password);

            }

        }

    }

);

module.exports = User;