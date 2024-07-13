import { Request, Response } from 'express';
import { CaseStudiesService } from '../services/caseStudiesService';
import { CaseStudy } from "../models/caseStudiesModel";

export class CaseStudiesController {
  private caseStudiesService: CaseStudiesService;

  constructor() {
    this.caseStudiesService = new CaseStudiesService();
  }

  public getAllCaseStudies = (req: Request, res: Response): void => {
    const caseStudies = this.caseStudiesService.getAllCaseStudies();
    res.json(caseStudies);
  }

  public createCaseStudy = (req: Request, res: Response): void => {
    // req.body


    const createdCaseStudy = this.caseStudiesService.createCaseStudy(req.body);
    res.status(201).json(createdCaseStudy);
  }
}