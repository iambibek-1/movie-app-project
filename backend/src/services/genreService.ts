import Models from '../models';

export class genreService{
    public async findAll(){
        const data = await Models.Genre.findAll();
        return data;
    }

    public async createData(data:any){
        const result = await Models.Genre.create(data)
        return data;
    }
}