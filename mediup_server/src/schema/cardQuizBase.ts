import { Specialization } from "../classes/specialization";
import mongoose from 'mongoose';

export interface cardQuizBase {
    title: string;
    caseStudyID: string;
    userID: mongoose.Schema.Types.ObjectId;
    likes: number;
    specialization: Specialization;
    shortDescription: string;
  }
  