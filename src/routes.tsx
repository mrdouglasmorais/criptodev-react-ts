import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import Contact from './Views/Contact';
import Err from './Views/Err404';

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Err /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;