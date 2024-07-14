import { FC } from 'react';
import mediUp_Logo from '../../../assets/mediUp_Logo.png';

interface Props {
  loginSignupToggle: boolean;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleSignupToggle: () => void;
  handleLoginToggle: () => void;
}

const LoginAndSignup: FC<Props> = ({
  loginSignupToggle,
  handleLogin,
  handleSignUp,
  handleSignupToggle,
  handleLoginToggle
}) => {
  return (
    <>
      <div className='absolute h-screen w-screen bg-slate-900/70' />
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-auto bg-Background border border-black flex flex-col p-6 z-50 bg-gray-700'>
        {/* Login title MediUp */}
        <div className='mb-4'>
          <img src={mediUp_Logo} className='w-60' alt='logo' />
        </div>
        {loginSignupToggle ? (
          <form onSubmit={handleLogin}>
            <div className='text-3xl mt-4 text-gray-400'>
              Please Login First!
            </div>
            {/* ======================== SIGN IN PAGE */}
            <div className='text-center mb-4'>
              {/* Username input */}
              <input
                name='loginEmail'
                placeholder='Email'
                className='p-2 mb-4 mt-8 w-full text-white rounded-md text-lg'
              />
            </div>
            <div className='mb-8 text-center'>
              {/* Password input */}
              <input
                type='password'
                name='loginPassword'
                placeholder='Password'
                className='p-2 w-full text-white rounded-md text-lg'
              />
            </div>
            <div className='flex flex-row justify-center'>
              <button
                type='button'
                className='w-36 mr-4 text-xl'
                onClick={handleSignupToggle}
              >
                Sign up
              </button>
              <button type='submit' className='w-36 ml-4 text-xl'>
                Login
              </button>
            </div>
          </form>
        ) : (
          <>
            {/*======================================== SIGN UP PAGE */}
            <form
              onSubmit={handleSignUp}
              className='flex flex-col w-full h-full'
            >
              <div className='w-full h-full border p-2 border-teal-600'>
                <div className='text-2xl pb-2 text-gray-400'>
                  Enter your Login Credentials:
                </div>
                <input
                  type='email'
                  name='Email'
                  placeholder='Email'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  type='password'
                  name='password1'
                  placeholder='Password'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  type='password'
                  name='password2'
                  placeholder='Re-enter Password'
                  className='p-2 w-full text-white rounded-md text-lg'
                />
              </div>
              <div className='w-full h-full border p-2 mt-2 border-sky-600'>
                <div className='text-2xl pb-2 text-gray-400'>
                  Enter your Details:
                </div>
                <input
                  placeholder='First Name'
                  name='firstName'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  placeholder='Last Name'
                  name='lastName'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  placeholder='Occupation'
                  name='occupation'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  placeholder='Institution'
                  name='institution'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
                <input
                  placeholder='Specialization'
                  name='specialization'
                  className='p-2 mb-4 w-full text-white rounded-md text-lg'
                />
              </div>
              <div className='flex flex-row  justify-center py-4 bg-'>
                <button
                  type='button'
                  className='w-36 mr-4 text-xl'
                  onClick={handleLoginToggle}
                >
                  Back
                </button>
                <button type='submit' className='w-80 ml-4 text-xl'>
                  Create Your Account!
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default LoginAndSignup;
