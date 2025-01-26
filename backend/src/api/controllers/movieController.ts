import { Request, Response } from "express";
import { MovieService } from "../../services/movieService";

export class movieController{
    public static async getMovies(
        req:Request,
        res:Response
    ): Promise<Response>{
        const movies = await new MovieService().findAll();
        return res.status(200).json({
            success:true,
            status:200,
            message: "Movies retrived successfully",
            data: movies,
        });
    }
    public static async postMovies(
        req:Request,
        res:Response
    ): Promise<Response>{
        const data = req.body;
        const movieService = new MovieService();

        const newMovie = await movieService.createMovie(data);

        const responseJson = {
            success: true,
            status: 201,
            message: "Movie created successfully",
            data: newMovie,
        };
        return res.status(201).json(responseJson);
    }

    public static async update (req:Request, res:Response): Promise<Response> {
        const id = req.params.id as unknown as number;
        const data = req.body;

        const update = await new MovieService().updateMovie(id,data);

        if(update === false){
            throw new Error(`Couldnpot update movie with id :${id}`)
        }
        return res.status(200).json({
            success: true,
            status: 200,
            message: "Movie update successfully",
        });
    }
    public static async delete(req:Request, res:Response): Promise<Response>{
        const id = parseInt(req.params.id);
        await new MovieService().deleteMovie(id);

        return res.status(200).json({
            success: true,
            status: 200,
            message: "Movie deleted successfully",
        });
    }


}