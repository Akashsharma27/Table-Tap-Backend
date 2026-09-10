const{

sequelize

}=require("../models");

module.exports=async(callback)=>{

    const transaction=

    await sequelize.transaction();

    try{

        const response=

        await callback(transaction);

        await transaction.commit();

        return response;

    }

    catch(err){

        await transaction.rollback();

        throw err;

    }

}