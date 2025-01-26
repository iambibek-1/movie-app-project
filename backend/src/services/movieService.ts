import Models from "../models";
import {
  MovieInterface,
  InputMovieInterface,
} from "../interfaces/movieInterface";

export class MovieService {
  public async findAll(): Promise<any> {
    const data = await Models.Movie.findAll();
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
