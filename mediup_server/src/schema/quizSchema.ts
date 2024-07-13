import mongoose, { Schema, Document } from 'mongoose';
import { cardQuizBase } from './cardQuizBase';
import * as Question from '../classes/question';
import * as Content from '../classes/content';

/* eslint-disable @typescript-eslint/no-unused-vars */
import authUserSchema from './authUserSchema'; // leave this here
/* eslint-enable @typescript-eslint/no-unused-vars */

interface quizData extends cardQuizBase {
  questions: Question.Question[];
  contents: Content.Content[];
}

const quizSchema: Schema = new Schema({
  caseStudyID: {
    type: String,
    required: true
  },
  data: {
    type: Map,
    of: {
      questionTitle: {
        type: String,
        required: true
      },
      questionDescription: {
        type: String,
        required: true
      },
      questions: {
        type: Map,
        of: {
          questionText: {
            type: String,
            required: true
          }
        }
      },
      answer: {
        type: Number,
        required: true
      }
    }
  }
});

const quizData = mongoose.model<quizData & Document>('quizData', quizSchema);

export default quizData;
