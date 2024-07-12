import { Specialization } from './specialization';
const CaseStudyCardSchema = require("../schema/caseStudyCardSchema");
import { v4 as uuidv4 } from 'uuid';

export class CaseStudyCards {
  protected title: string;
  protected creatorID: string;
  protected likes: number;
  protected specialization: Specialization;
  protected shortDescription: string;
  protected creationDate: Date;
  protected caseStudyID: string;
  protected image: string;

  private caseStudyCannotBeFound = 'Case study not found';
  private caseStudyError = 'An error occured while updating the case study';

  constructor(
    title: string,
    creatorID: string,
    likes: number,
    specialization: Specialization,
    shortDescription: string, 
    image: string = ''
  ) {
    this.title = title;
    this.creatorID = creatorID;
    this.likes = likes;
    this.specialization = specialization;
    this.shortDescription = shortDescription;
    this.image = image;
    this.creationDate = new Date();
    this.caseStudyID = uuidv4();
  }

// ******************************************** GET FUNCTIONS **********************************************
  public getTitle(): string{
    return this.title;
  }

  public getCaseStudyID(): string {
    return this.caseStudyID;
  }

  public getCreatorID(): string {
    return this.creatorID;
  }

  public getLikes(): number {
    return this.likes;
  }

  public getSpecialization(): Specialization {
    return this.specialization;
  }

  public getShortDescription(): string {
    return this.shortDescription;
  }

  public getImage(): string {
    return this.image;
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