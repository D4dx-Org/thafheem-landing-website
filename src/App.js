import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RazorpayPayment from './components/razorpay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<RazorpayPayment />} />
      </Routes>
    </Router>
  );
}

export default App;