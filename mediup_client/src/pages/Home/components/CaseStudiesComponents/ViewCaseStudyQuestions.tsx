import { FC } from 'react';
import { QuizQuestionAnswers } from '../../../../models/CaseStudy';

interface Props {
  QuizQandAs: QuizQuestionAnswers;
  pages: number[];
  currPageNum: number;
  nextPage: () => void;
  prevPage: () => void;
  selectedQuestion: null | number;
  handleSelectQuestion: (selectQuestionNumber: number) => void;
}

const ViewCaseStudyQuestions: FC<Props> = ({
  QuizQandAs,
  pages,
  currPageNum,
  nextPage,
  prevPage,
  selectedQuestion,
  handleSelectQuestion
}) => {
  // Ensure currPageNum is within bounds
  if (currPageNum < 1 || currPageNum > QuizQandAs.data.length) {
    return <div>Invalid page number</div>;
  }

  const currentPage = QuizQandAs.data[currPageNum - 1];
  return (
    <>
      <div className='flex flex-row h-full w-full'>
        <div className='border w-1/2 h-full p-6 border-gray-800 rounded-3xl mr-8'>
          <div className='text-4xl mb-8'>{currentPage.questionTitle}</div>
          <div className='text-3xl'>{currentPage.questionDescription}</div>
        </div>
        <div className='w-1/2 h-full justify-between flex flex-col rounded-3xl ml-8'>
          {currentPage.questions.questions.map((value, index) => {
            const currQuestionNumber = index + 1;
            const bgColor =
              selectedQuestion === currQuestionNumber
                ? 'bg-purple-300'
                : 'bg-gray-200 ';
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
        <div onClick={() => nextPage()} className='mb-2'>
          {'<'}
        </div>
        {pages.map((value, index) => {
          const bgColor =
            currPageNum === value ? 'bg-purple-900' : 'bg-purple-400';
          return (
            <div
              className={`flex items-center justify-center w-20 h-20 px-4 mx-5 rounded-full text-4xl ${bgColor}`}
              key={index}
            >
              {value}
            </div>
          );
        })}
        <div onClick={() => prevPage()} className='mb-2'>
          {'>'}
        </div>
      </div>
    </>
  );
};

export default ViewCaseStudyQuestions;
