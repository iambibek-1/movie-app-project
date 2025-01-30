import * as Sequelize from "sequelize";
import { Database } from "../config";
import { RoleEnum } from "../enums";

const sequelize = Database.sequelize;

const User = sequelize.define<any>(
  "users",
  {
    id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true,
    },
    password:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    role:{
      type:Sequelize.ENUM(RoleEnum.admin, RoleEnum.user),
      allowNull:false,
      defaultValue: RoleEnum.user,
    }
  },
  {
    timestamps: false,
  }
);
export default User;