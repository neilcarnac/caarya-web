import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Homepage</div>} />
          <Route path="/communityconnect" element={<div>Community Connect</div>} />
          <Route path="/infocards" element={<div>Community Connect</div>} />
          <Route path="/quest" element={<div>Quests</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
