import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import CommunityConnect from './pages/CommunityConnect/CommunityConnect';
import InfoCards from './pages/InfoCards/InfoCards';
import Quests from './pages/Quests/Quests';
import ExperienceMaps from './pages/ExperienceMaps/ExperienceMaps';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communityconnect" element={<CommunityConnect />} />
          <Route path="/infocards" element={<InfoCards />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/experiencemaps" element={<ExperienceMaps />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
