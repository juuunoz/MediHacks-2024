// src/components/Login.tsx
import { FC, useState } from 'react';
import axios from 'axios';

const Login: FC = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  // triggers signup page if pressed
  const handleSignupButton = () => {
    // Testing purposes
    console.log('anna loves peanuts');
    setLoginToggle(false);
  };

  // triggers login page if pressed
  const handleLoginButton = () => {
    // Testing purposes
    console.log('anna loves tofu');
    setLoginToggle(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      // TODO: action after signup is done. Maybe go back to login page and login.
      const signupData = response.data;
      if (signupData === 'Error') {
        return;
      }
      console.log(response);
      setLoginToggle(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginToSite = async (e: React.FormEvent<HTMLFormElement>) => {
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
      const loginData = response.data;

      // TODO: handle correct token
      if (loginData.token) {
        console.log('works');
        return;
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=' w-screen h-screen overflow-hidden flex justify-center items-center bg-black'>
      <div className='w-80 h-96 flex flex-col border '>
        {/* Login title MediUp */}
        <div
          className=''
          style={{
            textAlign: 'center',
            marginBottom: '10%',
            color: 'gold',
            font: 'comic sans',
            fontSize: '60px'
          }}
        >
          MediUp
        </div>
        {loginToggle ? (
          <form onSubmit={handleLoginToSite}>
            {/* ======================== SIGN IN PAGE */}
            <div
              className=''
              style={{ marginBottom: '10px', textAlign: 'center' }}
            >
              {/* Username input */}
              <input
                name='loginEmail'
                placeholder='Email'
                className='border pl-1 text-blue-700 rounded-md text-md'
              />
            </div>
            <div
              className=''
              style={{ marginBottom: '20px', textAlign: 'center' }}
            >
              {/* Password input */}
              <input
                type='password'
                name='loginPassword'
                placeholder='Password'
                className='border pl-1 text-blue-700 rounded-md text-md'
              />
            </div>
            <div className='flex flex-row border justify-center '>
              <button
                type='button'
                className='w-24  mr-7 '
                onClick={handleSignupButton}
              >
                Sign up
              </button>
              <button type='submit' className='w-24 border mr-7 '>
                Login
              </button>
            </div>
          </form>
        ) : (
          <>
            {/*======================================== SIGN UP PAGE */}
            <form
              onSubmit={handleSubmit}
              className=''
              style={{ marginBottom: '10px', textAlign: 'center' }}
            >
              <div className='flex flex-row mb-3'>
                {/* First name input */}
                <input
                  placeholder='First Name'
                  name='firstName'
                  className=' pl-1 text-white rounded-md text-md w-24 ml-10'
                />
                {/* Last name input */}
                <input
                  placeholder='Last Name'
                  name='lastName'
                  className=' pl-1 text-white rounded-md text-md w-24 ml-5 '
                />
              </div>
              {/* Email input */}
              <input
                type='email'
                name='Email'
                placeholder='Email'
                className=' pl-1 text-white rounded-md text-md'
              />

              <input
                placeholder='Occupation'
                name='occupation'
                className=' pl-1 text-white rounded-md text-md mt-2'
              />

              <input
                placeholder='Institution'
                name='institution'
                className=' pl-1 text-white rounded-md text-md mt-2'
              />

              <input
                placeholder='Specialization'
                name='specialization'
                className=' pl-1 text-white rounded-md text-md mt-2'
              />

              <div
                className=''
                style={{ marginBottom: '20px', textAlign: 'center' }}
              >
                {/* Password input */}
                <input
                  type='password'
                  name='password1'
                  placeholder='Password'
                  className=' pl-1 text-white rounded-md text-md mt-2'
                />

                {/* RE-ENTER PASSWORD  */}
                <input
                  type='password'
                  name='password2'
                  placeholder='Re-enter Password'
                  className=' pl-1 text-white rounded-md text-md mt-2'
                />
              </div>

              <div className='flex flex-row  justify-center py-4 bg-'>
                {/* <button className="p-8 m-8 " onClick={handleSignupButton}>
                Sign up
              </button> */}
                <button
                  type='button'
                  className='w-24 border mr-7 bg-gray-500'
                  onClick={handleLoginButton}
                >
                  Back
                </button>
                <button type='submit' className='w-24 border ml-7 bg-gray-500'>
                  Sign up
                </button>
              </div>
            </form>
          </>
        )}

        {/* </Box> */}
      </div>
    </div>
  );
};

export default Login;
