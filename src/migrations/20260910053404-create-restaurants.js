"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("restaurants", {

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

            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING(150),
                allowNull: false
            },

            email: {
                type: Sequelize.STRING(150)
            },

            phone: {
                type: Sequelize.STRING(20)
            },

            address: {
                type: Sequelize.TEXT
            },

            city: {
                type: Sequelize.STRING(80)
            },

            state: {
                type: Sequelize.STRING(80)
            },

            country: {
                type: Sequelize.STRING(80),
                defaultValue: "India"
            },

            logo: {
                type: Sequelize.STRING
            },

            cover_image: {
                type: Sequelize.STRING
            },

            is_active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
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

        });

        await queryInterface.addConstraint("restaurants", {
            fields: ["user_id"],
            type: "foreign key",
            name: "fk_restaurants_user_id",
            references: {
                table: "users",
                field: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        await queryInterface.addIndex(
            "restaurants",
            ["user_id"],
            {
                name: "idx_restaurants_user_id"
            }
        );

        await queryInterface.addIndex(
            "restaurants",
            ["public_id"],
            {
                unique: true,
                name: "idx_restaurants_public_id"
            }
        );

    },

    async down(queryInterface) {

        await queryInterface.dropTable("restaurants");

    }
};