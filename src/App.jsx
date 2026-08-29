import { Routes, Route } from 'react-router';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './Main View Pages/About/About.jsx';
import Home from './Main View Pages/Home/Home.jsx';
import RiskRegister from './Main View Pages/RiskRegister/RiskRegister.jsx';
import './App.css'

// Parent Component - passes/returns data to child components 
function App() {

  return (

    <div className="App">

      <Header />

      <main>

        {/* Routes for React Router*/}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/riskregister" element={<RiskRegister />} />
          <Route path="/about" element={<About />} />

        </Routes>


      </main>

      <Footer />

    </div>
    
  );
}

export default App;
