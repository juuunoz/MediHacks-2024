import CaseStudyCardSchema from '../schema/caseStudyCardSchema';
import QuizSchema from '../schema/quizSchema';
import {
  CaseStudyCardSubmitPackage,
  CaseStudyQuestionsSubmitPackage,
  CreateCaseStudyRequest
} from '../models/caseStudiesModel';
import { v4 as uuidv4 } from 'uuid';

export class CaseStudiesService {
  public getAllCaseStudies() {
    return;
  }

  public createCaseStudy = async (
    createCaseStudyRequest: CreateCaseStudyRequest
  ) => {
    const caseStudyCardRequest: CaseStudyCardSubmitPackage =
      createCaseStudyRequest.caseStudy;
    const caseStudyQuestions: CaseStudyQuestionsSubmitPackage[] =
      createCaseStudyRequest.questions;

    const caseStudyID = uuidv4();
    const creationDate = new Date();
    try {
      const newCaseStudy = new CaseStudyCardSchema({
        title: caseStudyCardRequest.title,
        caseStudyID: caseStudyID,
        creatorID: caseStudyCardRequest.creatorID,
        likes: 0,
        specialization: caseStudyCardRequest.specilization,
        shortDescription: caseStudyCardRequest.shortDescription,
        creationDate: creationDate,
        image: 'test'
      });

      const newCaseStudyQuestion = new QuizSchema({
        caseStudyID: caseStudyID,
        data: caseStudyQuestions
      });

      const caseStudyCardResult: any = await newCaseStudy.save();
      const caseStudyQuestionResult: any = await newCaseStudyQuestion.save();

      const caseStudyPackage: CreateCaseStudyRequest = {
        caseStudy: caseStudyCardResult,
        questions: caseStudyQuestionResult
      };

      return caseStudyPackage;
    } catch (err) {
      console.log(err);
    }
  };
}
