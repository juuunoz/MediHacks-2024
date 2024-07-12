
import { Link } from 'react-router-dom'
import logoImage from '../../../assets/logo.svg'
import loginButtonImage from '../../../assets/navbar-nouser.svg'
import accountButtonImage from '../../../assets/navbar-user.svg'
import createQuizButtonImage from '../../../assets/navbar-plus.svg'

const navBar = () => {
  
  const loginButton = (): JSX.Element => {
    return (
      <Link to='/login'>
      <img src={loginButtonImage} alt='login'/> 
      </Link>
    )
  }

  const accountButton = (): JSX.Element => {
      return (
              <Link to='/profile'>
              <img src={accountButtonImage} alt='profile settings'/> 
              </Link>
      );
  }

  const createQuizButton = (): JSX.Element => {
    return (
      <Link to='/createquiz'>
            <img src={createQuizButtonImage} alt='create a new quiz'/>
            
      </Link>
    )
  }

  const buildNavbar = (): JSX.Element => {
    return (
      // isLoggedIn ? use below : <div className='float-right'> {loginButton()} </div>
      <div className='items-end justify-between p-5'>
        <div className='float-right'>
          {accountButton()}
        </div>
        <div className='float-right p-3'>
          {createQuizButton()}
        </div>
      </div>
    )
  }

  return (
    <div className='w-screen h-32 float-right items-end'>
      <Link to='/'>
      <img src={logoImage} alt='logo'/> 
      </Link>
      {buildNavbar()}
    </div>
  );
};

export default navBar;
