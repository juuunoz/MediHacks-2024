import { Specialization } from './specialization';
const CaseStudyCardSchema = require("../schema/caseStudyCardSchema");

export class CaseStudyCards {
  private caseStudyID: string;
  private creatorID: string;
  private likes: number;
  private specialization: Specialization;
  private shortDescription: string;
  private longDescription: string;
  private image: string;
  private creationDate: Date;

  private caseStudyCannotBeFound = 'Case study not found';
  private caseStudyError = 'An error occured while updating the case study';

  constructor(
    caseStudyID: string, 
    creatorID: string,
    likes: number,
    specialization: Specialization,
    shortDescription: string, 
    longDescription: string, 
    image: string,
  ) {
    this.caseStudyID = caseStudyID;
    this.creatorID = creatorID;
    this.likes = likes;
    this.specialization = specialization;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.image = image;
    this.creationDate = new Date()
  }

  public setLikes = (likes: number) => {
    this.likes = likes;
  }

  // TODO: temp / does not belong here
  public createCaseStudyCard = async () => {
    const newCaseStudy = new CaseStudyCardSchema({
      caseStudyID: this.caseStudyID,
      creatorID: this.creatorID,
      likes: this.likes,
      specialization: this.specialization,
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
      image: this.image,
      creationDate: this.creationDate
    })

    try {
      const result = await newCaseStudy.save();
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: temp / does not belong here
  public updateCaseStudyCardsWithLikes = async (caseStudyID: string) => {
    try {
      const updatedCaseStudy = await CaseStudyCardSchema.findByIdAndUpdate(
        caseStudyID, 
        { $set: { likes: this.likes }}, 
        { new:true } 
      )
      
      if (!updatedCaseStudy) {
        return this.caseStudyCannotBeFound;
      }

    } catch (err) {
      return this.caseStudyError;
    }
  }
}