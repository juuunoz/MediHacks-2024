import mongoose, { Schema, Document } from 'mongoose';
import { cardQuizBase } from './cardQuizBase';

/* eslint-disable @typescript-eslint/no-unused-vars */
import authUserSchema from './authUserSchema'; // leave this here
import { Specialization } from '../classes/specialization';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface caseStudyCard extends cardQuizBase {
  image: string;
}

const caseStudyCardSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  caseStudyID: {
    type: String,
    required: true
  },
  creatorID: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  specialization: {
    type: String, // Using String type for enum handling
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const CaseStudyCardSchema = mongoose.model(
  'CaseStudyCardSchema',
  caseStudyCardSchema
);

export default CaseStudyCardSchema;
