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

export interface Question {
  questionText: string;
}

export interface Questions {
  answer: number;
  questions: Question[];
}

export interface QuizQuestionAnswers {
  caseStudyID: string;
  data: {
    questionTitle: string;
    questionDescription: string;
    questions: Questions;
  }[];
}

export interface CaseStudyCardSubmitPackage {
  title: string;
  shortDescription: string;
  specilization: string;
  creatorID: string;
}

export interface CaseStudyQuestionsSubmitPackage {
  questionTitle: string;
  questionDescription: string;
  questions: Questions;
  answer: number;
}

export interface CreateCaseStudyRequest {
  caseStudy: CaseStudyCardSubmitPackage;
  questions: CaseStudyQuestionsSubmitPackage[];
}
