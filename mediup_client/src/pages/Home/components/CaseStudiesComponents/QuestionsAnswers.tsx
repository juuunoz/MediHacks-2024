import { FC } from 'react';

interface Props {
  questionNumber: number;
}

const QuestionAnswers: FC<Props> = ({ questionNumber }) => {
  return (
    <>
      <div className='w-full my-4 flex flex-col items-center'>
        <input
          className='w-4/5 my-4 pl-4 bg-gray-200 rounded-xl border-gray-400 border'
          placeholder='Question Title'
          name={`questionTitle_${questionNumber}`}
          required
        />
        <textarea
          className='w-4/5 h-86 p-4 bg-gray-200 text-4xl rounded-xl border-gray-400 border'
          placeholder='Enter a Short Description on the Question'
          rows={4}
          name={`questionDescription_${questionNumber}`}
          required
        />
      </div>
      <div className='flex w-4/5 items-center my-2'>
        <div className='flex w-1/2 h-14 mr-2 justify-center items-center'>
          <div className='text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl bg-gray-200'>
            Question 1:
          </div>
          <input
            className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-gray-200'
            placeholder='Enter Answer 1'
            name={`answer1_${questionNumber}`}
            required
          />
        </div>
        <div className='flex w-1/2 h-14 justify-center items-center'>
          <div className='text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl bg-gray-200'>
            Question 2:
          </div>
          <input
            className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-gray-200'
            placeholder='Enter Answer 2'
            name={`answer2_${questionNumber}`}
            required
          />
        </div>
      </div>
      <div className='flex w-4/5 items-center my-2'>
        <div className='flex w-1/2 h-14 mr-2 justify-center items-center'>
          <div className='text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl bg-gray-200'>
            Question 3:
          </div>
          <input
            className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-gray-200'
            placeholder='Enter Answer 3'
            name={`answer3_${questionNumber}`}
            required
          />
        </div>
        <div className='flex w-1/2 h-14 justify-center items-center'>
          <div className='text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl bg-gray-200'>
            Question 4:
          </div>
          <input
            className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-gray-200'
            placeholder='Enter Answer 4'
            name={`answer4_${questionNumber}`}
            required
          />
        </div>
      </div>
    </>
  );
};

export default QuestionAnswers;
