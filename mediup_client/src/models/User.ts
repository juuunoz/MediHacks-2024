export interface LoginResponse {
  token: string;
  userDetails: UserDetails;
}

export interface UserDetails {
  userID: string;
  firstName: string;
  lastName: string;
  userEmail: string;
  specialization: string;
  occupation: string;
  institution: string;
  userPassword: string;
  verified: boolean;
  points: number;
  coursesCompleted: number;
  joinDate: Date;
}
