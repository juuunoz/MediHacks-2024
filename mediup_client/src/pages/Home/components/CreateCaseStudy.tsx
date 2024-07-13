import { FC, useState } from 'react';
import { Specialization } from '../../../util/enums';
import QuestionAnswers from './CaseStudiesComponents/QuestionsAnswers';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCloseCaseStudy: () => void;
}

const CreateCaseStudy: FC<Props> = ({ handleSubmit, handleCloseCaseStudy }) => {
  const [numOfQuestions, setNumOfQuestions] = useState<number[]>([1]);
  const [answerArray, setAnswerArray] = useState<(number | null)[]>([null]);

  const handleAddQuestion = () => {
    const newNumOfQuestion = [...numOfQuestions];
    newNumOfQuestion.push(numOfQuestions.length + 1);

    const newAnswerArray = [...answerArray];
    newAnswerArray.push(null);

    setNumOfQuestions(newNumOfQuestion);
    setAnswerArray(newAnswerArray);
  };

  const handleDeleteQuestion = () => {
    const newNumOfQuestion = [...numOfQuestions];
    newNumOfQuestion.pop();

    const newAnswerArray = [...answerArray];
    newAnswerArray.pop();

    setNumOfQuestions(newNumOfQuestion);
    setAnswerArray(newAnswerArray);
  };

  const handleUpdateAnswerArray = (index: number, answer: number) => {
    const newAnswerArray = [...answerArray];
    newAnswerArray[index] = answer;

    setAnswerArray(newAnswerArray);
  };

  return (
    <>
      <div className='absolute left-4 top-32'>
        <button
          className=' h-18 text-3xl mt-8 mx-4'
          type='button'
          onClick={() => handleCloseCaseStudy()}
        >
          Go Back
        </button>
      </div>
      <div className='text-6xl pb-8'>Create Your Case Study</div>
      <div className='py-5 h-5/6 w-4/5 flex flex-col items-center text-6xl border border-black'>
        <form
          className='h-full w-full flex flex-col items-center overflow-auto'
          onSubmit={handleSubmit}
        >
          <div className='absolute right-4 top-32'>
            <button className='w-48 h-18 text-3xl mt-8' type='submit'>
              Submit
            </button>
          </div>
          <div className='w-full my-4 flex flex-col items-center'>
            <input
              className='w-4/5 mb-4 pl-4 bg-gray-200 rounded-xl border-gray-400 border'
              placeholder='Case Study Title'
              name='caseStudyTitle'
              required
            />
            <textarea
              className='w-4/5 h-86 p-4 bg-gray-200 text-4xl rounded-xl border-gray-400 border'
              placeholder='Enter a Short Description on the Case Study'
              rows={8}
              name='caseStudyDescription'
              required
            />
          </div>
          <div className='flex w-4/5 justify-center items-center my-4'>
            <div className='text-4xl w-1/2 mr-8 h-14 rounded-xl bg-gray-200 border-gray-400 border'>
              Select the Topic Specialization:
            </div>
            <select
              className='w-1/2 bg-gray-200 text-4xl h-14 rounded-xl border-gray-400 border'
              name='specilization'
              required
            >
              {Object.entries(Specialization).map(([key, value]) => {
                return (
                  <option className='text-lg' key={key}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          {Object.entries(numOfQuestions).map(([key, value]) => {
            return (
              <QuestionAnswers
                key={key}
                questionNumber={value}
                handleUpdateAnswerArray={handleUpdateAnswerArray}
                answerArray={answerArray}
              />
            );
          })}
          <div className='flex justify-end w-4/5'>
            {numOfQuestions.length == 1 ? null : (
              <button
                className='h-18 text-3xl mt-8 mx-4'
                type='button'
                onClick={() => handleDeleteQuestion()}
              >
                Remove Question
              </button>
            )}
            <button
              className='w-72 h-18 text-3xl mt-8'
              type='button'
              onClick={() => handleAddQuestion()}
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCaseStudy;
