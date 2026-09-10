"use strict";

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            "restaurant_settings",
            {

                id: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true
                },

                public_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    unique: true,
                    defaultValue: Sequelize.UUIDV4
                },

                restaurant_id: {
                    type: Sequelize.BIGINT,
                    allowNull: false
                },

                currency: {
                    type: Sequelize.STRING(10),
                    defaultValue: "INR"
                },

                currency_symbol: {
                    type: Sequelize.STRING(5),
                    defaultValue: "₹"
                },

                tax_percentage: {
                    type: Sequelize.DECIMAL(5,2),
                    defaultValue: 0
                },

                service_charge: {
                    type: Sequelize.DECIMAL(5,2),
                    defaultValue: 0
                },

                theme_color: {
                    type: Sequelize.STRING(20),
                    defaultValue: "#ff5722"
                },

                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },

                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },

                deleted_at: {
                    type: Sequelize.DATE
                }

            }
        );

        await queryInterface.addConstraint(
            "restaurant_settings",
            {
                fields: ["restaurant_id"],

                type: "foreign key",

                name: "fk_restaurant_settings_restaurant_id",

                references: {
                    table: "restaurants",
                    field: "id"
                },

                onDelete: "CASCADE",

                onUpdate: "CASCADE"
            }
        );

        await queryInterface.addIndex(
            "restaurant_settings",
            ["restaurant_id"],
            {
                unique: true,
                name: "idx_restaurant_settings_restaurant_id"
            }
        );

        await queryInterface.addIndex(
            "restaurant_settings",
            ["public_id"],
            {
                unique: true,
                name: "idx_restaurant_settings_public_id"
            }
        );

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            "restaurant_settings"
        );

    }

};