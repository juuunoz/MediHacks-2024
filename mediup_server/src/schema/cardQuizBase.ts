import { Specialization } from "../classes/specialization";
import mongoose from 'mongoose';

export interface cardQuizBase {
    title: string;
    creatorID: mongoose.Schema.Types.ObjectId;
    likes: number;
    specialization: String; // not sure if this should be of type Specialization
    shortDescription: string;
    creationDate: Date;
    caseStudyID: string;
  }
  