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
  // IF THERES AN ERROR ITS PROBABLY HERE
  specialization: {
    type: String, // something about mongoose not directly working with enums
    enum: Object.values(Specialization).map(value => value.toString()), // Allow only enum values
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


// DEALS WITH ENUM VALUE SPECIALIZATION
// Set toJSON and toObject transforms to convert enum to string
authUserSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.specialization = ret.specialization.toString(); // Convert enum value to string
    return ret;
  }
});

authUserSchema.set('toObject', {
  transform: function(doc, ret) {
    ret.specialization = ret.specialization.toString(); // Convert enum value to string
    return ret;
  }
});

const AuthUserSchema = mongoose.model('AuthUserSchema', authUserSchema);

export default AuthUserSchema;