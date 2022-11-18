import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './Components/Screens/AuthScreens/LoginScreen';
import RegisterScreen from './Components/Screens/AuthScreens/RegisterScreen';
import HomeScreen from './Components/HomeScreen';
import Appy4Admission from './Components/Screens/SplitScreens/Appy4Admission';
import StudentProfile from './Components/Screens/SplitScreens/StudentProfile';

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<HomeScreen/>} />
         <Route path='/login' element={<LoginScreen/>} />
         <Route path='/register' element={<RegisterScreen/>} />
         <Route path='/apply' element={<Appy4Admission/>} />
         <Route path='/profile' element={<StudentProfile/>} />
      </Routes>
    </>
  );
}

export default App;
