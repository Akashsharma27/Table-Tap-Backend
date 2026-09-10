const {

    Model,

    DataTypes

} = require("sequelize");

const { v4: uuid } = require("uuid");

class BaseModel extends Model {

}

const commonColumns = {

    public_id: {

        type: DataTypes.UUID,

        allowNull: false,

        defaultValue: DataTypes.UUIDV4,

        unique: true

    }

}

module.exports = {

    BaseModel,

    commonColumns

}