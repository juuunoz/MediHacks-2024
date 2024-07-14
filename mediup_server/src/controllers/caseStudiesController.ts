import { Request, Response } from 'express';
import { CaseStudiesService } from '../services/caseStudiesService';
import { CreateCaseStudyRequest } from '../models/caseStudiesModel';

export class CaseStudiesController {
  private caseStudiesService: CaseStudiesService;

  constructor() {
    this.caseStudiesService = new CaseStudiesService();
  }

  public getAllCaseStudyCards = async (req: Request, res: Response) => {
    const specilization: string = req.body.specialization.toString();

    const caseStudies = await this.caseStudiesService.getAllCaseStudyCards(
      specilization
    );
    res.status(200).send(JSON.stringify(caseStudies));
  };

  public getCaseStudyQuestion = async (req: Request, res: Response) => {
    const caseStudyID: string = req.body.caseStudyID.toString();

    const caseStudyQuestions =
      await this.caseStudiesService.getCaseStudyQuestion(caseStudyID);
    res.status(200).send(JSON.stringify(caseStudyQuestions));
  };

  public createCaseStudy = async (req: Request, res: Response) => {
    const createCaseStudyRequest: CreateCaseStudyRequest = req.body;

    const createdCaseStudy = await this.caseStudiesService.createCaseStudy(
      createCaseStudyRequest
    );
    res.status(201).json(createdCaseStudy);
  };
}
