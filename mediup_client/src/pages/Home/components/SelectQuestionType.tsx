import { FC } from 'react';
import { questionTypes } from '../../../util/QuestionTypes';

interface Props {
  selectQuestionTopic: () => void;
}

const SelectQuestionType: FC<Props> = ({ selectQuestionTopic }) => {
  return (
    <>
      <div className='py-5 mb-24 w-full flex justify-center items-center text-6xl'>
        Select Question Type
      </div>
      <div className='h-[35rem] w-full px-64 flex flex-row flex-wrap'>
        {Object.entries(questionTypes).map(([key, eachQuestionType]) => {
          return (
            <div
              key={key}
              className='border border-blue-950 w-96 h-48 mr-20 rounded'
            >
              <div className='flex flex-col items-center'>
                <div className='text-3xl py-5'>
                  {eachQuestionType.questionType}
                </div>
                <div className='pt-5'>{eachQuestionType.shortDescription}</div>
              </div>
              <div className='my-3 mr-3 flex justify-end items-center'>
                <button className='' onClick={() => selectQuestionTopic()}>
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectQuestionType;
