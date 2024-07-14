import { useState } from 'react';
import NavBar from './components/NavBar';
import SelectQuestionType from './components/SelectQuestionType';
import { ListOfQuestionTypes } from '../../util/enums';
import CaseStudiesPage from './components/CaseStudiesPage';
import LoginAndSignup from './components/LoginAndSignup';
import axios from 'axios';
import { LoginResponse, UserDetails } from '../../models/User';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState<UserDetails | null>(null);
  const [loginSignupToggle, setLoginSignupToggle] = useState(true);
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
      <div className='w-screen h-screen max-h-screen overflow-hidden flex flex-col items-center bg-white text-black'>
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
        <div className='w-screen h-5/6 flex flex-col justify-center items-center'>
          {questionType === ListOfQuestionTypes.NotSelected ? (
            <SelectQuestionType selectQuestionTopic={selectQuestionTopic} />
          ) : (
            <CaseStudiesPage
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
