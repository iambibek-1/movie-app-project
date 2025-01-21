import * as Sequelize from 'sequelize';
import {Database} from "../config";
import { DirectorModelInterface } from '../interfaces/directorInterface';
const sequelize = Database.sequelize;

const Director = sequelize.define<DirectorModelInterface>(
    "directors",
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
        country:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        dob:{
            type:Sequelize.DATE,
            allowNull:false,
        }
    },
    {
        timestamps:false,
    }
)
export default Director;  