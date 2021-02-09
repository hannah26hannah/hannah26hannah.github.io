import React from "react"; // { useContext } 
import {
  Box,
  Main,
  // ResponsiveContext,
  Grommet
} from 'grommet';
import { Github, Linkedin, Mail, Blog } from 'grommet-icons';

import Header from './components/Header.js'
// import Body from './components/Body.js'
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

// const cards = Array(2).fill().map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);



function App() {
  // const size = useContext(ResponsiveContext);
  const myMedia = [
      {name: 'Github', a11yTitle: 'Check My Github Profile', href: 'https://github.com/hannah26hannah', icon: <Github color='black' />},
      {name: 'LinkedIn', a11yTitle: 'Follow me on LinkedIn', href: 'https://www.linkedin.com/in/jeongwon-yoo/', icon: <Linkedin color='black' />},
      {name: 'Mail', a11yTitle: 'Send me an Email', href: 'mailto:jeongwon.y.h', icon: <Mail color='black' />},
      {name: 'Blog', a11yTitle: 'Here is My Tistory Blog', href: 'https://uiyoji-journal.tistory.com/', icon: <Blog color='black' />}
  ]
  return (
    <Grommet theme={theme} full>
      <Box direction="column" flex>
        <Header channel={ myMedia}/>
        <Main pad='large' background='paper'>
        </Main>
      </Box> 
      <Footer channel={myMedia} />
    </Grommet>
  );
}

export default App;