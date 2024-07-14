import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
  questionNumber: number;
  handleUpdateAnswerArray: (index: number, answer: number) => void;
  answerArray: (number | null)[];
}

const QuestionAnswers: FC<Props> = ({
  questionNumber,
  handleUpdateAnswerArray,
  answerArray
}) => {
  const bgColorQuestion1 =
    answerArray[questionNumber - 1] === 1 ? 'bg-green-600' : 'bg-primary2';
  const bgColorQuestion2 =
    answerArray[questionNumber - 1] === 2 ? 'bg-green-600' : 'bg-primary2';
  const bgColorQuestion3 =
    answerArray[questionNumber - 1] === 3 ? 'bg-green-600' : 'bg-primary2';
  const bgColorQuestion4 =
    answerArray[questionNumber - 1] === 4 ? 'bg-green-600' : 'bg-primary2';

  return (
    <>
      <div className='w-full my-4 flex flex-col items-center'>
        <div className='w-5/6 bg-primary1 py-8 px-16'>
          <input
            className='w-full my-4 pl-4 bg-slate-300 rounded-xl border-teal-400 border'
            placeholder='Question Title'
            name={`questionTitle_${questionNumber}`}
            required
          />
          <textarea
            className='w-full h-86 p-4 bg-slate-300 text-4xl rounded-xl border-teal-400 border'
            placeholder='Enter a Short Description on the Question'
            rows={4}
            name={`questionDescription_${questionNumber}`}
            required
          />
          <input
            className='hidden'
            name={`answer_${questionNumber}`}
            value={
              answerArray[questionNumber - 1] === null
                ? ''
                : answerArray[questionNumber - 1]?.toString()
            }
          />
        </div>
      </div>
      <div className='bg-primary1 w-5/6 py-8 px-16'>
        <div className='flex w-full items-center my-2'>
          <div className='flex w-1/2 h-14 mr-2 justify-center items-center'>
            <div
              className={`text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl border border-teal-400 ${bgColorQuestion1}`}
              onClick={() => {
                handleUpdateAnswerArray(questionNumber - 1, 1);
              }}
            >
              Question 1:
              {answerArray[questionNumber - 1] === 1 ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className='text-green-700 ml-8'
                />
              ) : null}
            </div>
            <input
              className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-slate-300'
              placeholder='Enter Answer 1'
              name={`answer1_${questionNumber}`}
              required
            />
          </div>
          <div className='flex w-1/2 h-14 justify-center items-center'>
            <div
              className={`text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl border border-teal-400 ${bgColorQuestion2}`}
              onClick={() => {
                handleUpdateAnswerArray(questionNumber - 1, 2);
              }}
            >
              Question 2:
              {answerArray[questionNumber - 1] === 2 ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className='text-green-700 ml-8'
                />
              ) : null}
            </div>
            <input
              className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-slate-300'
              placeholder='Enter Answer 2'
              name={`answer2_${questionNumber}`}
              required
            />
          </div>
        </div>
        <div className='flex w-full items-center my-2'>
          <div className='flex w-1/2 h-14 mr-2 justify-center items-center'>
            <div
              className={`text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl border border-teal-400 ${bgColorQuestion3}`}
              onClick={() => {
                handleUpdateAnswerArray(questionNumber - 1, 3);
              }}
            >
              Question 3:
              {answerArray[questionNumber - 1] === 3 ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className='text-green-700 ml-8'
                />
              ) : null}
            </div>
            <input
              className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-slate-300'
              placeholder='Enter Answer 3'
              name={`answer3_${questionNumber}`}
              required
            />
          </div>
          <div className='flex w-1/2 h-14 justify-center items-center'>
            <div
              className={`text-2xl w-1/2 h-full pl-4 flex items-center rounded-xl border border-teal-400 ${bgColorQuestion4}`}
              onClick={() => {
                handleUpdateAnswerArray(questionNumber - 1, 4);
              }}
            >
              Question 4:
              {answerArray[questionNumber - 1] === 4 ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className='text-green-700 ml-8'
                />
              ) : null}
            </div>
            <input
              className='text-2xl w-1/2 h-full ml-2 pl-2 mr-1 rounded-xl bg-slate-300'
              placeholder='Enter Answer 4'
              name={`answer4_${questionNumber}`}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAnswers;
