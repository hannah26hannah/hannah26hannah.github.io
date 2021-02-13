import React from "react";
import {
  Box,
  Grommet
} from 'grommet';

import myMedia from './components/common/social.js';
import Header from './components/common/Header.js';
import Body from './components/common/Body.js';
import Footer from './components/common/Footer.js';
import theme from './components/common/theme.js'

const MainBody = () => (
  <Body channel={myMedia} />
)
function App() {
  return (
    <Grommet id='container' theme={theme}>
      <Box>
        <Header channel={myMedia} theme={theme}/>
      </Box>
      <MainBody />
      <Footer channel={myMedia} />
    </Grommet>
  );
}

export default App;