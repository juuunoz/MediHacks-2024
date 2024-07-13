export interface CaseStudyCards {
  caseStudyID: string;
  creatorID: string;
  likes: number;
  title: string;
  specialization: string;
  shortDescription: string;
  image: string;
  creationDate: string;
}

interface Questions {
  answer: number;
  questions: {
    questionText: string;
  }[];
}

export interface QuizQuestionAnswers {
  caseStudyID: string;
  data: {
    questionTitle: string;
    questionDescription: string;
    questions: Questions;
  }[];
}
