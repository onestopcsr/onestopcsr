import { BrowserRouter as Router, Routes, Route } from 'react-reacter-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';

  function App() {
      return (
          <Router>
              <div className="App">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                  </Routes>
              </div>
          </Router>
      );
  }

  export default App;
  