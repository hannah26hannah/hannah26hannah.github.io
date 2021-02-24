import React, { Component } from 'react';
import { Menu, FormClose } from 'grommet-icons'
import logo from '../../assets/svg/logo.svg';
import logoMobile from '../../assets/svg/logo_m.svg';

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
const LinkToHome = (prop) => (
  <Heading level='3' margin='none'>
    {prop.size === 'xsmall' && (
      <img src={logoMobile} className='mobile-App-logo' alt='logo' />
    )}
    {['small', 'medium', 'large'].includes(prop.size) && (
      <img src={logo} className='App-logo' alt='logo' />
    )}
  </Heading>
)

const scrollTo = (param) => { 
  document.querySelector(param).scrollIntoView({ behavior: 'smooth', block: 'start' })
}


const MenuNav = (prop) => (
  <Nav 
    className={'commonAlign' + (prop.location === 'header' ? ' headerAlign' : ' sideAlign')}
    >
    {useLocation().pathname === '/' && (
      <Box className='subAlign'>
        <Anchor id='about-anchor' className='anchorLink' href='#About' label='About' a11yTitle='About' role='tab' onClick={ 
          () => {
            prop.sendDataToParent()
            scrollTo('#About')
          } } />
        <Anchor id='portfolio-anchor' className='anchorLink' href='#Portfolio' label='Portfolio' a11yTitle='portfolio' role='tab' onClick={ () => {
          prop.sendDataToParent()
          scrollTo('#Portfolio')
        }} />
        <Anchor id='contact-anchor' className='anchorLink' href='#Contact' label='Contact' a11yTitle='contact' role='tab' onClick={() => {
          prop.sendDataToParent()
          scrollTo('#Contact')
        }} />
      </Box>
    )}
    {useLocation().pathname !== '/' && (
      <Box className='subAlign'>
        <Link className='routeLink' to='/' a11yTitle='switch navigation view' role='tab' onClick={() => prop.sendDataToParent()}>👈 Take me to Home</Link>
      </Box>
    )}
    <Box className='subAlign'>
      <Anchor id='resume-anchor' className='resumeLink' label='Resume' href={resumeLink} color='moon' target='_blank' a11yTitle='resume' role='tab' onClick={() => prop.sendDataToParent()}
      />
      <Link id='blog-anchor' className='routeLink' to='blog' a11yTitle='blog' role='tab' onClick={() => prop.sendDataToParent()}>Blog</Link>
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
const SidebarHeader = (prop) => (
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
    {['xsmall'].includes(prop.size) && (
      <img src={logoMobile} className='mobile-App-logo' alt='logo' />
    )}
    {['small', 'medium', 'large'].includes(prop.size) && (
      <img src={logo} className='App-logo' alt='logo' />
    )}
      
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


export default class Header extends Component { 
  constructor(props) { 
      super(props);
      this.state = {
        showSidebar: false,
        channel: props.channel
      }
      
  }
  
  sendDataToParent = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  
  render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                <Box fill>
                  <AppBar>
                    <Link to='/'><LinkToHome size={size} /></Link>
                    {['large'].includes(size) && (<MenuNav location='header' size={size} />)}
                  </AppBar>
                  {['xsmall', 'small', 'medium'].includes(size) && (
                  <Collapsible
                      direction='horizontal'
                      open={this.state.showSidebar}
                      style={{ height: '100vh' }}
                      >
                      
                          <Sidebar
                          responsive={false}
                          width='medium'
                          background='orange'
                          header={<SidebarHeader size={size} />}
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
                                    top: '17px', 
                                    right: '5%',
                                    zIndex: '3',
                                    background: '#57816D',
                                    margin: '12px'
                                }}
                                size='small'
                            />
                            <MenuNav sendDataToParent={this.sendDataToParent} />
                          </Sidebar>
                      </Collapsible>
                  )}
                    {['xsmall', 'small', 'medium'].includes(size) && (
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
