import React, { Component } from 'react';
import { Menu } from 'grommet-icons'
import logo from '../logo.svg';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  ResponsiveContext,
  Nav,
  Sidebar,
  Stack,
  Anchor
} from 'grommet';

const AppBar = (props) => ( 
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1'}}
    {...props}
  />
)

const categories = [
  {title: 'About', isOnMain: true, href: '#'},
  {title: 'Portfolio', isOnMain: true, href: '#' },
  {title: 'Resume', isOnMain: false, href: '#' },
  {title: 'Blog', isOnMain: true, href: '#' },
  {title: 'Contact', isOnMain: true, href: '#' },
]
const HeaderNav = (props) => (
  <Nav
    direction='row'
    alignSelf='end'
  >
    { categories.map(category => (
        <Anchor label={category.title} href={category.href} key={ category.title} color='black' />
    ))
    }
  </Nav>
)
const SidebarButton = ({label, href, ...rest}) => (
  <Box pad='small'>
    <Button
      alignSelf='start'
      plain
      label={label}
      href={ href }
      {...rest}
    ></Button>
  </Box>
)
const SidebarHeader = () => (
  <Box
    align='center'
    gap='small'
    direction='row'
    margin={{ bottom: 'large' }}
  >
    <Stack
      alignSelf='start' 
      align='center'
      anchor='top-right'
    >
      <img src={logo} className='App-logo' alt='logo' />
    </Stack>
  </Box>
)
const MainNavigation = () => (
  <Nav
    responsive={false}
  >
    {
      categories.map(category => (
        <SidebarButton label={category.title} href={category.href} key={ category.title} color='black'/>
      ))
    }
  </Nav>
)

class Header extends Component { 
    constructor() { 
        super();
        this.state = {
            showSidebar: false
        }
    }
    render() { 
        return (
            <ResponsiveContext.Consumer>
                {size => (
                <Box fill>
                    <AppBar>
                    <Heading level='3' margin='none'><img src={logo} className='App-logo' alt='logo' /></Heading>
                    {size !== 'small' && (
                        <HeaderNav />
                    )}
                    
                    </AppBar>
                    {size === 'small' && (
                    <Collapsible
                        direction='horizontal'
                        open={this.state.showSidebar}>
                            <Sidebar
                            responsive={false}
                            width='medium'
                            background='orange'
                            header={<SidebarHeader />}
                            pad={{ left: 'small', right: 'medium', vertical: 'small' }}
                            elevation='small'
                            style={{
                                position: 'absolute',
                                top: '0px',
                                zIndex: '2'
                            }}
                            >
                            <MainNavigation />
                            </Sidebar>
                        </Collapsible>
                    )}
                    {size === 'small' && (
                        <Button
                        icon={<Menu />}
                            onClick={() => { this.setState({ showSidebar: !this.state.showSidebar})}}
                        style={{
                            display: 'block',
                            position: 'absolute',
                            top: '15px', 
                            right: '5%',
                            zIndex: '5'
                        }}
                        />
                    )}
                </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}

export default Header;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);