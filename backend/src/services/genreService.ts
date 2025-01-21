import { GenereInterface, InputGenereInterface } from '../interfaces';
import Models from '../models';

export class GenreService{
    public async findAll():Promise<GenereInterface[]>{
        const data = await Models.Genre.findAll();
        return data;
    }

    public async createData(data:InputGenereInterface):Promise<GenereInterface>{
        const result = await Models.Genre.create(data);
        return result;
    }
    public async updateData( id:number, data:InputGenereInterface):Promise<boolean>{
        const update = await Models.Genre.update(data,{
            where:{
                id:id,
            },
        });
return update [0] === 0 ? false :true;
    }

    public async deleteData(id:number):Promise<number>{
        const deleted = await Models.Genre.destroy({
            where:{
                id:id,
            },
        });
        return deleted;
    }

    
}