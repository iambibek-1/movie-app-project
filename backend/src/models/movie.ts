import * as Sequelize from 'sequelize';
import { Database } from '../config';
import { MovieModelInterface } from '../interfaces/movieInterface';
const sequelize = Database.sequelize;


const Movie = sequelize.define<MovieModelInterface>(
    "movies",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          imdbScore: {
            type: Sequelize.DECIMAL(2, 1),
            defaultValue: 0.0,
            allowNull: false,
          },
          directorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
              model:'directors',
              key: 'id',
            }
          },
          actors: {
            type: Sequelize.JSON,
          },
          genreId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model:'genres',
              key: 'id',
            }
          },
          description: {
            type: Sequelize.TEXT,
          },
          thumbnailUrl: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          embedVideoUrl: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          avgRatings: {
            type: Sequelize.DECIMAL(2, 1),
            defaultValue: 0.0,
            allowNull: false,
          },
          totalRatings: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
          },
          duration: {
            type: Sequelize.STRING,
          },
          releasedAt: {
            type: Sequelize.DATE,
          },
    },
    {
        timestamps: false,
    }
)
export default Movie;
