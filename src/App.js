import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import WorkExperience from './components/workexperience/WorkExperience';

const App = () => {
  return (
    <HashRouter>
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
    </HashRouter>
    
  )
}

export default App
