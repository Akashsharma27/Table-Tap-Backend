const bcrypt = require("bcrypt");
const { User, Restaurant, RestaurantSetting, sequelize } = require("../models");
const { generateToken } = require("../helpers/jwt");

// signup
exports.signup = async (payload) => {

    const transaction = await sequelize.transaction();

    try {

        const exists = await User.findOne({
            where: {
                email: payload.email
            }
        });

        if (exists) {
            throw new Error("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(
            password,
            Number(process.env.BCRYPT_SALT_ROUNDS)
        );

        const user = await User.create({
            name: payload.name,
            email: payload.email,
            password: hashedPassword
        }, { transaction });

        const restaurant = await Restaurant.create({

            user_id: user.id,

            restaurant_name: payload.restaurant_name,

            email: payload.email

        }, { transaction });

        await RestaurantSetting.create({

            restaurant_id: restaurant.id

        }, { transaction });

        await transaction.commit();

        const token = generateToken({
            id: user.id,
            restaurant_id: restaurant.id,
            role: "owner"
        });

        return {

            success: true,

            message: "Signup Successful",

            token

        };

    } catch (error) {

        await transaction.rollback();

        throw error;

    }

};

// login
exports.login = async (payload) => {

    const user = await User.findOne({

        where: {
            email: payload.email
        },

        include: {
            model: Restaurant,
            as: "restaurant"
        }

    });

    if (!user) {

        throw new Error("Invalid Email or Password");

    }

    const match = await bcrypt.compare(
        payload.password,
        user.password
    );

    if (!match) {

        throw new Error("Invalid Email or Password");

    }

    const token = generateToken({

        id: user.id,

        restaurant_id: user.restaurant.id,

        role: "owner"

    });

    return {

        success: true,

        message: "Login Successful",

        token,

        user

    };

};