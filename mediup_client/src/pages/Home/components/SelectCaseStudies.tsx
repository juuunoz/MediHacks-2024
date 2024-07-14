import { FC } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CaseStudyCards } from '../../../models/CaseStudy';

interface Props {
  backToSelectQuestionTopics: () => void;
  toggleCreateQuiz: () => void;
  CaseStudiesCard: CaseStudyCards[];
  handleCaseStudyCardClick: (caseStudyID: string) => void;
}

const SelectCaseStudies: FC<Props> = ({
  backToSelectQuestionTopics,
  toggleCreateQuiz,
  CaseStudiesCard,
  handleCaseStudyCardClick
}) => {
  return (
    <>
      <div className='py-5 mb-16 w-full flex justify-center items-center text-6xl'>
        <div className='absolute left-8'>
          <button
            onClick={() => backToSelectQuestionTopics()}
            className='w-auto h-auto text-3xl bg-button2'
          >
            Go Back
          </button>
        </div>
        <div className='absolute right-8'>
          <button
            onClick={() => toggleCreateQuiz()}
            className='w-auto h-auto text-3xl bg-button3'
          >
            Create Quiz
          </button>
        </div>
        <div className='flex w-1/2 bg-primary1 mt-16'>
          <input
            className='w-full pl-2 bg-primary1'
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
              className='relative border-teal-200 border w-96 h-72 mx-10 rounded overflow-hidden'
            >
              <img
                src={eachCaseStudyCard.image}
                alt={'Case Study Image'}
                className='absolute w-96 h-72 object-cover opacity-30'
              />
              <div className='relative flex flex-col h-full w-full items-center p-2'>
                <div className='h-4/5 w-full'>
                  <div className='text-xl border h-20 overflow-auto border-teal-300 p-1 m-1'>
                    {eachCaseStudyCard.title}
                  </div>
                  <div className='h-32 overflow-auto border border-teal-300 p-1 m-1'>
                    {eachCaseStudyCard.shortDescription}
                  </div>
                </div>
                <div className='h-1/5 w-full flex flex-row justify-between items-center'>
                  <div>likes: {eachCaseStudyCard.likes}</div>
                  <button
                    type='button'
                    className='z-10 bg-button1'
                    onClick={() =>
                      handleCaseStudyCardClick(eachCaseStudyCard.caseStudyID)
                    }
                  >
                    Select
                  </button>
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
