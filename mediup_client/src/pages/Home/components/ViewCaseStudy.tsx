import { FC, useEffect, useState } from 'react';
import ViewCaseStudyDetails from './CaseStudiesComponents/ViewCastStudyDetails';
import ViewCaseStudyQuestions from './CaseStudiesComponents/ViewCaseStudyQuestions';
import { CaseStudyCards, QuizQuestionAnswers } from '../../../models/CaseStudy';

enum CheckAnswerState {
  Empty,
  Wrong,
  Correct
}

interface Props {
  SingleCaseStudy: CaseStudyCards;
  QuizQandAs: QuizQuestionAnswers;
  handleCloseCaseStudy: () => void;
  handleFinishQuiz: () => void;
}

const ViewCaseStudy: FC<Props> = ({
  SingleCaseStudy,
  QuizQandAs,
  handleCloseCaseStudy,
  handleFinishQuiz
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const [currPageNum, setCurrPageNum] = useState(1);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<null | number>(null);
  const [selectedAnswerArray, setSelectedAnswerArray] = useState<
    (null | number)[]
  >([null]);
  const [checkAnswerState, setCheckAnswerState] = useState<CheckAnswerState>(
    CheckAnswerState.Empty
  );

  useEffect(() => {
    const pageArray = [];
    const tempAnswerArray = [];
    for (let i = 0; i < QuizQandAs.data.length; i++) {
      pageArray.push(i + 1);
      tempAnswerArray.push(null);
    }
    setPages(pageArray);
    setSelectedAnswerArray(tempAnswerArray);
  }, [QuizQandAs]);

  // const prevPage = () => {
  //   if (currPageNum === 1 || checkAnswerState === null) {
  //     return;
  //   }
  //   setSelectedQuestion(null);
  //   setCurrPageNum(currPageNum - 1);
  // };

  const nextPage = () => {
    if (
      currPageNum === pages.length ||
      checkAnswerState !== CheckAnswerState.Correct
    ) {
      return;
    }
    setCheckAnswerState(CheckAnswerState.Empty);
    setSelectedQuestion(null);
    setCurrPageNum(currPageNum + 1);
  };

  const handleSelectQuestion = (selectQuestionNumber: number) => {
    if (checkAnswerState === CheckAnswerState.Correct) {
      return;
    }
    setSelectedQuestion(selectQuestionNumber);
  };

  const handleCheckAnswer = () => {
    if (selectedQuestion === null) {
      return;
    }
    setSelectedQuestion(null);
    if (
      selectedQuestion === QuizQandAs.data[currPageNum - 1].questions.answer
    ) {
      setCheckAnswerState(CheckAnswerState.Correct);
    } else {
      setCheckAnswerState(CheckAnswerState.Wrong);
    }
    const tempSelectedAnswerArray = [...selectedAnswerArray];
    tempSelectedAnswerArray[currPageNum - 1] = selectedQuestion;
    setSelectedAnswerArray(tempSelectedAnswerArray);
  };

  return (
    <>
      <div className='h-5/6 w-4/5 flex flex-col items-center text-6xl mt-24'>
        <div className='absolute left-6 top-36'>
          <button
            onClick={() => handleCloseCaseStudy()}
            className='w-auto h-auto text-3xl bg-button2'
          >
            Back
          </button>
        </div>
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
            // prevPage={prevPage}
            selectedQuestion={selectedQuestion}
            handleSelectQuestion={handleSelectQuestion}
            handleCheckAnswer={handleCheckAnswer}
            selectedAnswerArray={selectedAnswerArray}
            checkAnswerState={checkAnswerState}
            handleFinishQuiz={handleFinishQuiz}
          />
        )}
      </div>
    </>
  );
};

export default ViewCaseStudy;
