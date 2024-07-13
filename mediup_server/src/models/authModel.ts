export interface AuthUserSignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  occupation: string;
  institution: string;
  specialization: string;
  password: string;
}

export interface AuthUserResponse {
  firstName: string;
  lastName: string;
  userEmail: string;
  occupation: string;
  institution: string;
  specialization: string;
  userPassword: string;
  coursesCompleted: number;
  verified: boolean;
  points: number;
  joinDate: Date;
  userID: string;
}

// export interface jwtToken {
//   exp: number;
//   iat: number;
//   user: {
//     _id: string;
//     email: string;
//   };
// }

export interface GetUserAuthInfoRequest extends Request {
  email?: string;
  login?: any;
}
