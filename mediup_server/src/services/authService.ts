import {
  AuthUserResponse,
  // jwtToken,
  // GetUserAuthInfoRequest,
  AuthUserSignUpRequest
} from '../models/authModel';
const bcrypt = require('bcryptjs');
import AuthUserSchema from '../schema/authUserSchema';
import { v4 as uuidv4 } from 'uuid';

export class AuthService {
  public signUp = async (signUpInformation: AuthUserSignUpRequest) => {
    try {
      const existingUser: AuthUserResponse | null =
        await AuthUserSchema.findOne({
          userEmail: signUpInformation.email
        });

      if (existingUser) {
        return 'This email is already in use';
      }

      const saltLength = 10;
      const hashedPassword: string = await new Promise((resolve, reject) => {
        bcrypt.hash(
          signUpInformation.password,
          saltLength,
          (err: any, hash: any) => {
            if (err) reject(err);
            resolve(hash);
          }
        );
      });

      const newUser = new AuthUserSchema({
        firstName: signUpInformation.firstName,
        lastName: signUpInformation.lastName,
        userEmail: signUpInformation.email,
        userPassword: hashedPassword,
        occupation: signUpInformation.occupation,
        institution: signUpInformation.institution,
        specialization: signUpInformation.specialization,
        coursesCompleted: 0,
        verified: false,
        points: 0,
        joinDate: new Date(),
        userID: uuidv4()
      });

      const result: AuthUserResponse = await newUser.save();
      return result;
    } catch (err) {
      console.log(err);
      return 'Error';
    }
  };

  // public verifyToken = async (req: Request) => {
  //   const token: string = req.body.token;
  //   if (token) {
  //     const decodedToken: jwtToken = jwt.verify(token, process.env.JWT_SECRET);
  //     const now = Date.now();

  //     if (decodedToken.exp > now) {
  //       return 'Invalid token';
  //     } else {
  //       const body = {
  //         _id: decodedToken.user._id,
  //         email: decodedToken.user.email
  //       };
  //       const refreshToken: string = jwt.sign(
  //         { user: body },
  //         process.env.JWT_SECRET,
  //         { expiresIn: '7d' }
  //       );

  //       return refreshToken;
  //     }
  //   } else {
  //     return 'Invalid token';
  //   }
  // };
}
