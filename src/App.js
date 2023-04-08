import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import CommunityConnect from './pages/CommunityConnect/CommunityConnect';
import InfoCards from './pages/InfoCards/InfoCards';
import Quests from './pages/Quests/Quests';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<div><Dashboard /></div>} />
          <Route path="/communityconnect" element={<CommunityConnect />} />
          <Route path="/infocards" element={<InfoCards />} />
          <Route path="/quest" element={<Quests />} />
          <Route path="/experiencemaps" element={<div>ExperienceMaps</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
