const {DataTypes}=require("sequelize");

const sequelize=require("../config/database");

const RestaurantSetting=sequelize.define("restaurant_settings",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    restaurant_id:{
        type:DataTypes.BIGINT,
        allowNull:false
    },

    currency:{
        type:DataTypes.STRING,
        defaultValue:"INR"
    },

    tax_percentage:{
        type:DataTypes.FLOAT,
        defaultValue:0
    },

    service_charge:{
        type:DataTypes.FLOAT,
        defaultValue:0
    },

    theme_color:{
        type:DataTypes.STRING,
        defaultValue:"#ff5722"
    }

},{
    timestamps:true,
    underscored:true
});

module.exports=RestaurantSetting;