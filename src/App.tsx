import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Candidates from './pages/Candidates';
import Reports from './pages/Reports';
import CalendarPage from './pages/CalendarPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Signup setIsAuthenticated={setIsAuthenticated} />
            } 
          />          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/jobs" 
            element={
              isAuthenticated ? <Jobs /> : <Navigate to="/login" />
            } 
          />          <Route 
            path="/candidates" 
            element={
              isAuthenticated ? <Candidates /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/reports" 
            element={
              isAuthenticated ? <Reports /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/calendar" 
            element={
              isAuthenticated ? <CalendarPage /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
