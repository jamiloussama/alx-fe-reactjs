import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'; // Import Profile component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="profile/*" element={<Profile />} />
        {/* Other routes can go here */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog post */}

      </Routes>
    </Router>
  );
};

export default App;
