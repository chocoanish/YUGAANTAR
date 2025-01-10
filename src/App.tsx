import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Events from './pages/Events/Events';
import Merch from './pages/Merch/Merch';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path = '/' element = { <Home/> }/>
        <Route path = '/contact' element = { <ContactUs/> }/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/events" element={<Events/>}/>
        <Route path='/merch' element={<Merch/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};


export default App;