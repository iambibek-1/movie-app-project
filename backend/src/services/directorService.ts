import Models from '../models'
import { DirectorInterface,InputDirectorInterface } from '../interfaces/directorInterface';


export class DirectorsService{
    public async findAll():Promise <any>{
        const data = await Models.Director.findAll();
        return data;
    }
    public async createData(data:InputDirectorInterface):Promise<DirectorInterface>{
        const result = await Models.Director.create(data);
        return result;
    }
    public async updateData(id:number,data:InputDirectorInterface):Promise<boolean>{
        const update = await Models.Director.update(data,{
            where:{
                id:id,
            },
        });
        return update [0] === 0 ? false :true;
    }

    public async deleteData(id:number):Promise<number>{
        const deleted = await Models.Director.destroy({
            where:{
                id:id,
            },
        });
        return deleted; 
      }
}