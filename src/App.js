import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Cp from './components/Cp';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/copperware" element={<Cp/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
