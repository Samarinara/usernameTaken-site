import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import HomePage from "./Home";
/* 
import TeamPage from './pages/Team';
import TeamMemberDetail from './pages/TeamMemberDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Certifications from './pages/Certifications'; */
import UnderConstruction from './pages/UnderConstruction';



function App() {
  return(
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        //Under Construction Pages
{/*         <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:memberId" element={<TeamMemberDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
        <Route path="/certifications" element={<Certifications />} /> */}
        <Route path="/under-construction" element={<UnderConstruction/>} />
        
        <Route path="*" element={<Navigate to="/under-construction" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
