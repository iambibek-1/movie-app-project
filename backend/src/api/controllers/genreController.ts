import { Request,Response } from "express";

import {GenreService} from "../../services/genreService";
import { log } from "console";

export class genreController {
    public static async getGenre(req:Request, res:Response): Promise <Response>{
        const genre = await new GenreService().findAll();
        return res.status(200).json({
            success:true,
            status:200,
            message:"Genre fetched successfully",
            data:genre,
        });
    }
    public static async postGenre(req:Request, res:Response):Promise<Response>{
       const data = req.body
        const genreService =  new GenreService();

        const newGenre = await genreService.createData(data);

        const responseJson = {
            success:true,
            status:201,
            message:"Genre created successfully",
            data:newGenre,
        }
        // console.log(responseJson)
        return res.status(201).json(responseJson)
    }
    public static async update(req:Request , res:Response):Promise<Response>{
        const id = req.params.id as unknown as number;
        const data = req.body;


        const update = await new GenreService().updateData(id,data);

        if(update === false){
            throw new Error(`Couldnot update genre with id${id}`);

        }
        return res.status(200).json({
            success:true,
            status:200,
            message:"Genre updated successfully",
            // data:update,
        }) 
    }
    public static async delete(req:Request, res:Response):Promise<Response>{
        const id = parseInt(req.params.id);
        await new GenreService().deleteData(id);

        return res.status(200).json({
            success:true,
            status:200,
            message:"Genre deleted successfully",
        });

    }

}