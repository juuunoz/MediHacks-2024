// src/components/Login.tsx

import { FC, useState, useEffect } from "react";

const Login: FC = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  const handleSignupButton = () => {
    console.log("anna loves peanuts");
    setLoginToggle(false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
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
              <button className="w-24 border">Login</button>
            </div>
          </>
        ) : (
          <div>signup</div>
        )}

        {/* </Box> */}
      </div>
    </div>
  );
};

export default Login;
