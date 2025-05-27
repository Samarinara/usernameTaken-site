import { Route, Link, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import "./App.css";

import HomePage from "./Home";

function App() {
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      
      <div className="footer">
        <Link to="/home">Home</Link>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
