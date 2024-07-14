import { Link } from 'react-router-dom';
import mediUp_Logo from '../../../assets/mediUp_Logo.png';
import accountButtonImage from '../../../assets/navbar-user.svg';
import createQuizButtonImage from '../../../assets/navbar-plus.svg';

const NavBar = () => {
  const accountButton = (): JSX.Element => {
    return (
      <Link to='/profile'>
        <img src={accountButtonImage} alt='profile settings' />
      </Link>
    );
  };

  const createQuizButton = (): JSX.Element => {
    return (
      <Link to='/createquiz'>
        <img src={createQuizButtonImage} alt='create a new quiz' />
      </Link>
    );
  };

  const buildNavbar = (): JSX.Element => {
    return (
      // isLoggedIn ? use below : <div className='float-right'> {loginButton()} </div>
      <div className='items-end justify-between p-5'>
        <div className='float-right'>{accountButton()}</div>
        <div className='float-right p-3'>{createQuizButton()}</div>
      </div>
    );
  };

  return (
    <div className='w-screen h-32 flex flex-row justify-between items-center'>
      <div></div>
      <Link to='/'>
        <img src={mediUp_Logo} className='w-96' alt='logo' />
      </Link>
      {buildNavbar()}
    </div>
  );
};

export default NavBar;
