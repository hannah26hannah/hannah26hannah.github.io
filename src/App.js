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
import theme from './components/theme.js'
// const cards = Array(2).fill().map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

function App() {
  return (
    <Grommet id='container' theme={theme}>
      <Box>
        <Header channel={myMedia} theme={theme}/>
      </Box>
      <Body id='main-content' channel={myMedia} />
      <Footer channel={myMedia} />
    </Grommet>
  );
}

export default App;