// User.test.ts

import { User } from '../src/classes/user';
import { Specialization } from '../src/classes/specialization';

// *************************** GET FUNCTION TEST CASES ***************************************
describe('User Class', () => {
    // Test case for getFirstName() method
    it('should return correct first name', () => {
      // Create a User instance for testing
      const user = new User('Julia', 'Peanut', 'Julia.Kay@peanut.com', 'Student', 'Peanut University', Specialization.PeanutSpecialist);
      
      // Call the method and assert the expected result
      const firstName = user.getFirstName();
      expect(firstName).toBe('Julia');
    });
});