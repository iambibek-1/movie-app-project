import * as Sequelize from 'sequelize';
export interface InputGenereInterface{
    name:string;
}

export interface GenereInterface extends InputGenereInterface{
    id:number;
}

export interface GenereModelInterface
extends Sequelize.Model<GenereInterface,Partial<InputGenereInterface>>,GenereInterface{}