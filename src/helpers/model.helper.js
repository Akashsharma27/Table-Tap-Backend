const { DataTypes } = require("sequelize");

const commonModelFields = {
    publicId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
        field: "public_id"
    }
};

module.exports = {
    commonModelFields
};