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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

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
  );
}

export default App;
