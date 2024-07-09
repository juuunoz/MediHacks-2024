import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Store/AuthContext';

const Home = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const navigateClick = () => {
    navigate('/login');
  };

  const updateAuthState = () => {
    const test = 'test';
    console.log(test);
    setAuthState(test);
  };

  const checkAuthState = () => {
    console.log(authState);
  };

  return (
    <>
      <div className='w-screen h-screen overflow-hidden flex justify-center items-center'>
        <div>Homepage</div>
        <button onClick={() => updateAuthState()}>Click</button>
        <button onClick={() => checkAuthState()}>Display AuthState</button>
        <button onClick={() => navigateClick()}>navigate test</button>
      </div>
    </>
  );
};

export default Home;
