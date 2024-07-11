import {CaseStudyCards} from './caseStudyCards';
import {Specialization} from './specialization';
import * as Question from './question';
import * as Content from './content';

export class Quiz extends CaseStudyCards{
    // define Quiz properties with types -> inherits from casestudycards
    // list of questions of type question and the index of question
    private questions: Question.Question[];
    private questionIndex: number; // keep track of which question/number with index
    private contents: Content.Content[];
    private contentIndex: number;
    
    /**
   * Creates an instance of Quiz.
   * @param {string} title - The title of the quiz.
   * @param {string} caseStudyID - The ID of the case study associated with the quiz.
   * @param {string} creatorID - The ID of the creator of the quiz.
   * @param {number} likes - The number of likes or popularity score of the quiz.
   * @param {Specialization} specialization - The specialization or category of the quiz.
   * @param {string} shortDescription - A short description summarizing the quiz.
   * @param {Question[]} questions - An array of questions for the quiz.
   * @param {Content[]} contents - An array of content for the quiz
   */
    constructor(
        title: string,
        caseStudyID: string, 
        creatorID: string,
        likes: number,
        specialization: Specialization,
        shortDescription: string, 
        questions: Question.Question[],
        contents: Content.Content[]
    ){
        // empty string for image
        super(title, caseStudyID, creatorID, likes, specialization, shortDescription, "");
        this.questions = questions;
        this.questionIndex = 0;
        this.contents = contents;
        this.contentIndex = 0;

    }
    // ************************ REGULAR GET FUNCTIONS *************************
    public getQuestions(): Question.Question[]{
        return this.questions;
    }

    public getQuestionIndex(): number{
        return this.questionIndex;
    }

    public getContents(): Content.Content[]{
        return this.contents;
    }

    public getContentIndex(): number{
        return this.contentIndex;
    }
    /** function to get the current (single) question */
    public getCurrentQuestion(): Question.Question{
        return this.questions[this.questionIndex];
    }
    /** function to get the current (single) content */
    public getCurrentContent(): Content.Content{
        return this.contents[this.contentIndex];
    }

    /** function to get the nth content in the array
     * @param {number} n - the 0 indexed content returned
     */
    public getNthContent(n: number): Content.Content{
        // if the nth question exists
        if (n >= this.contents.length) {
            throw new Error('N value cannot exceed index limit for content list')
        }
        else if (n < 0){
            throw new Error('N cannot be a negative value')
        }
        // otherwise throw an error
        return this.contents[n];
    }

    /** return the nth question in the array 
     * @param {number} n - the 0 indexed question returned
    */
    public getNthQuestion(n: number): Question.Question{
        // if the nth question exists
        if (n >= this.questions.length) {
            throw new Error('N value cannot exceed index limit for question list')
        }
        else if (n < 0){
            throw new Error('N cannot be a negative value')
        }
        // otherwise throw an error
        return this.questions[n];
    }

    // ************************ FUNCTIONS FOR ANSWERS *****************************

    /**
     * returns whether or not the user inputted the correct answer
     * @param {string | string[]} answer - answer given by user
     * @returns {boolean} - true or false
     */
    public answerCurrentQuestion(answer: string | string[]): boolean {
        // get the current question
        switch (this.getCurrentQuestion().type) {
        // switch case depending on the question type (EDIT THIS IF NEW QUESTION TYPES ARE ADDED)
          case Question.QuestionType.MultipleChoice:
            return this.answerMC(answer as string);
          case Question.QuestionType.ShortAnswer:
            return this.answerShortAnswer(answer as string);
          case Question.QuestionType.MatchingPairs:
            return this.answerPairs(answer as string[]);
          default:
            throw new Error(`No such question type: ${this.getCurrentQuestion().type}`);
        }
      }

      /** 
       * multiple choice questions are currently written so that the options are in a string array
       * and the answer is simply a string
       * MAIN QUESTION TYPE USED FOR DEMO AND PROTOTYPE
       * @param {string} answer - the answer in string form
       * @return {boolean} true or false whether answer is correct
       */
      private answerMC(answer: string): boolean {
        // grab current question as MC interface
        const currentQuestion = this.getCurrentQuestion() as Question.MultipleChoiceQuestion;
        if (answer === currentQuestion.correctAnswer) {
          return true;
        }
        return false;
      }

        /** 
       * short answer simply have a string answer until AI is implemented.
       * Better to not use this question type for now until later on (v2?)
       * @param {string} answer - the answer in string form
       * @return {boolean} true or false whether answer is correct
       */
      private answerShortAnswer(answer: string): boolean {
        // grab current question as short answer interface
        const currentQuestion = this.getCurrentQuestion() as Question.ShortAnswerQuestion;
        if (answer === currentQuestion.correctAnswer) {
          return true;
        }
        return false;
      }

        /** 
       * matching pairs question is currently a list of dictionaries (right and left value)
       * this function checks if the pairs created by the user are the same as the ones defined
       * in the question 
       * @param {string} answer - the answer in string form
       * @return {boolean} true or false whether answer is correct
       */

      // HAVE TO CHANGE THIS FUNCTION STILL
      private answerPairs(answer: string[]): boolean {
        const currentQuestion = this.getCurrentQuestion() as Question.MatchingPairsQuestion;
        const correctPairs = currentQuestion.pairs.map(pair => `${pair.left}-${pair.right}`);
        const userPairs = answer.map(pair => pair.toLowerCase().trim());
        
        if (this.equalArray(correctPairs, userPairs)) {
          return true;
        }
        return false;
      }

      /**
       * checks if the two arrays are the same
       * @param {string[]} a1 - string array
       * @param {string[]} a2 - 2nd string array
       * @returns {boolean} true or false
       */
      private equalArray(a1: string[], a2: string[]): boolean {
        if (a1.length !== a2.length) return false;
        // takes every (left, right) in a1 and makes sure every value is mapped in a2
        return a1.every((left, right) => left === a2[right]);
      }

// ************************ QUIZ TRAVERSAL AND OTHER FUNCTIONALITY **********************
      public nextQuestion(): void{




        
      }
}