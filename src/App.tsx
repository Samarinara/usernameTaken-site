import { Route, Link, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import "./App.css";

import HomePage from "./Home";
import CreatingPage from './Creating';
import SecuringPage from './Securing';
import LearningPage from './Learning';

function App() {
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creating" element={<CreatingPage />} />
        <Route path="/securing" element={<SecuringPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      
      <div className="footer">
        <Link to="/home">Home</Link>
      </div>
    </BrowserRouter>
    </div>
  );
}

export function NewPage() {

}


export default App;
