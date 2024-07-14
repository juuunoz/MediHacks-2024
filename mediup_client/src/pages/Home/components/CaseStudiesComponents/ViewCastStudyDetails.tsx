import { FC } from 'react';
import { CaseStudyCards } from '../../../../models/CaseStudy';

interface Props {
  SingleCaseStudy: CaseStudyCards;
  setStartedQuiz: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewCaseStudyDetails: FC<Props> = ({
  SingleCaseStudy,
  setStartedQuiz
}) => {
  return (
    <div className='border-teal-200 border h-full w-full flex flex-col items-center p-8 justify-between'>
      <div>
        <div className='mb-16 text-6xl'>{SingleCaseStudy.title}</div>
        <div className='text-5xl'>{SingleCaseStudy.shortDescription}</div>
      </div>
      <button
        onClick={() => setStartedQuiz(true)}
        type='button'
        className='h-28 py-0 px-12 w-auto bg-button1'
      >
        Start Case Study!
      </button>
    </div>
  );
};

export default ViewCaseStudyDetails;
