import { Request, Response } from "express";
import { DirectorsService } from "../../services/directorService";

export class directorsController {
  public static async getDirectors(
    req: Request,
    res: Response
  ): Promise<Response> {
    const directors = await new DirectorsService().findAll();
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Directors retrieved successfully",
      data: directors,
    });
  }
  public static async getDirectorById(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id as unknown as number;

    const directors = await new DirectorsService().findOne(id);

    if (!directors) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: `Director with ID ${id} not found`,
      });
    }

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Director retrieved successfully",
      data: directors,
    });
  }

  public static async postDirectors(
    req: Request,
    res: Response
  ): Promise<Response> {
    const data = req.body;
    const directorService = new DirectorsService();

    const newDirector = await directorService.createData(data);

    const responseJson = {
      success: true,
      status: 201,
      message: "Director created successfully",
      data: newDirector,
    };
    return res.status(201).json(responseJson);
  }
  public static async update(req: Request, res: Response): Promise<Response> {
    const id = req.params.id as unknown as number;
    const data = req.body;

    const update = await new DirectorsService().updateData(id, data);

    if (update === false) {
      throw new Error(`Couldnot update directors with id${id}`);
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Directors updated successfully",
      // data:update,
    });
  }
  public static async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    await new DirectorsService().deleteData(id);

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Director deleted successfully",
    });
  }
}
