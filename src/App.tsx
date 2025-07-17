import { Route, Link, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import "./App.css";

import HomePage from "./Home";
import CreatingPage from './Creating';
import SecuringPage from './Securing';
import LearningPage from './Learning';
import TeamPage from './pages/Team';
import TeamMemberDetail from './pages/TeamMemberDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return(
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creating" element={<CreatingPage />} />
        <Route path="/securing" element={<SecuringPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:memberId" element={<TeamMemberDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export function NewPage() {

}


export default App;
