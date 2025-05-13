import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import CyclingPage from './pages/CyclingPage.tsx';
import CalisthenicsPage from './pages/CalisthenicsPage.tsx';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />

      <Route path="/profile/:username" element={<UserProfile />} />
      <Route path="/profile/:username/cycling" element={<CyclingPage />} />
      <Route path="/profile/:username/calisthenics" element={<CalisthenicsPage />} />
    </Routes>
  );
}

export default App;

