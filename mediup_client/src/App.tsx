import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import LandingPage from './pages/Home/Home';
import CreateQuiz from './pages/CreateQuiz/CreateQuiz';
import Profile from './pages/Profile/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createquiz' element={<CreateQuiz />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
