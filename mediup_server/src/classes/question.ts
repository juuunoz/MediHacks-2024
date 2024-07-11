/** 
 * Main interface for Question. has the question itself and the question type.
*/
export interface Question {
  questionText: string;
  type: QuestionType;
}

/**
 * has the different question types available
 */
// FEEL FREE TO ADD MORE JUST MAKE SURE YOU CREATE THE INTERFACE FOR IT AS WELL. AND ADD
// WHATEVER FUNCTIONS THAT MAY NEED TO BE ADDED INTO THE QUIZ.TS CLASS
export enum QuestionType {
  MultipleChoice = "MultipleChoice",
  ShortAnswer = "ShortAnswer",
  MatchingPairs = "MatchingPairs",
}

/**
 * Interface for multiple choice type questions
 */
export interface MultipleChoiceQuestion extends Question {
  options: string[];
  correctAnswer: string;
}

/**
 * Interface for short answer type questions
 */
export interface ShortAnswerQuestion extends Question {
  correctAnswer: string;
}

/**
 * Interface for matching pairs type questions
 */
export interface MatchingPairsQuestion extends Question {
  pairs: { left: string; right: string }[];
}
