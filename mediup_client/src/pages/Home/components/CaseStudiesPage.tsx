import { FC, useState } from 'react';
import axios from 'axios';
import SelectCaseStudies from './SelectCaseStudies';
import { PageEnum } from '../../../util/enums';
import CreateCaseStudy from './CreateCaseStudy';
import ViewCaseStudy from './ViewCaseStudy';

import { CaseStudiesCard } from '../../../util/SampleCaseStudies';
import { SampleQuizQandAs } from '../../../util/SampleQuizQandAs';
import { SingleCaseStudy } from '../../../util/SingleCaseStudy';
import {
  CaseStudyCardSubmitPackage,
  CaseStudyQuestionsSubmitPackage,
  CreateCaseStudyRequest,
  Question
} from '../../../models/CaseStudy';
import { UserDetails } from '../../../models/User';

interface Props {
  backToSelectQuestionTopics: () => void;
  loggedInUser: UserDetails | null;
}

const CaseStudiesPage: FC<Props> = ({
  backToSelectQuestionTopics,
  loggedInUser
}) => {
  const [pageToggle, setPageToggle] = useState<PageEnum>(PageEnum.Home);

  const toggleCreateQuiz = () => {
    setPageToggle(PageEnum.CreateQuiz);
  };

  const toggleViewQuiz = () => {
    setPageToggle(PageEnum.ViewQuiz);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const caseStudyTitle = (e.target as HTMLFormElement).caseStudyTitle.value;
    const caseStudyDescription = (e.target as HTMLFormElement)
      .caseStudyDescription.value;
    const specilization = (e.target as HTMLFormElement).specilization.value;

    const caseStudyCard: CaseStudyCardSubmitPackage = {
      title: caseStudyTitle,
      shortDescription: caseStudyDescription,
      specilization: specilization,
      creatorID: loggedInUser!.userID
    };

    const caseStudyQuestions: CaseStudyQuestionsSubmitPackage[] = [];

    let continueIteration = true;
    let questionNumber = 1;

    while (continueIteration) {
      const currQuestionTitle = (e.target as HTMLFormElement)[
        `questionTitle_${questionNumber}`
      ];
      if (currQuestionTitle === undefined) {
        continueIteration = false;
        break;
      }

      const eachQuestion: CaseStudyQuestionsSubmitPackage = {
        questionTitle: (e.target as HTMLFormElement)[
          `questionTitle_${questionNumber}`
        ].value,
        questionDescription: (e.target as HTMLFormElement)[
          `questionDescription_${questionNumber}`
        ].value,
        questions: {
          answer: parseInt(
            (e.target as HTMLFormElement)[`answer_${questionNumber}`].value
          ),
          questions: []
        }
      };

      let continueEachQuestionIteration = true;
      let eachAnswerNumber = 1;

      while (continueEachQuestionIteration) {
        const currQuestion = (e.target as HTMLFormElement)[
          `answer${eachAnswerNumber}_${questionNumber}`
        ];
        if (currQuestion === undefined) {
          continueEachQuestionIteration = false;
          break;
        }

        const answerText: Question = {
          questionText: (e.target as HTMLFormElement)[
            `answer${eachAnswerNumber}_${questionNumber}`
          ].value
        };

        eachQuestion.questions.questions.push(answerText);

        eachAnswerNumber++;
      }

      caseStudyQuestions.push(eachQuestion);
      questionNumber++;
    }

    try {
      const url = '/api/casestudies/create';
      const body: CreateCaseStudyRequest = {
        caseStudy: caseStudyCard,
        questions: caseStudyQuestions
      };
      const response = await axios.post(url, body);
      const createCaseStudyData = response.data;
      console.log(createCaseStudyData);

      handleCloseCaseStudy();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseCaseStudy = () => {
    setPageToggle(PageEnum.Home);
  };

  const handleFinishQuiz = () => {
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
          handleCloseCaseStudy={handleCloseCaseStudy}
          handleFinishQuiz={handleFinishQuiz}
        />
      ) : null}
    </>
  );
};

export default CaseStudiesPage;
