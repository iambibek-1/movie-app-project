import Models from "../models";
import {
  MovieInterface,
  InputMovieInterface,
  ArgsMovieInterface,
} from "../interfaces/movieInterface";
import { Op } from "sequelize";

export class MovieService {
  public async getMovie(args: ArgsMovieInterface): Promise<MovieInterface[]> {
    let where;
    if (args.searchQuery) {
      where = {
        title: {
          [Op.like]: `%${args.searchQuery}%`,
        },
      };
    }

    if (args.category) {
      switch (args.category) {
        case "latest":
          //released after 2024
          const date = "2024-01-01";
          where = {
            ...where,
            releasedAt: {
              [Op.gt]: date,
            },
          };
          break;
        case "popular":
          //imdb score greater than 7
          const baseImdbScore = "7";
          where = {
            ...where,
            imdbScore: {
              [Op.gte]: baseImdbScore,
            },
          };

          break;
        case "top-rated":
          //rating over 8
          const baseRating = "8.0";
          where = {
            ...where,
            avgRatings: {
              [Op.gte]: baseRating,
            },
          };
          break;
      }
    }

    if (args.genreId) {
      where = {
        ...where,
        genreId: parseInt( args.genreId),
        };
    }

    const data = await Models.Movie.findAll({
      offset: args.offset,
      limit: args.limit,

      order: [[args.order, args.sort]],
      where,
    });
    return data;
  }

  public async createMovie(data: InputMovieInterface): Promise<MovieInterface> {
    const result = await Models.Movie.create(data);
    return result;
  }
  public async updateMovie(
    id: number,
    data: InputMovieInterface
  ): Promise<boolean> {
    const update = await Models.Movie.update(data, {
      where: {
        id: id,
      },
    });
    return update[0] === 0 ? false : true;
  }
  public async deleteMovie(id: number): Promise<number> {
    const deleted = await Models.Movie.destroy({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
