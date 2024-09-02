import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Business from './components/business/Business';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
