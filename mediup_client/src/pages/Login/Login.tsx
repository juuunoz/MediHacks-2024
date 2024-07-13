// src/components/Login.tsx
import { FC, useState, useEffect } from "react";
import { Specialization } from '../../util/';

const Login: FC = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  // triggers signup page if pressed
  const handleSignupButton = () => {
    // Testing purposes
    console.log("anna loves peanuts");
    setLoginToggle(false);
  };

  // triggers login page if pressed
  const handleLoginButton = () => {
    // Testing purposes
    console.log("anna loves tofu");
    setLoginToggle(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-black">
      <div className="w-80 h-96 flex flex-col border ">
        {/* Login title MediUp */}
        <div
          className="border"
          style={{
            textAlign: "center",
            marginBottom: "10%",
            color: "gold",
            font: "comic sans",
            fontSize: "60px",
          }}
        >
          MediUp
        </div>
        {loginToggle ? (
          <>
            {/* ======================== SIGN IN PAGE */}
            <div
              className="border"
              style={{ marginBottom: "10px", textAlign: "center" }}
            >
              {/* Username input */}
              <input
                type="username"
                placeholder="Username or Email"
                className="border pl-1 text-blue-700 rounded-md text-md"
              />
            </div>
            <div
              className="border"
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              {/* Password input */}
              <input
                type="password"
                placeholder="Password"
                className="border pl-1 text-blue-700 rounded-md text-md"
              />
            </div>
            <div className="flex flex-row border justify-center pl-5 py-10">
              <button className="p-8 m-8 " onClick={handleSignupButton}>
                Sign up
              </button>
              <button className="w-24 border">Login julia is aweomse</button>
            </div>
          </>
        ) : (
          <>
            {/*======================================== SIGN UP PAGE */}
            <div
              className="border"
              style={{ marginBottom: "10px", textAlign: "center" }}
            >
              <div className="flex flex-row mb-3">
                {/* First name input */}
                <input
                  type="First Name"
                  placeholder="First Name"
                  className="border pl-1 text-blue-700 rounded-md text-md w-24 ml-10"
                />
                {/* Last name input */}
                <input
                  type="Last Name"
                  placeholder="Last Name"
                  className="border pl-1 text-blue-700 rounded-md text-md w-24 ml-5 "
                />
              </div>
              {/* Email input */}
              <input
                type="email"
                placeholder="Email"
                className="border pl-1 text-blue-700 rounded-md text-md"
              />

              <div>
              
                </div>
                <div className='flex w-4/5 justify-center items-center my-4'>
              <div className='text-4xl w-1/2 mr-8 h-14 rounded-xl bg-gray-200 border-gray-400 border'>
                Select the Topic Specialization:
              </div>
                <select
                  className='w-1/2 bg-gray-200 text-4xl h-14 rounded-xl border-gray-400 border'
                  name='specilization'
                  required
                >
                  {Object.entries(Specialization).map(([key, value]) => {
                    return (
                      <option className='text-lg' key={key}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>

              </div>

            </div>
            <div
              className="border"
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              {/* Password input */}
              <input
                type="password"
                placeholder="Password"
                className="border pl-1 text-blue-700 rounded-md text-md"
              />

              {/* RE-ENTER PASSWORD  */}
              <input
                type="password"
                placeholder="Re-enter Password"
                className="border pl-1 text-blue-700 rounded-md text-md"
              />
            </div>
            <div className="flex flex-row border justify-center py-10">
              {/* <button className="p-8 m-8 " onClick={handleSignupButton}>
                Sign up
              </button> */}
              <button className="w-24 border" onClick={handleLoginButton}>
                Finish
              </button>
            </div>
          </>
        )}

        {/* </Box> */}
      </div>
    </div>
  );
};

export default Login;
