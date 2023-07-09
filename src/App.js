import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import WorkExperience from './components/workexperience/WorkExperience';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/workexperience' element={<WorkExperience />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    
  )
}

export default App
