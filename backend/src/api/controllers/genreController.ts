import { Request,Response } from "express";

import {genreService} from "../../services/genreService";

export class genreController {
    public static async getGenre(req:Request, res:Response): Promise <Response>{
        const genre = await new genreService().findAll();
        return res.status(200).json({
            success:true,
            status:200,
            message:"Genre fetched successfully",
            data:genre,
        });
    }
    public static async postGenre(req:Request, res:Response):Promise<Response>{
        const genre = await new genreService().createData(req.body);
        return res.status(201).json({
            success:true,
            status:201,
            message:"Genre created successfully",
            data:genre,
        })
    }

}