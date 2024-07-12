import mongoose, { Schema, Document } from 'mongoose';
import {cardQuizBase} from './cardQuizBase';

/* eslint-disable @typescript-eslint/no-unused-vars */
import {authUserSchema} from './authUserSchema'; // leave this here
import { Specialization } from '../classes/specialization';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface caseStudyCard extends cardQuizBase {
  image: string;
}

const caseStudyCardSchema: Schema = new Schema({
  title:{
    type: String,
    required: true
  },
  caseStudyID: {
    type: String,
    required: true
  },
  creatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authUserSchema',
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  specialization: {
    type: Specialization,
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
})

const caseStudyCard = mongoose.model<caseStudyCard & Document>('caseStudyCard', caseStudyCardSchema);

export default caseStudyCard;