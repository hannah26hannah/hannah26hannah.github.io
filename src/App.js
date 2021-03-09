import React, { useEffect, useState } from "react";
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet';
import { useDispatch } from 'react-redux';
import { changeSize } from './store/actions'

import Header from './components/common/Header.js';
import Body from './components/common/Body.js';
import Footer from './components/common/Footer.js';
import theme from './components/common/theme.js'

function App() {

  const dispatch = useDispatch();
  let [size, setSize] = useState('');

  useEffect(() => {
    dispatch(changeSize(size))
  }, [size, dispatch])

  return (  
    <Grommet id='container' theme={theme}>
      <ResponsiveContext.Consumer>{
        size => { setSize(size)
          return (
            <>
              <Box>
                <Header theme={theme} />
              </Box>
              <Body />
              <Footer />
            </>
          )
        } 
      }
      </ResponsiveContext.Consumer>
    </Grommet>
);
}

export default App;