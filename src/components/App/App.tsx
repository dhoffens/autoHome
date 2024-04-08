import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

const App: React.FC = () => {

  return (
    <>
      <Header title='AutoHome' description='header description'/>
      <Sidenav />
      
      <Router>
        <Routes>
          {/* / goes to Home page with will have dashboard, sidenav and about */}
          <Route path="/" element={<h1>AutoHome</h1>} />
          {/* each other route will go to one of the modules */}
          <Route path="/about" element={<p>a tool for new homeowners</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;