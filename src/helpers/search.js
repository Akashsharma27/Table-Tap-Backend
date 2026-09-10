const{

Op

}=require("sequelize");

exports.searchQuery=(search,fields)=>{

    if(!search){

        return{}

    }

    return{

        [Op.or]:

        fields.map(field=>({

            [field]:{

                [Op.like]:

                `%${search}%`

            }

        }))

    }

}