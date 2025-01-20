import * as Sequelize from 'sequelize';
import {Database} from "../config";

const sequelize = Database.sequelize;

const Genre = sequelize.define<any>(
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