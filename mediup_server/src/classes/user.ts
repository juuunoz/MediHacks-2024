import { Specialization } from './specialization';

export class User {
    // Define user properties with types
    firstName: string;
    lastName: string;
    email: string;
    occupation: string;
    institution: string;
    specialization: Specialization; // category chosen by user when account is first created
    coursesCompleted: number; // number of courses completed
    verified: boolean; // whether or not the user can create quizzes
    points: number; // max of 1.7976931348623157×10^308 -> points accumulated by user
  
    // ******************************* CONSTRUCTOR **************************************
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        occupation: string,
        institution: string,
        specialization: Specialization,
        coursesCompleted: number = 0,
        verified: boolean = false,
        points: number = 0
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
      }
    
    // *************************** ALL GET FUNCTIONS *********************************
    getFirstName(): string {
      return this.firstName;
    }
  
    getLastName(): string {
      return this.lastName;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getOccupation(): string {
      return this.occupation;
    }
  
    getInstitution(): string {
      return this.institution;
    }
  
    getSpecialization(): string {
      return this.specialization;
    }
  
    getCoursesCompleted(): number {
      return this.coursesCompleted;
    }
  
    isVerified(): boolean {
      return this.verified;
    }
  
    getPoints(): number {
      return this.points;
    }

    // Method to display full name
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    // Method to display user info
    getUserInfo(): string {
      return `Name: ${this.getFullName()}, Email: ${this.email}, Occupation: ${this.occupation}, Institution: ${this.institution}, Specialization: ${this.specialization}, Courses Completed: ${this.coursesCompleted}, Verified: ${this.verified}, Points: ${this.points}`;
    }

// ****************************** ADD, DELETE, UPDATE FUNCTIONS **************************

    updateFirstName(newFirstName: string): void {
      this.firstName = newFirstName;
    }

    updateLastName(newLastName: string): void {
      this.lastName = newLastName;
    }

    updateEmail(newEmail: string): void {
      this.email = newEmail;
    }

    updateOccupation(newOccupation: string): void {
      this.occupation = newOccupation;
    }

    updateInstitution(newInstitution: string): void {
      this.institution = newInstitution;
    }

    updateSpecialization(newSpecialization: Specialization): void {
      this.specialization = newSpecialization;
    }

    updateCoursesCompleted(newCoursesCompleted: number): void {
      this.coursesCompleted = newCoursesCompleted;
    }

    updateVerification(newStatus: boolean): void {
      this.verified = newStatus;
    }

    // Method to add points
    addPoints(points: number): void {
      this.points += points;
    }

    // Method to delete points (ie, if user uses points)
    deletePoints(points: number): void {
        if (this.points - points < 0) {
          throw new Error("Insufficient points. The total number of points cannot go below 0.");
        }
        this.points -= points;
    }
  }
  