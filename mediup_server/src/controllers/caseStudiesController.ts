import { Request, Response } from 'express';
import { CaseStudiesService } from '../services/caseStudiesService';
import { CreateCaseStudyRequest } from '../models/caseStudiesModel';

export class CaseStudiesController {
  private caseStudiesService: CaseStudiesService;

  constructor() {
    this.caseStudiesService = new CaseStudiesService();
  }

  public getAllCaseStudies = (req: Request, res: Response): void => {
    const caseStudies = this.caseStudiesService.getAllCaseStudies();
    res.json(caseStudies);
  };

  public createCaseStudy = async (req: Request, res: Response) => {
    const createCaseStudyRequest: CreateCaseStudyRequest = req.body;

    const createdCaseStudy = await this.caseStudiesService.createCaseStudy(
      createCaseStudyRequest
    );
    res.status(201).json(createdCaseStudy);
  };
}
