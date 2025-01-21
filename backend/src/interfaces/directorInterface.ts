import * as Sequelize from 'sequelize';
export interface InputDirectorInterface{
    name:string;
    country:string;
    dob:Date;
}
export interface DirectorInterface extends InputDirectorInterface{
    id:number;
}
export interface DirectorModelInterface extends Sequelize.Model<DirectorInterface,Partial<InputDirectorInterface>>,DirectorInterface{}