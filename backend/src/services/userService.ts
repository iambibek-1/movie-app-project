import Models from '../models';
import { InputUserInterface, UserInterface} from '../interfaces/userInterface';



export class UserService{
    public async findAll():Promise<any>{
        const data = await Models.User.findAll();
        return data;
    }

    public async createData(
        data: InputUserInterface):Promise<UserInterface>{
        const result = await Models.User.create(data);
        return result;
    }
}