import { useState } from 'react';
import NavBar from './components/NavBar';
import SelectQuestionType from './components/SelectQuestionType';
import { ListOfQuestionTypes } from '../../util/enums';
import CaseStudiesPage from './components/CaseStudiesPage';
import LoginAndSignup from './components/LoginAndSignup';
import axios from 'axios';
import { LoginResponse, UserDetails } from '../../models/User';
import { CaseStudyCards } from '../../models/CaseStudy';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState<UserDetails | null>(null);
  const [loginSignupToggle, setLoginSignupToggle] = useState(true);
  const [questionType, setQuestionType] = useState<ListOfQuestionTypes>(
    ListOfQuestionTypes.NotSelected
  );
  const [caseStudyCards, setCaseStudyCards] = useState<CaseStudyCards[] | null>(
    null
  );

  const selectQuestionTopic = async (specType: string) => {
    try {
      const url = '/api/casestudies/getAllCards';
      const body = { specialization: specType };

      const response = await axios.put(url, body);
      const caseStudyCardData: CaseStudyCards[] = response.data;
      console.log(caseStudyCardData);
      setCaseStudyCards(caseStudyCardData);
    } catch (err) {
      console.log(err);
    }
    setQuestionType(ListOfQuestionTypes.Selected);
  };

  const backToSelectQuestionTopics = () => {
    setQuestionType(ListOfQuestionTypes.NotSelected);
  };

  const handleSignupToggle = () => {
    // Testing purposes
    console.log('anna loves peanuts');
    setLoginSignupToggle(false);
  };

  // triggers login page if pressed
  const handleLoginToggle = () => {
    // Testing purposes
    console.log('anna loves tofu');
    setLoginSignupToggle(true);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = (e.target as HTMLFormElement).firstName.value;
    const lastName = (e.target as HTMLFormElement).lastName.value;
    const email = (e.target as HTMLFormElement).Email.value;
    const occupation = (e.target as HTMLFormElement).occupation.value;
    const institution = (e.target as HTMLFormElement).institution.value;
    const specialization = (e.target as HTMLFormElement).specialization.value;
    const password1 = (e.target as HTMLFormElement).password1.value;
    const password2 = (e.target as HTMLFormElement).password2.value;

    if (password1 !== password2) {
      console.log('Error: Password mismatch');
      return;
    }
    try {
      const url = '/api/auth/signup';
      const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        occupation: occupation,
        institution: institution,
        specialization: specialization,
        password: password1
      };
      const response = await axios.post(url, body);
      const signupData = response.data;
      if (signupData === 'Error') {
        return;
      }
      setLoginSignupToggle(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginEmail = (e.target as HTMLFormElement).loginEmail.value;
    const loginPassword = (e.target as HTMLFormElement).loginPassword.value;

    if (
      loginEmail === null ||
      loginEmail === undefined ||
      loginPassword === null ||
      loginPassword === undefined
    ) {
      return;
    }

    try {
      const url = '/api/auth/login';
      const body = {
        email: loginEmail,
        password: loginPassword
      };

      const response = await axios.post(url, body);
      const loginData: LoginResponse = response.data;

      if (loginData.token) {
        setLoggedInUser(loginData.userDetails);
        return;
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='w-screen h-screen max-h-screen overflow-hidden flex flex-col items-center text-white'>
        <NavBar />
        {loggedInUser === null ? (
          <LoginAndSignup
            loginSignupToggle={loginSignupToggle}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            handleSignupToggle={handleSignupToggle}
            handleLoginToggle={handleLoginToggle}
          />
        ) : null}
        <div className='w-screen h-full flex flex-col justify-start items-center bg-primary3'>
          {questionType === ListOfQuestionTypes.NotSelected ? (
            <SelectQuestionType selectQuestionTopic={selectQuestionTopic} />
          ) : (
            <CaseStudiesPage
              caseStudyCards={caseStudyCards}
              backToSelectQuestionTopics={backToSelectQuestionTopics}
              loggedInUser={loggedInUser}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
