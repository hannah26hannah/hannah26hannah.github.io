import React, { useEffect, useState } from "react";
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { changeSize } from './store/actions'

import Header from './components/common/Header.js';
import Body from './components/common/Body.js';
import Footer from './components/common/Footer.js';
import theme from './components/common/theme.js'

function App() {
  const dispatch = useDispatch();
  const channel = useSelector(state => state.channel.channel);
  let [currentSize, setCurrentSize] = useState('')
  
  useEffect(() => {
    dispatch(changeSize(currentSize))
  }, [dispatch, currentSize])

  return (  
      <Grommet id='container' theme={theme}>
        <ResponsiveContext.Consumer>{
          size => { setCurrentSize(size)
            return (
              <>
                <Box>
                  <Header theme={theme} />
                </Box>
                <Body channel={channel} />
                <Footer channel={channel} />
              </>
            )
          } 
        }
        </ResponsiveContext.Consumer>
      </Grommet>
  );
}

export default App;