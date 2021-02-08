import React from "react";
import {
  Box,
  Grommet
} from 'grommet';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const theme = {
  global: {
    hover: {

    },
    colors: {
      orange: '#F39C12',
      moon: '#F1C40F',
      paper: '#F8EFBA',
      logoGreen: '#57816D'
    },
    font: {
      family: 'consolas',
      size: '18px',
      height: '20px'
    }
  },
  list: {
    item: {
      border: ''
    }
  }
}

function App() {
  return (
    <Grommet theme={theme} full>
        <Header />
        <Box fill>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>app body</Box>
          </Box>
      </Box> 
      <Footer />
    </Grommet>
  );
}

export default App;