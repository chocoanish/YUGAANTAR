import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Events from './pages/Events/Events';

const App: React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path = '/' element = { <Home/> }/>
        <Route path = '/contact' element = { <ContactUs/> }/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </Router>
  );
};


export default App;