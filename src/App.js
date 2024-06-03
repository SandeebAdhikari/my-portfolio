import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import './mediaqueries.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <pre id="output"></pre>
    </div>
  );
}

export default App;
