import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import theme from './theme';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.LANDING}
            component={() => (
              <>
                <Navigation />
                <Intro />
                <AboutMe />
                <Projects />
                <footer>
                  <Footer />
                </footer>
              </>
            )}
          />
          <Route
            path={ROUTES.PROJECT}
            render={(props) => (
              <>
                <ProjectDetail {...props} />
                <footer>
                  <Footer />
                </footer>
              </>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
