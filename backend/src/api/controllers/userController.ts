import { Request, Response } from "express";

import { UserService } from "../../services";

export class UserController {
  public static async getUser(req: Request, res: Response): Promise<Response> {
   
    const users = await new UserService().findAll();
    return res.status(200).json({ 
      success: true,
      status: 200,
      message: "Users fetched successfully",
      data: users,
    });
  }

  public static async postUser(req:Request, res:Response):Promise<Response>{
    console.log(req.body);
    const users = await new UserService().createData(req.body);
    return res.status(201).json({
      success: true,
      status: 201,
      message: "User created successfully",
      data: users,
    });
  }
}
