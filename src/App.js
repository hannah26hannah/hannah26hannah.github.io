import React from "react"; // { useContext } 
import {
  Box,
  // ResponsiveContext,
  Grommet
} from 'grommet';

import myMedia from './components/social.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

const theme = {
  global: {
    hover: {
    },
    colors: {
      orange: '#F39C12',
      moon: '#F1C40F',
      paper: '#F8EFBA',
      logoGreen: '#57816D',
    },
    font: {
      family: 'consolas',
      size: '18px',
      height: '20px'
    },
    breakpoints: {
      xsmall: {
        value: 375
      }
    }
  }
}

// const cards = Array(2).fill().map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

function App() {
  return (
    <Grommet id='container' theme={theme}>
      <Box>
        <Header channel={ myMedia}/>
      </Box>
      <Body id='main-content' channel={myMedia} />
      <Footer channel={myMedia} />
    </Grommet>
  );
}

export default App;