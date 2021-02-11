import React, { Component } from 'react';
import { Menu, FormClose } from 'grommet-icons'
import logo from './logo.svg';
import { Link, useLocation } from 'react-router-dom';

import {
  Box,
  Button,
  Collapsible,
  Heading,
  ResponsiveContext,
  Nav,
  Sidebar,
  Stack,
  Anchor,
} from 'grommet';


const resumeLink = 'https://www.notion.so/Jeongwon-Yoo-72675253e1284032a53a8749a383d31a';
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
const LinkToHome = () => (
  <Heading level='3' margin='none'>
    <img src={logo} className='App-logo' alt='logo' />
  </Heading>
)

// const categories = [
//   {title: 'About', href: '#About'},
//   {title: 'Portfolio', href: '#Portfolio' },
//   {title: 'Resume', href: 'https://www.notion.so/Jeongwon-Yoo-72675253e1284032a53a8749a383d31a' },
//   {title: 'Blog', href: '/blog' },
//   {title: 'Contact', href: '#Contact'},
// ]


const scrollTo = (param) => { 
  document.querySelector(param).scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const MenuNav = (prop) => (
  <Nav className={'commonAlign' + (prop.location === 'header' ? ' headerAlign' : ' sideAlign')}>
    {useLocation().pathname !== '/blog' && (
      <Box>
        <Anchor className='anchorLink' href='#About' label='About' onClick={ () => scrollTo('#About') } />
        <Anchor className='anchorLink' href='#Portfolio' label='Portfolio' onClick={ () => scrollTo('#Portfolio') } />
        <Anchor className='anchorLink' href='#Contact' label='Contact' onClick={() => scrollTo('#Contact')} />
      </Box>
    )}
    {useLocation().pathname !== '/' && (
      <Box>
        <Link class='routeLink' to='/'>👈 Take me to Home</Link>
      </Box>
    )}
    <Box margin={{top: '-1rem'}}>
      <Anchor className='resumeLink' label='Resume' href={resumeLink} color='moon' target='_blank' />
      <Link class='routeLink' to='blog' >Blog</Link>
    </Box>
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
const SidebarFooter = (props) => (
  <Nav responsive={false}
  direction='row'
    alignSelf='end'
  >
    {
      props.channel.map( my => (
        <SidebarButton icon={my.icon} href={my.href} a11yTitle={ my.a11yTitle } key={my.name} color='black'/>
      ))
    }
    
  </Nav>
)

// const MainNavigation = () => (
//   <Nav
//     responsive={false}
//   >
//     {
//       categories.map(category => (
//         <SidebarButton label={category.title} href={category.href} key={ category.title} color='black' />
//       ))
//     }
//   </Nav>
// )

export default class Header extends Component { 
  constructor(props) { 
      super(props);
      this.state = {
        showSidebar: false,
        channel: props.channel
      }
  }
  render() { 
        return (
            <ResponsiveContext.Consumer>
                {size => (
                <Box fill>
                  <AppBar>
                    <Link to='/'><LinkToHome /></Link>
                    {size !== 'small' && (<MenuNav location='header' />)}
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
                          footer={<SidebarFooter channel={ this.state.channel}/>}
                          pad={{ left: 'small', right: 'medium', vertical: 'small' }}
                          elevation='small'
                          style={{
                              position: 'absolute',
                              top: '0px',
                              zIndex: '3'
                          }}
                          >
                            <Button
                                plain primary
                                icon={<FormClose />}
                                onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                                style={{
                                    display: 'block',
                                    position: 'absolute',
                                    top: '15px', 
                                    right: '5%',
                                    zIndex: '3',
                                    background: '#57816D',
                                }}
                                size='small'
                            />
                            <MenuNav />
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
                            zIndex: '2'
                        }}
                        />
                    )}
                </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}
