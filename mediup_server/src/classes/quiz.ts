import {CaseStudyCards} from './caseStudyCards';
import {Specialization} from './specialization';
import * as Question from './question';

export class Quiz extends CaseStudyCards{
    // define Quiz properties with types -> inherits from casestudycards
    // list of questions of type question and the index of question
    private questions: Question.Question[];
    private questionIndex: number; // keep track of which question/number with index
    

    /**
   * Creates an instance of Quiz.
   * @param {string} title - The title of the quiz.
   * @param {string} caseStudyID - The ID of the case study associated with the quiz.
   * @param {string} creatorID - The ID of the creator of the quiz.
   * @param {number} likes - The number of likes or popularity score of the quiz.
   * @param {Specialization} specialization - The specialization or category of the quiz.
   * @param {string} shortDescription - A short description summarizing the quiz.
   * @param {Question[]} questions - An array of questions for the quiz.
   */
    constructor(
        title: string,
        caseStudyID: string, 
        creatorID: string,
        likes: number,
        specialization: Specialization,
        shortDescription: string, 
        questions: Question.Question[],
    ){
        // empty string for image
        super(title, caseStudyID, creatorID, likes, specialization, shortDescription, "");
        this.questions = questions;
        this.questionIndex = 0;

    }
}