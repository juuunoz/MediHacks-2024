// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../Store/AuthContext';
import { useState } from 'react';
import TempHeader from './components/tempHeader';
import SelectQuestionType from './components/SelectQuestionType';
import { ListOfQuestionTypes } from '../../models/Questions';
import CaseStudiesPage from './components/CaseStudiesPage';

const Home = () => {
  const [questionType, setQuestionType] = useState<ListOfQuestionTypes>(
    ListOfQuestionTypes.NotSelected
  );

  const selectQuestionTopic = () => {
    // TODO: call API to retrieve list of questions for the specific topic
    // TODO: create new state to store the retrieved data to be used by CaseStudiesPage
    setQuestionType(ListOfQuestionTypes.Selected);
  };

  const backToSelectQuestionTopics = () => {
    setQuestionType(ListOfQuestionTypes.NotSelected);
  };
  // const { authState, setAuthState } = useContext(AuthContext);

  // const navigate = useNavigate();

  // const navigateClick = () => {
  //   navigate('/login');
  // };

  // const updateAuthState = () => {
  //   const test = 'test';
  //   console.log(test);
  //   setAuthState(test);
  // };

  // const checkAuthState = () => {
  //   console.log(authState);
  // };

  return (
    <>
      <div className='w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-center items-center bg-white text-black'>
        <TempHeader />
        <div className='w-screen h-screen flex flex-col justify-center items-center border border-red-800'>
          {questionType === ListOfQuestionTypes.NotSelected ? (
            <SelectQuestionType selectQuestionTopic={selectQuestionTopic} />
          ) : (
            <CaseStudiesPage
              backToSelectQuestionTopics={backToSelectQuestionTopics}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
