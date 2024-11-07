import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs'

const App: React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path = '/' element = { <Home/> }/>
        <Route path = '/about' element = { <AboutUs/> }/>
      </Routes>
    </Router>
  );
};


export default App;