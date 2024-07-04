import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import './mediaqueries.css';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSplashEnd = () => {
    setShowSplashScreen(false);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        {showSplashScreen ? (
          <SplashScreen onEnd={handleSplashEnd} />
        ) : (
          <>
            <ThemeToggle darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <NavBar />
            <Profile />
            <About />
            <Experience />
            <Project />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

