import { CaseStudy } from '../models/caseStudiesModel';

export class CaseStudiesService {
  private caseStudies: CaseStudy[] = [];

  public getAllCaseStudies(): CaseStudy[] {
    return this.caseStudies;
  }

  public createCaseStudy(caseStudy: Omit<CaseStudy, 'id'>): CaseStudy {
    const newCaseStudy = {
      ...caseStudy,
      id: this.caseStudies.length + 1
    };
    this.caseStudies.push(newCaseStudy);
    return newCaseStudy;
  }
}
