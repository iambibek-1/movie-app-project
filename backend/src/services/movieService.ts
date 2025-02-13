import Models from "../models";
import {
  MovieInterface,
  InputMovieInterface,
  ArgsMovieInterface
} from "../interfaces/movieInterface";
import { Op } from "sequelize";

export class MovieService {
  public async getMovie(args:ArgsMovieInterface):Promise<MovieInterface[]>{
    let where ;
    if (args.searchQuery){
      where = {
        title:{
          [Op.like]: `%${args.searchQuery}%`
        }
      }
    }
    const data = await Models.Movie.findAll({
      offset:args.offset,
      limit:args.limit,
      order:[[args.order,args.sort]],
      where
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
