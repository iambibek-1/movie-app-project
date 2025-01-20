import * as Sequelize from 'sequelize';
import {Database} from "../config";
import { GenereModelInterface } from '../interfaces';

const sequelize = Database.sequelize;

const Genre = sequelize.define<GenereModelInterface>(
    "genres",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps:false,
    }
)
export default Genre;  