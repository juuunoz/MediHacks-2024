import { FC } from 'react';
import { QuizQuestionAnswers } from '../../../../models/CaseStudy';

enum CheckAnswerState {
  Empty,
  Wrong,
  Correct
}

interface Props {
  QuizQandAs: QuizQuestionAnswers;
  pages: number[];
  currPageNum: number;
  nextPage: () => void;
  selectedQuestion: null | number;
  handleSelectQuestion: (selectQuestionNumber: number) => void;
  handleCheckAnswer: () => void;
  selectedAnswerArray: (null | number)[];
  checkAnswerState: CheckAnswerState;
  handleFinishQuiz: () => void;
}

const ViewCaseStudyQuestions: FC<Props> = ({
  QuizQandAs,
  pages,
  currPageNum,
  nextPage,
  selectedQuestion,
  handleSelectQuestion,
  handleCheckAnswer,
  selectedAnswerArray,
  checkAnswerState,
  handleFinishQuiz
}) => {
  // Ensure currPageNum is within bounds
  if (currPageNum < 1 || currPageNum > QuizQandAs.data.length) {
    return <div>Invalid page number</div>;
  }

  const currentPage = QuizQandAs.data[currPageNum - 1];
  console.log(selectedAnswerArray);
  return (
    <>
      <div className='flex flex-row h-full w-full'>
        <div className='w-1/2 h-full p-6 border-teal-200 border rounded-3xl mr-8 bg-slate-300 text-black'>
          <div className='text-4xl mb-8'>{currentPage.questionTitle}</div>
          <div className='text-3xl'>{currentPage.questionDescription}</div>
        </div>
        <div className='w-1/2 h-full justify-between flex flex-col rounded-3xl ml-8'>
          {currentPage.questions.questions.map((value, index) => {
            const currQuestionNumber = index + 1;
            const bgColor =
              selectedQuestion === currQuestionNumber
                ? 'bg-primary2'
                : checkAnswerState === CheckAnswerState.Correct &&
                  selectedAnswerArray[currPageNum - 1] === currQuestionNumber
                ? 'bg-green-600'
                : checkAnswerState === CheckAnswerState.Wrong &&
                  selectedAnswerArray[currPageNum - 1] === currQuestionNumber
                ? 'bg-red-400'
                : 'bg-primary1';
            return (
              <div
                className={`flex h-auto items-center m-4 p-6 border border-black rounded-full ${bgColor}`}
                onClick={() => handleSelectQuestion(currQuestionNumber)}
                key={currQuestionNumber}
              >
                <div>{currQuestionNumber}.</div>
                <div className='text-2xl ml-4 text-ellipsis overflow-auto max-h-20'>
                  {value.questionText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mt-4'>
        {/* <div onClick={() => prevPage()} className='mb-2'>
          {'<'}
        </div> */}
        {pages.map((value, index) => {
          const bgColor = currPageNum === value ? 'bg-primary2' : 'bg-primary1';
          return (
            <div
              className={`flex items-center justify-center w-20 h-20 px-4 mx-5 rounded-full text-4xl ${bgColor}`}
              key={index}
            >
              {value}
            </div>
          );
        })}
        {checkAnswerState === CheckAnswerState.Correct &&
        currPageNum === pages.length ? (
          <button
            className='absolute right-52 text-3xl rounded-full bg-green-400'
            onClick={() => handleFinishQuiz()}
          >
            Finish Quiz!
          </button>
        ) : checkAnswerState === CheckAnswerState.Correct &&
          currPageNum !== pages.length ? (
          <button
            className='absolute right-52 text-3xl rounded-full bg-green-400'
            onClick={() => nextPage()}
          >
            Next Question
          </button>
        ) : (
          <button
            className='absolute right-52 text-3xl rounded-full bg-button1'
            onClick={() => handleCheckAnswer()}
          >
            Check Answer
          </button>
        )}
      </div>
    </>
  );
};

export default ViewCaseStudyQuestions;
