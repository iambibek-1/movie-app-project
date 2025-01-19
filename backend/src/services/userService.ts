import Models from '../models';


export class UserService{
    public async findAll(){
        const data = await Models.User.findAll();
        return data;
    }

    public async createData(data: any){
        const result = await Models.User.create(data);
        return data;
    }
}