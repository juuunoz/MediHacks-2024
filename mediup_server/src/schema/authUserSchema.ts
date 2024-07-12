import mongoose from "mongoose";
import { Specialization } from "../classes/specialization";

export const authUserSchema = new mongoose.Schema({
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
  specialization: {
    type: Specialization,
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
})

const AuthUserSchema = mongoose.model('AuthUserSchema', authUserSchema);

module.exports = AuthUserSchema;