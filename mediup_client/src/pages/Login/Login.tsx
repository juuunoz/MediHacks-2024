// src/components/Login.tsx

import React, { CSSProperties } from 'react';
import Box from './Box'; // Adjust the import path as needed

const inputStyle: CSSProperties = {
  paddingLeft: '5px', /* Adjust the padding value as needed */
  color: 'white', /* Normal text color */
  borderRadius: '5px', // Rounded corners
  fontSize: '15px'
};

const Login: React.FC = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center'>
      
      <Box 
        width="30%" 
        height="40%"
        backgroundColor="grey" 
        border="" 
        padding="20px" 
        margin="20px"
        borderRadius= '10px' // Rounded corners
      >
        {/* Login title */}
        <div style={{ textAlign: 'center', marginBottom: '10%', color: 'gold', font: "comic sans",fontSize:'60px' }}>MediUp</div>
          <div style={{ marginBottom: '10px', textAlign: 'center' }}>
            {/* Username input */}
            <input type="username" placeholder="Username or Email" style={inputStyle}/>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            {/* Password input */}
            <input type="password" placeholder="Password" style={inputStyle}/>
          </div>
        <button style={{ display: 'block', marginRight: '90%' }}>Login</button>
      </Box>
    </div>
  );
};

export default Login;
