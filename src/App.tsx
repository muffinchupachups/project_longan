import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AlertPage from './pages/AlertPage';
import PlotPage from './pages/plotpage'; 
import Calendartwo from './pages/Calendartwo';
import FertilizerPage from './pages/FertilizerPage';
import Sidebarlayout from './layouts/Sidebarlayout';
import Settingspage from './pages/Settingpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import Register2 from './pages/RegisterPage2';
import Login2 from './pages/LoginPage2';
import ServiceSetup from './pages/ServerSetup';
import SeverPage from './pages/SeverPage';
import CalendarServer from './pages/Calendarserver';
import ProfilePage from './pages/ProfilePage';
import ProfileView from './pages/ProfileView';

function App() {  

  return (
          <div id="app-root" className="min-h-screen font-sans">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/login2" element={<Login2/>} />
        <Route path="/register2" element={<Register2/>} />
        <Route path="/serversetup" element={<ServiceSetup/>} />
        <Route path="/severpage" element={<SeverPage/>} />
        <Route path="/calendarserver" element={<CalendarServer/>} />
        <Route path="/profilepage" element={<ProfilePage/>} />
        <Route path="/profileview" element={<ProfileView/>}/>


     <Route element={<Sidebarlayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plot" element={<PlotPage />} />
        <Route path="/calendar" element={<Calendartwo />} />
        <Route path="/fertilizer" element={<FertilizerPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/setting" element={<Settingspage />} />
        
      
       </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
