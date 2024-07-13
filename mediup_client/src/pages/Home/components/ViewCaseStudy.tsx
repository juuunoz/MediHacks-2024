import { FC, useEffect, useState } from 'react';
import ViewCaseStudyDetails from './CaseStudiesComponents/ViewCastStudyDetails';
import ViewCaseStudyQuestions from './CaseStudiesComponents/ViewCaseStudyQuestions';
import { CaseStudyCards, QuizQuestionAnswers } from '../../../models/CaseStudy';

interface Props {
  SingleCaseStudy: CaseStudyCards;
  QuizQandAs: QuizQuestionAnswers;
}

const ViewCaseStudy: FC<Props> = ({ SingleCaseStudy, QuizQandAs }) => {
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const [currPageNum, setCurrPageNum] = useState(1);
  const [startedQuiz, setStartedQuiz] = useState(false);

  // useEffect(() => {
  //   const pageArray = [];
  //   for (let i = 0; i < QuizQandAs[i].data.length; i++) {
  //     pageArray.push(i + 1);
  //   }
  //   setPages(pageArray);
  // }, []);
  const nextPage = () => {
    if (currPageNum === 1) {
      return;
    }

    setCurrPageNum(currPageNum - 1);
  };

  const prevPage = () => {
    if (currPageNum === pages.length) {
      return;
    }

    setCurrPageNum(currPageNum + 1);
  };

  return (
    <>
      <div className='h-5/6 w-4/5 flex flex-col items-center text-6xl'>
        {!startedQuiz ? (
          <ViewCaseStudyDetails
            SingleCaseStudy={SingleCaseStudy}
            setStartedQuiz={setStartedQuiz}
          />
        ) : (
          <ViewCaseStudyQuestions
            QuizQandAs={QuizQandAs}
            pages={pages}
            currPageNum={currPageNum}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        )}
      </div>
    </>
  );
};

export default ViewCaseStudy;
