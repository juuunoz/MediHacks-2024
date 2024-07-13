import { FC, useState } from 'react';
import SelectCaseStudies from './SelectCaseStudies';
import { PageEnum } from '../../../util/enums';
import CreateCaseStudy from './CreateCaseStudy';
import ViewCaseStudy from './ViewCaseStudy';

import { CaseStudiesCard } from '../../../util/SampleCaseStudies';
import { SampleQuizQandAs } from '../../../util/SampleQuizQandAs';
import { SingleCaseStudy } from '../../../util/SingleCaseStudy';

interface Props {
  backToSelectQuestionTopics: () => void;
}

const CaseStudiesPage: FC<Props> = ({ backToSelectQuestionTopics }) => {
  const [pageToggle, setPageToggle] = useState<PageEnum>(PageEnum.Home);

  const toggleCreateQuiz = () => {
    console.log('createquiz');
    setPageToggle(PageEnum.CreateQuiz);
  };

  const toggleViewQuiz = () => {
    console.log('test');
    setPageToggle(PageEnum.ViewQuiz);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const caseStudyTitle = (e.target as HTMLFormElement).caseStudyTitle.value;
    const caseStudyDescription = (e.target as HTMLFormElement)
      .caseStudyDescription.value;
    const specilization = (e.target as HTMLFormElement).specilization.value;

    console.log(caseStudyTitle, caseStudyDescription, specilization);
    // todo: submit to backend.
  };

  const handleCloseCaseStudy = () => {
    setPageToggle(PageEnum.Home);
  };

  return (
    <>
      {pageToggle === PageEnum.Home ? (
        <SelectCaseStudies
          backToSelectQuestionTopics={backToSelectQuestionTopics}
          toggleCreateQuiz={toggleCreateQuiz}
          toggleViewQuiz={toggleViewQuiz}
          CaseStudiesCard={CaseStudiesCard}
        />
      ) : null}
      {pageToggle === PageEnum.CreateQuiz ? (
        <CreateCaseStudy
          handleSubmit={handleSubmit}
          handleCloseCaseStudy={handleCloseCaseStudy}
        />
      ) : null}
      {pageToggle === PageEnum.ViewQuiz ? (
        <ViewCaseStudy
          SingleCaseStudy={SingleCaseStudy}
          QuizQandAs={SampleQuizQandAs}
        />
      ) : null}
    </>
  );
};

export default CaseStudiesPage;
