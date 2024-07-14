import { FC } from 'react';
import { questionTypes } from '../../../util/QuestionTypes';

interface Props {
  selectQuestionTopic: (selectedSpec: string) => void;
}

const SelectQuestionType: FC<Props> = ({ selectQuestionTopic }) => {
  return (
    <>
      <div className='py-5 mb-24 w-full flex justify-center items-center text-6xl'>
        Select Type of Case Studies to Learn!
      </div>
      <div className='h-[35rem] w-full px-64 flex flex-row flex-wrap'>
        {Object.entries(questionTypes).map(([key, eachQuestionType]) => {
          return (
            <div
              key={key}
              className='border border-blue-950 w-96 h-60 mr-20 flex flex-col justify-between rounded'
            >
              <img
                src={eachQuestionType.image}
                alt={'Case Study Image'}
                className='absolute h-60 w-96 object-cover opacity-30 border-teal-200 border'
              />
              <div className='flex flex-col items-center'>
                <div className='text-3xl py-2'>
                  {eachQuestionType.questionType}
                </div>
                <div className='pt-5 text-md px-4'>
                  {eachQuestionType.shortDescription}
                </div>
              </div>
              <div className='my-3 mr-3 flex justify-end items-center'>
                <button
                  className='z-10 bg-button1'
                  onClick={() => selectQuestionTopic(eachQuestionType.spec)}
                >
                  Learn!
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
