import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { CustomRequestInterface, UserInterface } from "../interfaces";

export class Gaurd {
  public static grantAccess(
    req: CustomRequestInterface,
    res: Response,
    next: NextFunction
  ) {
    //fetch access token from the req.headers

    const accessToken = req.headers.authorization?.split(" ")[1];

    //check if the access token exists

    if (!accessToken) {
      return res.status(500).json({
        success: false,
        message: "Please provide an access token with your request headers.",
      });
    }
    //decode the provided access token

    const decodedToken = jwt.verify(accessToken, jwtSecret);
    //if (invalid access token) return error response

    // console.log(decodedToken);
    if (!decodedToken) {
      // console.log('asjdksandlasnldkasndalks')
      return res.status(500).json({
        success: false,
        message: "Invalid or expired access token",
      });
    }
    req.user = decodedToken as UserInterface;
    //if (valid access token) next()
    next();
  }

  public static grantRole(role: string) {
    return (req: CustomRequestInterface, res: Response, next: NextFunction) => {
      if (req.user.role === role) next();
      else {
        return res.status(500).json({
          success: false,
          message: "Invalid or expired access token",
        });
      }
    };
  }
}
