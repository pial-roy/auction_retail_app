import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />  {/* Use 'element' prop */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <div>
            <h1>Welcome to the Retail Auction App!</h1>
            <p>Go to <a href="/register">Register</a> or <a href="/login">Login</a></p>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;