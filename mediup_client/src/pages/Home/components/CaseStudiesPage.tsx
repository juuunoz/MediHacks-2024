import { FC, useState } from 'react';
import SelectCaseStudies from './SelectCaseStudies';
import { PageEnum } from '../../../util/enums';
import CreateCaseStudy from './CreateCaseStudy';

interface Props {
  backToSelectQuestionTopics: () => void;
}

const CaseStudiesPage: FC<Props> = ({ backToSelectQuestionTopics }) => {
  const [pageToggle, setPageToggle] = useState<PageEnum>(PageEnum.Home);

  const toggleCreateQuiz = () => {
    setPageToggle(PageEnum.CreateQuiz);
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
        />
      ) : null}
      {pageToggle === PageEnum.CreateQuiz ? (
        <CreateCaseStudy
          handleSubmit={handleSubmit}
          handleCloseCaseStudy={handleCloseCaseStudy}
        />
      ) : null}
    </>
  );
};

export default CaseStudiesPage;
