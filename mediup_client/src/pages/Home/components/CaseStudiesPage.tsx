import { FC, useState } from 'react';
import axios from 'axios';
import SelectCaseStudies from './SelectCaseStudies';
import { PageEnum } from '../../../util/enums';
import CreateCaseStudy from './CreateCaseStudy';
import ViewCaseStudy from './ViewCaseStudy';

import {
  CaseStudyCardSubmitPackage,
  CaseStudyQuestionsSubmitPackage,
  CreateCaseStudyRequest,
  Question,
  CaseStudyCards,
  QuizQuestionAnswers
} from '../../../models/CaseStudy';
import { UserDetails } from '../../../models/User';

interface Props {
  caseStudyCards: CaseStudyCards[] | null;
  backToSelectQuestionTopics: () => void;
  loggedInUser: UserDetails | null;
}

const CaseStudiesPage: FC<Props> = ({
  caseStudyCards,
  backToSelectQuestionTopics,
  loggedInUser
}) => {
  const [pageToggle, setPageToggle] = useState<PageEnum>(PageEnum.Home);
  const [caseStudyQuestions, setCaseStudyQuestions] =
    useState<QuizQuestionAnswers | null>(null);
  const [selectedCaseStudyCard, setSelectedCaseStudyCard] =
    useState<CaseStudyCards | null>(null);

  const toggleCreateQuiz = () => {
    setPageToggle(PageEnum.CreateQuiz);
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

  const handleCaseStudyCardClick = async (caseStudyID: string) => {
    try {
      const url = '/api/casestudies/getCaseStudyQuestion';
      const body = { caseStudyID: caseStudyID };

      const response = await axios.put(url, body);
      const caseStudyQuestionsData: QuizQuestionAnswers = response.data[0];
      setCaseStudyQuestions(caseStudyQuestionsData);
      const selectedCaseStudyCard = caseStudyCards!.find(
        (caseStudyCard) => caseStudyCard.caseStudyID
      );
      if (selectedCaseStudyCard !== undefined) {
        setSelectedCaseStudyCard(selectedCaseStudyCard);
      }
    } catch (err) {
      console.log(err);
    }

    setPageToggle(PageEnum.ViewQuiz);
  };

  const handleCloseCaseStudy = () => {
    setPageToggle(PageEnum.Home);
  };

  const handleFinishQuiz = () => {
    setPageToggle(PageEnum.Home);
  };

  if (caseStudyCards === null) return null;

  return (
    <>
      {pageToggle === PageEnum.Home ? (
        <SelectCaseStudies
          backToSelectQuestionTopics={backToSelectQuestionTopics}
          toggleCreateQuiz={toggleCreateQuiz}
          CaseStudiesCard={caseStudyCards}
          handleCaseStudyCardClick={handleCaseStudyCardClick}
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
          SingleCaseStudy={selectedCaseStudyCard}
          QuizQandAs={caseStudyQuestions}
          handleCloseCaseStudy={handleCloseCaseStudy}
          handleFinishQuiz={handleFinishQuiz}
        />
      ) : null}
    </>
  );
};

export default CaseStudiesPage;
