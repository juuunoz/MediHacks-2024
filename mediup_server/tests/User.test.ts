// User.test.ts

import { User } from '../src/classes/user';
import { Specialization } from '../src/classes/specialization';

// *************************** GET FUNCTION TEST CASES -> learning unit testing in typescript ***************************************
describe('User Class Get Methods', () => {
    // Test case for getFirstName() method
    it('should return correct data', () => {
      // Create a User instance for testing
      const user = new User('Julia', 'Peanut', 'Julia.Kay@peanut.com', 'Student', 'Peanut University', Specialization.Optometrist);
      
      // Call the method and assert the expected result
      const firstName = user.getFirstName();
      expect(firstName).toBe('Julia');
      const lastName = user.getLastName();
      expect(lastName).toBe('Peanut');
      const email = user.getEmail();
      expect(email).toBe('Julia.Kay@peanut.com');
      const occupation = user.getOccupation();
      expect(occupation).toBe('Student');
      const institution = user.getInstitution();
      expect(institution).toBe('Peanut University');
      const specialization = user.getSpecialization();
      expect(specialization).toBe("Optometry");
      const coursesCompleted = user.getCoursesCompleted();
      expect(coursesCompleted).toBe(0);
      const verified = user.isVerified();
      expect(verified).toBe(false);
      const points = user.getPoints();
      expect(points).toBe(0);
      const fullName = user.getFullName();
      expect(fullName).toBe('Julia Peanut');
      const userInfo = user.getUserInfo();
      expect(userInfo).toBe('Name: Julia Peanut, Email: Julia.Kay@peanut.com, Occupation: Student, Institution: Peanut University, Specialization: Optometry, Courses Completed: 0, Verified: false, Points: 0');
    });
});

// ************************** UPDATE FUNCTION TESTS -> these tests are better*******************************
describe('User Class Update Methods', () => {
  let user: User;

  beforeEach(() => {
    user = new User('Juno', 'AndroidStudioEnjoyer', 'Junooz@peanut.com', 'Family Doctor', '', Specialization.Doctor);
  });

  it('first name should be updated', () => {
    const newFirstName = 'Juyes';
    user.updateFirstName(newFirstName);
    expect(user.getFirstName()).toBe(newFirstName);
  });

  it('last name should be updated', () => {
    const newLastName = 'AndroidStudioHater';
    user.updateLastName(newLastName);
    expect(user.getLastName()).toBe(newLastName);
  });

  it('email should be updated', () => {
    const newEmail = 'junooz2@peanut.com';
    user.updateEmail(newEmail);
    expect(user.getEmail()).toBe(newEmail);
  });

  it('occupation should be updated', () => {
    const newOccupation = 'Dentist';
    user.updateOccupation(newOccupation);
    expect(user.getOccupation()).toBe(newOccupation);
  });

  it('institution should be updated', () => {
    const newInstitution = 'University of Dentistry';
    user.updateInstitution(newInstitution);
    expect(user.getInstitution()).toBe(newInstitution);
  });

  it('specialization should be updated', () => {
    const newSpecialization = Specialization.Dentist;
    user.updateSpecialization(newSpecialization);
    expect(user.getSpecialization()).toBe(newSpecialization);
  });

  it('number of courses completed should be updated', () => {
    const newCompletedCourses = 10;
    user.updateCoursesCompleted(newCompletedCourses);
    expect(user.getCoursesCompleted()).toBe(newCompletedCourses);
  });

  it('verification should be updated', () => {
    user.updateVerification(true);
    expect(user.isVerified()).toBeTruthy();
  });

  it('points added should be updated', () => {
    const newPointsAccumulated = 100;
    user.addPoints(newPointsAccumulated);
    expect(user.getPoints()).toBe(newPointsAccumulated);
  });

  it('points deleted should be updated', () => {
    const pointsUsed = 50;
    user.addPoints(100)
    user.deletePoints(pointsUsed);
    expect(user.getPoints()).toBe(50);
  });

  it('points deleted should throw an error', () => {
    const pointsUsed = 50;
    expect(() => {user.deletePoints(pointsUsed);}).toThrow("Insufficient points. The total number of points cannot go below 0.");
  });
});



