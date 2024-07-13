import mongoose from 'mongoose';

const authUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  // IF THERES AN ERROR ITS PROBABLY HERE
  specialization: {
    type: String, // something about mongoose not directly working with enums
    required: true
  },
  coursesCompleted: {
    type: Number,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

const AuthUserSchema = mongoose.model('AuthUserSchema', authUserSchema);

export default AuthUserSchema;
