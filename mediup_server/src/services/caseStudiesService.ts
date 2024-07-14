import CaseStudyCardSchema from '../schema/caseStudyCardSchema';
import QuizSchema from '../schema/quizSchema';
import {
  CaseStudyCardSubmitPackage,
  CaseStudyQuestionsSubmitPackage,
  CreateCaseStudyRequest
} from '../models/caseStudiesModel';
import { v4 as uuidv4 } from 'uuid';

export class CaseStudiesService {
  public getAllCaseStudyCards = async (specialization: string) => {
    try {
      const filter = specialization ? { specialization } : {};
      const caseStudies = await CaseStudyCardSchema.find(filter);
      return caseStudies;
    } catch (err) {
      console.log(err);
    }
  };

  public getCaseStudyQuestion = async (caseStudyID: string) => {
    try {
      const filter = caseStudyID ? { caseStudyID } : {};
      const caseStudies = await QuizSchema.find(filter);
      return caseStudies;
    } catch (err) {
      console.log(err);
    }
  };

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
        image:
          'https://cdn.discordapp.com/attachments/1261133002549760050/1261933223223754763/image.png?ex=6694c266&is=669370e6&hm=508a70df94808f69ac2976f6e0f912982e4f9015938e576d1a82910f803c47bb&'
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
