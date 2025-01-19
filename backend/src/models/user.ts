import * as Sequelize from "sequelize";
import { Database } from "../config";
const sequelize = Database.sequelize;

const User = sequelize.define<any>(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
export default User;