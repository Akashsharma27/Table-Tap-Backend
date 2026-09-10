class BaseRepository {

    constructor(model){

        this.model=model;

    }

    async create(data,options={}){

        return this.model.create(data,options);

    }

    async findOne(where,options={}){

        return this.model.findOne({

            where,

            ...options

        });

    }

    async findByPk(id,options={}){

        return this.model.findByPk(id,options);

    }

    async findAll(options={}){

        return this.model.findAll(options);

    }

    async update(instance,data){

        return instance.update(data);

    }

    async delete(instance){

        return instance.destroy();

    }

}

module.exports=BaseRepository;