import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <nav></nav>
      </header>

      <AboutMe />
      <Projects />
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
