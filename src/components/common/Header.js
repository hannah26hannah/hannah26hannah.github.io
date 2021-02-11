import React, { Component } from 'react';
import { Menu, FormClose } from 'grommet-icons'
import logo from './logo.svg';
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


// TODO: Blog Page, Router in React, Tistory Open API

const categories = [
  {title: 'About', href: '#About'},
  {title: 'Portfolio', href: '#Portfolio' },
  {title: 'Resume', href: 'https://www.notion.so/Jeongwon-Yoo-72675253e1284032a53a8749a383d31a' },
  {title: 'Blog', href: '#Blog' },
  {title: 'Contact', href: '#Contact'},
]

const scrollTo = (href, title) => {
  if (title !== 'Resume') {
    document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'center'})
  }
}

const HeaderNav = () => (
  <Nav
    direction='row'
    alignSelf='end'
  >
    { categories.map(category => (
      <Anchor
        label={category.title}
        href={category.href}
        key={category.title}
        color={category.title === 'Resume' ? 'orange' : 'black' }
        target={category.title === 'Resume' ? '_blank' : '_self' }
        onClick={() => scrollTo(category.href, category.title) } 
      />
    ))}
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

const MainNavigation = () => (
  <Nav
    responsive={false}
  >
    {
      categories.map(category => (
        <SidebarButton label={category.title} href={category.href} key={ category.title} color='black' />
      ))
    }
  </Nav>
)

class Header extends Component { 
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

export default Header;