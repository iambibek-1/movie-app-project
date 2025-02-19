import { Request, Response } from "express";
import { UserService } from "../../services";
import bcrypt from "bcrypt";
import { jwtSecret } from "../../config";
import jwt from "jsonwebtoken";

export class AuthController {
  public static async signup(req: Request, res: Response): Promise<Response> {
    //Implementation
    const UserData = req.body;

    const userExists = await new UserService().findOne(UserData.email);

    if (userExists) {
      //return error response
      return res.status(500).json({
        message: `User with email: ${UserData.email} already exists!!`,
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(UserData.password, 12);

    const user = await new UserService().createData({
      name: UserData.name,
      email: UserData.email,
      password: hashedPassword,
      role: UserData.role,
    });
    return res.status(200).json({
      message: "Signup successful. You can proceed to login",
      success: true,
      data: user,
    });
  }


  public static async login(req: Request, res: Response): Promise<Response> {
    //Implementation
    const loginUser = req.body;
    const loginExist = await new UserService().findOne(loginUser.email);

    if (!loginExist) {
      return res.status(500).json({
        message: `User with email: ${loginUser.email} not signed in!!`,
        success: false,
      });
    }
    const doesPasswordMatch = await bcrypt.compare(
      loginUser.password,
      loginExist.password
    );
    if (!doesPasswordMatch) {
      return res.status(500).json({
        message: "Invalid Password",
        success: false,
      });
    }
    // console.log(loginExist);
    const accessToken = jwt.sign(
      {
        id: loginExist.id,
        email: loginExist.email,
        name: loginExist.name,
        role: loginExist.role,
      },
      jwtSecret,
      { expiresIn: "1d" }
    );

    // console.log(accessToken);
    return res.status(200).json({
      message: "Login successful.",
      success: true,
      data: {
        accessToken,
      },
    });
  }
}