import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './Main View Pages/About/About.jsx';
import Home from './Main View Pages/Home/Home.jsx';
import RiskRegister from './Main View Pages/RiskRegister/RiskRegister.jsx';
import './App.css'

function App() {

  return (

    <div className="App">

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/riskregister" element={<RiskRegister />} />
        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />

    </div>
    
  );
}

export default App;
