import { Specialization } from './specialization';
import { v4 as uuidv4 } from 'uuid';

/**
 * represents a user on the site
 */
export class User {
    // Define user properties with types
    private firstName: string;
    private lastName: string;
    private email: string;
    private occupation: string; // Student or occupation (or empty string)
    private institution: string; // hospital/workplace or school (or empty string)
    private specialization: Specialization; // category chosen by user when account is first created
    private coursesCompleted: number; // number of courses completed
    private verified: boolean; // whether or not the user can create quizzes
    private points: number; // max of 1.7976931348623157×10^308 -> points accumulated by user
    private userID: string; //2^122 possible unique ID's
  
    // ******************************* CONSTRUCTOR **************************************
      /**
     * Creates an instance of User.
     * @param {string} firstName - The first name of the user.
     * @param {string} lastName - The last name of the user.
     * @param {string} email - The email address of the user.
     * @param {string} occupation - The occupation of the user.
     * @param {string} institution - The institution the user is affiliated with.
     * @param {string} specialization - The specialization of the user.
     * @param {number} coursesCompleted - The number of courses completed (default = 0)
     * @param {boolean} verified - if the user is verified to make quizzes (default = false)
     * @param {number} points - accumulated points by user (default = 0)
     */
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        occupation: string,
        institution: string,
        specialization: Specialization,
        coursesCompleted: number = 0,
        verified: boolean = false,
        points: number = 0,
      ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.occupation = occupation;
        this.institution = institution;
        this.specialization = specialization;
        this.coursesCompleted = coursesCompleted;
        this.verified = verified;
        this.points = points;
        this.userID = uuidv4(); // user v4 which generates random UUID
      }
    
    // *************************** ALL GET FUNCTIONS *********************************
    public getFirstName(): string {
      return this.firstName;
    }
  
    public getLastName(): string {
      return this.lastName;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getOccupation(): string {
      return this.occupation;
    }
  
    public getInstitution(): string {
      return this.institution;
    }
  
    public getSpecialization(): string {
      return this.specialization;
    }
  
    public getCoursesCompleted(): number {
      return this.coursesCompleted;
    }
  
    public isVerified(): boolean {
      return this.verified;
    }
  
    public getPoints(): number {
      return this.points;
    }

    public getUserID(): string {
      return this.userID;
    }

    // Method to display full name
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    // Method to display user info
    public getUserInfo(): string {
      return `Name: ${this.getFullName()}, Email: ${this.email}, Occupation: ${this.occupation}, Institution: ${this.institution}, Specialization: ${this.specialization}, Courses Completed: ${this.coursesCompleted}, Verified: ${this.verified}, Points: ${this.points}`;
    }

// ****************************** ADD, DELETE, UPDATE FUNCTIONS **************************

    public updateFirstName(newFirstName: string): void {
      this.firstName = newFirstName;
    }

    public updateLastName(newLastName: string): void {
      this.lastName = newLastName;
    }

    public updateEmail(newEmail: string): void {
      this.email = newEmail;
    }

    public updateOccupation(newOccupation: string): void {
      this.occupation = newOccupation;
    }

    public updateInstitution(newInstitution: string): void {
      this.institution = newInstitution;
    }

    public updateSpecialization(newSpecialization: Specialization): void {
      this.specialization = newSpecialization;
    }

    public updateCoursesCompleted(newCoursesCompleted: number): void {
      this.coursesCompleted = newCoursesCompleted;
    }

    public updateVerification(newStatus: boolean): void {
      this.verified = newStatus;
    }

    // Method to add points
    public addPoints(points: number): void {
      this.points += points;
    }

    // Method to delete points (ie, if user uses points)
    public deletePoints(points: number): void {
        if (this.points - points < 0) {
          throw new Error("Insufficient points. The total number of points cannot go below 0.");
        }
        this.points -= points;
    }
  }
  