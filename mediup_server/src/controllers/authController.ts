import { NextFunction, Request, Response } from 'express';
import {
  AuthUserResponse,
  AuthUserSignUpRequest,
  GetUserAuthInfoRequest
} from '../models/authModel';
import { AuthService } from '../services/authService';
const jwt = require('jsonwebtoken');
const passport = require('passport');
import AuthUserSchema from '../schema/authUserSchema';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public signUp = async (req: Request, res: Response) => {
    const signUpInformation: AuthUserSignUpRequest = req.body;

    try {
      const response: string | AuthUserResponse = await this.authService.signUp(
        signUpInformation
      );
      res.status(200).send(JSON.stringify(response));
    } catch (err) {
      res.status(500).send(err);
    }
  };

  public logIn: any = async (
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) => {
    passport.authenticate('login', async (err: any, user: any, info: any) => {
      try {
        if (err || !user) {
          return res
            .status(400)
            .json({ message: 'An error occurred.', error: err });
        }

        req.login(user, { session: false }, async (error: any) => {
          if (error) return next(error);

          const body = { _id: user._id, email: user.userEmail };
          const token = jwt.sign({ user: body }, process.env.JWT_SECRET!, {
            expiresIn: '7d'
          });

          const userDetailResponse: AuthUserResponse | null =
            await AuthUserSchema.findOne({
              userEmail: user.userEmail
            });

          const response = {
            token: token,
            userDetails: userDetailResponse
          };

          return res.json(response);
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  };

  // public verifyToken = async (req: Request, res: Response) => {
  //   try {
  //     const response = await this.authService.verifyToken(req);
  //     res.status(200).send(JSON.stringify(response));
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // };

  public test = async (req: Request, res: Response) => {
    try {
      res.status(200).send(JSON.stringify('asdfasdf'));
    } catch (err) {
      res.status(500).send(err);
    }
  };
}
