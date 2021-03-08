import React from "react";
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet';
import { useDispatch } from 'react-redux';
import { changeSize } from './store/actions'

import myMedia from './components/common/social.js';
import Header from './components/common/Header.js';
import Body from './components/common/Body.js';
import Footer from './components/common/Footer.js';
import theme from './components/common/theme.js'


const MainBody = () => (
  <Body channel={myMedia} />
)


function App() {
  const dispatch = useDispatch();
  
  return (  
      <Grommet id='container' theme={theme}>
        <ResponsiveContext.Consumer>{
          size => { 
            dispatch(changeSize(size))
            return (
              <>
                <Box>
                  <Header channel={myMedia} theme={theme} />
                </Box>
                <MainBody />
                <Footer channel={myMedia} />
              </>
            )
          } 
        }
        </ResponsiveContext.Consumer>
      </Grommet>
  );
}

export default App;