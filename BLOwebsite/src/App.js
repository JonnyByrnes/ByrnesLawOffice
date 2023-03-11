import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Welcome from './components/Welcome.js'
import AboutUs from './components/AboutUs.js'
import ContactUs from './components/ContactUs.js'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Welcome />} />
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
