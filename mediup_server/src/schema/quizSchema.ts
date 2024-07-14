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
  data: [
    {
      questionTitle: {
        type: String,
        required: true
      },
      questionDescription: {
        type: String,
        required: true
      },
      questions: {
        answer: {
          type: Number,
          required: true
        },
        questions: [
          {
            questionText: {
              type: String,
              required: true
            }
          }
        ]
      }
    }
  ]
});

const QuizSchema = mongoose.model('QuizSchema', quizSchema);

export default QuizSchema;
