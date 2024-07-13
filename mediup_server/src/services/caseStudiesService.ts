import { CaseStudy } from "../models/caseStudiesModel";
import { CaseStudyCards } from "../classes/caseStudyCards";
import { Quiz } from "../classes/quiz"; 
const caseStudyCardSchema = require("../schema/caseStudyCardSchema");
const quizSchema = require("../schema/quizSchema");

export class CaseStudiesService {
  private caseStudies: CaseStudy[] = [];

  public getAllCaseStudies(): CaseStudy[] {
    return this.caseStudies;
  }

  public createCaseStudy(caseStudy: any): CaseStudy {
    // replace type CaseStudy later idk
    // takes in req.body as argument

    // open schema, classes, and data format pages on the side for viewing lol
    // then, create objects for both classes. fill it with information from req.body + whatever else
    // call get functions to fill out Schema's below
    // why? idk just trying out using classes for this. Do and learn

    // shouldnt these be in separate functions??? or will it all be under one object CaseStudy
    const caseCard = new caseStudyCardSchema({
      // slap in variables here
    })
    const quizStuff = new quizSchema({
      // slap in more variables here
    })

    return caseStudy
  }
}