const {DataTypes}=require("sequelize");

const sequelize=require("../config/database");

const User=sequelize.define("users",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },

    phone:{
        type:DataTypes.STRING
    },

    profile_image:{
        type:DataTypes.STRING
    },

    status:{
        type:DataTypes.ENUM("active","inactive"),
        defaultValue:"active"
    }

},{
    timestamps:true,
    underscored:true
});

module.exports=User;