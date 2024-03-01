import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProjectDescription from './pages/ProjectDescription';
import RoomDisplay3D from './pages/RoomDisplay3D';
import TeamIntroduction from './pages/TeamIntroduction';
import Toriathukai from './pages/Toriathukai'
import Yokyu from './pages/Yokyu';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project-description" element={<ProjectDescription />} />
        <Route path="/room-display" element={<RoomDisplay3D />} />
        <Route path="/team-introduction" element={<TeamIntroduction />} />
        <Route path="/toriathukai" element={<Toriathukai />} />
        <Route path="/yokyu" element={<Yokyu />} />
      </Routes>
      
    </Router>
  );
};

export default App;
