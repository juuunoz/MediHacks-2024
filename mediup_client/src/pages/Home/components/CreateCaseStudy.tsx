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
      <div className='absolute left-6 top-36'>
        <button
          onClick={() => handleCloseCaseStudy()}
          className='w-auto h-auto text-3xl bg-primary1'
        >
          Back
        </button>
      </div>
      <div className='text-6xl mb-8 mt-12'>Create Your Case Study</div>
      <div className='h-[75%] w-4/5 flex flex-col items-center text-6xl text-black'>
        <form
          className='h-full w-full flex flex-col items-center overflow-auto'
          onSubmit={handleSubmit}
        >
          <div className='absolute right-4 top-32'>
            <button
              className='w-48 h-18 text-3xl mt-8 bg-button1'
              type='submit'
            >
              Submit
            </button>
          </div>
          <div className='w-full my-4 flex flex-col items-center'>
            <div className='w-5/6 bg-primary1 py-8 px-16'>
              <input
                className='w-full mb-4 pl-4 bg-slate-300 rounded-xl border-teal-400 border'
                placeholder='Case Study Title'
                name='caseStudyTitle'
                required
              />
              <textarea
                className='w-full h-86 p-4 bg-slate-300 text-4xl rounded-xl border-teal-400 border'
                placeholder='Enter a Short Description on the Case Study'
                rows={8}
                name='caseStudyDescription'
                required
              />
            </div>
          </div>
          <div className='w-5/6 bg-primary1 py-8 px-16 flex flex-row'>
            <div className='text-4xl w-1/2 mr-8 h-14 pl-4 rounded-xl flex items-center bg-primary2 border-teal-400 border'>
              Select the Topic Specialization:
            </div>
            <select
              className='w-1/2 bg-slate-300 text-4xl h-14 pl-4 rounded-xl border-teal-400 border'
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
                className='h-18 text-3xl mt-8 mx-4 bg-button2'
                type='button'
                onClick={() => handleDeleteQuestion()}
              >
                Remove Question
              </button>
            )}
            <button
              className='w-72 h-18 text-3xl mt-8 bg-button3'
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
