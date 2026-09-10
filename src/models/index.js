const sequelize = require("../config/database");

const User = require("./user.model");
const Restaurant = require("./restaurant.model");
const RestaurantSetting = require("./restaurantSetting.model");

User.hasOne(Restaurant, {
    foreignKey: "user_id",
    as: "restaurant",
    onDelete: "CASCADE"
});

Restaurant.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner"
});

Restaurant.hasOne(RestaurantSetting, {
    foreignKey: "restaurant_id",
    as: "settings",
    onDelete: "CASCADE"
});

RestaurantSetting.belongsTo(Restaurant, {
    foreignKey: "restaurant_id",
    as: "restaurant"
});

module.exports = {
    sequelize,
    User,
    Restaurant,
    RestaurantSetting
};