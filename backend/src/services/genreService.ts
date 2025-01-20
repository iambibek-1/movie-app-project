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
}