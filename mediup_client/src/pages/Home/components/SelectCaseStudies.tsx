import { FC } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CaseStudiesCard } from '../../../util/SampleCaseStudies';

interface Props {
  backToSelectQuestionTopics: () => void;
  toggleCreateQuiz: () => void;
}

const SelectCaseStudies: FC<Props> = ({
  backToSelectQuestionTopics,
  toggleCreateQuiz
}) => {
  return (
    <>
      <div className='py-5 mb-16 w-full flex justify-center items-center text-6xl'>
        <div className='absolute left-8'>
          <button
            onClick={() => backToSelectQuestionTopics()}
            className='w-auto h-auto text-3xl bg-gray-200'
          >
            Go Back
          </button>
        </div>
        <div className='absolute right-8'>
          <button
            onClick={() => toggleCreateQuiz()}
            className='w-auto h-auto text-3xl bg-gray-200'
          >
            Create Quiz
          </button>
        </div>
        <div className='flex w-1/2 bg-gray-200'>
          <input
            className='bg-gray-200 w-full pl-2'
            placeholder='Search Case Studies'
          ></input>
          <div className='w-24 flex justify-center items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <div className='h-[40rem] w-[88rem] flex flex-row flex-wrap'>
        {Object.entries(CaseStudiesCard).map(([key, eachCaseStudyCard]) => {
          return (
            <div
              key={key}
              className='border border-black w-96 h-72 mx-10 rounded'
            >
              <img
                src={eachCaseStudyCard.image}
                alt={'Case Study Image'}
                className='absolute w-96 h-72 object-cover opacity-40'
              />
              <div className='flex flex-col h-full w-full items-center p-4'>
                <div className='h-4/5 w-full'>
                  <div className='text-xl pb-2'>{eachCaseStudyCard.title}</div>
                  <div>{eachCaseStudyCard.shortDescription}</div>
                </div>
                <div className='h-1/5 w-full flex flex-row justify-between items-center'>
                  <div>likes: {eachCaseStudyCard.likes}</div>
                  <div>
                    <button>Select</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectCaseStudies;
