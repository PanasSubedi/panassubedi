import React from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import About from './components/About'
import Work from './components/Work'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: ['Kumbh Sans', 'sans-serif'].join(',')
  }
})

function App(){
    return (
      <div>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Introduction />
          <About />
          <Work />
          <Projects />
          <Education />
          <Contact />
        </ThemeProvider>
      </div>
    );
}

export default App;
