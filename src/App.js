import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Landing from './components/Landing';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <nav></nav>
      </header>
      <body>
        <Landing />
        <footer>
          <Footer />
        </footer>
      </body>
    </ThemeProvider>
  );
}

export default App;
