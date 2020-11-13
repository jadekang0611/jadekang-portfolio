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
      <section id="jk_intro">
        <Intro />
      </section>
      <section id="jk_about_me">
        <AboutMe />
      </section>
      <section id="jk_projects">
        <Projects />
      </section>
      <footer>
        <section id="jk_contacts">
          <Footer />
        </section>
      </footer>
    </ThemeProvider>
  );
}

export default App;
