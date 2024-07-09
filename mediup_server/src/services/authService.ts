import { NextFunction, ErrorRequestHandler, Request } from "express";
import { AuthUserResponse, jwtToken, GetUserAuthInfoRequest } from "../models/authModel";
const bcrypt = require("bcryptjs");
const AuthUserSchema = require("../models/authUserSchema");
const jwt = require('jsonwebtoken');
const passport = require('passport');

export class AuthService {
  public signUp = async (req: Request) => {
    try {
      const existingUser: AuthUserResponse = await AuthUserSchema.findOne({ userEmail: req.body.signupEmail});
  
      if (existingUser) {
        return 'This email is already in use'
      }
  
      const saltLength = 10;
      bcrypt.hash(req.body.signupPassword, saltLength, async(err: ErrorRequestHandler, hashedPassword: string) => {
        const user = new AuthUserSchema({
          userEmail: req.body.signupEmail,
          userPassword: hashedPassword,
          joinDate: new Date(),
          firstName: req.body.signupFirstName,
          lastName: req.body.signupLastName,
        })
        const result = await user.save();
        return result;
      })
  
    } catch (err) {
      console.log(err);
    }
  };

  public logIn: any = async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    passport.authenticate(
      'login',
      async (err: any, user: any, info: any) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
  
            return next(error);
          }
  
          req.login(
            user,
            { session: false },
            async (error: any) => {
              if (error) return next(error);
              const body = { 
                _id: user._id, 
                email: user.userEmail
              };
              const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
              return token;
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }

  public verifyToken = async (req: Request) => {
    const token: string = req.body.token;
    if (token) {
      const decodedToken: jwtToken = jwt.verify(token, process.env.JWT_SECRET);
      const now = Date.now();
  
      if (decodedToken.exp > now) {
        return 'Invalid token'
      } else {
        const body = { 
          _id: decodedToken.user._id, 
          email: decodedToken.user.email
        };
        const refreshToken: string = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
        return refreshToken;
      }
    } else {
      return "Invalid token"
    }
  }
}
