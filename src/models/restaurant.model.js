const {DataTypes}=require("sequelize");

const sequelize=require("../config/database");

const Restaurant=sequelize.define("restaurants",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    user_id:{
        type:DataTypes.BIGINT,
        allowNull:false
    },

    restaurant_name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    logo:{
        type:DataTypes.STRING
    },

    cover_image:{
        type:DataTypes.STRING
    },

    phone:{
        type:DataTypes.STRING
    },

    email:{
        type:DataTypes.STRING
    },

    address:{
        type:DataTypes.TEXT
    },

    city:{
        type:DataTypes.STRING
    },

    state:{
        type:DataTypes.STRING
    },

    country:{
        type:DataTypes.STRING
    }

},{
    timestamps:true,
    underscored:true
});

module.exports=Restaurant;