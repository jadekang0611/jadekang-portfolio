import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />

      <Intro />

      <AboutMe />

      <Projects />

      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
