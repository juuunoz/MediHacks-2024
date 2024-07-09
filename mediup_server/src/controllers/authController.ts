import { NextFunction, Request, Response } from 'express';
import { GetUserAuthInfoRequest } from "../models/authModel";
import { AuthService } from '../services/authService';


export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public signUp = async (req: Request, res: Response) => {
    try {
      const response = await this.authService.signUp(req);
      res.status(200).send(JSON.stringify(response))
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public logIn: any = async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
      const response: string = await this.authService.logIn(req, res, next);
      res.status(200).send(JSON.stringify(response))
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public verifyToken = async (req: Request, res: Response) => {
    try {
      const response = await this.authService.verifyToken(req);
      res.status(200).send(JSON.stringify(response))
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public test = async (req: Request, res: Response) => {
    try {
      res.status(200).send(JSON.stringify('asdfasdf'));
    } catch (err) {
      res.status(500).send(err)
    }
  }
}
