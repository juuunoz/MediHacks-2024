import { FC, useEffect, useState } from 'react';
import ViewCaseStudyDetails from './CaseStudiesComponents/ViewCastStudyDetails';
import ViewCaseStudyQuestions from './CaseStudiesComponents/ViewCaseStudyQuestions';
import { CaseStudyCards, QuizQuestionAnswers } from '../../../models/CaseStudy';

interface Props {
  SingleCaseStudy: CaseStudyCards;
  QuizQandAs: QuizQuestionAnswers;
}

const ViewCaseStudy: FC<Props> = ({ SingleCaseStudy, QuizQandAs }) => {
  const [pages, setPages] = useState<number[]>([]);
  const [currPageNum, setCurrPageNum] = useState(1);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<null | number>(1);

  useEffect(() => {
    const pageArray = [];
    for (let i = 0; i < QuizQandAs.data.length; i++) {
      pageArray.push(i + 1);
    }
    setPages(pageArray);
  }, [QuizQandAs]);

  const nextPage = () => {
    if (currPageNum === 1 || selectedQuestion === null) {
      return;
    }
    setSelectedQuestion(null);
    setCurrPageNum(currPageNum - 1);
  };

  const prevPage = () => {
    if (currPageNum === pages.length || selectedQuestion === null) {
      return;
    }
    setSelectedQuestion(null);
    setCurrPageNum(currPageNum + 1);
  };

  const handleSelectQuestion = (selectQuestionNumber: number) => {
    setSelectedQuestion(selectQuestionNumber);
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
            selectedQuestion={selectedQuestion}
            handleSelectQuestion={handleSelectQuestion}
          />
        )}
      </div>
    </>
  );
};

export default ViewCaseStudy;
