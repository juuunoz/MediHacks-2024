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
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    const newCaseStudy: Omit<CaseStudy, 'id'> = {
      title,
    };

    const createdCaseStudy = this.caseStudiesService.createCaseStudy(newCaseStudy);
    res.status(201).json(createdCaseStudy);
  }
}