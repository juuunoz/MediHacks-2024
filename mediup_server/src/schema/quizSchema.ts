import mongoose, { Schema, Document } from 'mongoose';
import {cardQuizBase} from './cardQuizBase';
import * as Question from '../classes/question';
import * as Content from '../classes/content';
import { Specialization } from '../classes/specialization';

/* eslint-disable @typescript-eslint/no-unused-vars */
import {authUserSchema} from './authUserSchema'; // leave this here
/* eslint-enable @typescript-eslint/no-unused-vars */

interface quizData extends cardQuizBase {
  questions: Question.Question[]
  contents: Content.Content[]
}

const quizSchema: Schema = new Schema({
  title:{
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
  caseStudyID: {
    type: String,
    required: true
  },
  // questions: {
  //   type: Question.Question[],
  //   required: true
  // },
  // contents: {
  //   type: Content.Content[],
  //   required: true
  // }
})

const quizData = mongoose.model<quizData & Document>('quizData', quizSchema);

export default quizData;