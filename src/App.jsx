import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/home'; // Import Home component
import Navbar from './components/navbar';
import './App.css';
import AboutMe from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Research from './pages/research/research';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar/>
      <div className='app-container'>
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/About" element={<AboutMe />} />
       <Route path="/Projects" element={<Projects />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Research" element={<Research />} />



      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
