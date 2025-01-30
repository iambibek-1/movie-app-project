import {Request, Response } from "express";

export class AuthController {
  public static async signup(req: Request, res: Response): Promise<Response> {
    //Implementstion

    /* 1.Extract the user data from the request body,
    2.Check if the user already exists in the database,
    hint:use the User.findone() service method to check if the user exists.
    3.if the user already exists, return an error response,
    4.if the user does not exist:
    4.1 Hash the user's password and create a new user in the database.
    hint:Use the bcrypt.hash() method to hash the user's pasword.
    hint:Use the User.create() service method to create a new user in the database.
    5.Return a success response.
*/

    return res.status(200).json({
      message: "Signup successful. You can proceed to login",
    });
  }
}
