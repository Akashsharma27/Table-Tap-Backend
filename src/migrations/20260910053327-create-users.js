"use strict";

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("users", {

            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },

            public_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                unique: true
            },

            full_name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },

            email: {
                type: Sequelize.STRING(150),
                allowNull: false,
                unique: true
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            phone: Sequelize.STRING(20),

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

    },

    async down(queryInterface) {

        await queryInterface.dropTable("users");

    }

};