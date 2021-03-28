import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Menu, FormClose } from 'grommet-icons'
import logo from '../../assets/svg/logo.svg';
import logoMobile from '../../assets/svg/logo_m.svg';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

import {
  Box,
  Button,
  Collapsible,
  Heading,
  Nav,
  Sidebar,
  Stack,
  Anchor,
} from 'grommet';
import LangSelect from './MultiLang';

const RESUME_LINK = 'https://www.notion.so/Jeongwon-Yoo-72675253e1284032a53a8749a383d31a';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)
const LinkToHome = (prop) => {
  return (
    <Heading level='3' margin='none'>
      {prop.size === 'xsmall' ?
        <img src={logoMobile} className='mobile-App-logo' alt='logo' /> :
        <img src={logo} className='App-logo' alt='logo' />}
    </Heading>
  )
}

const scrollTo = (e, param) => {
  e.preventDefault();
  document.querySelector(param).scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const MenuNav = (prop) => {
  const t = prop.multi;
  const sideBarCollapse = () => {
    if (!prop.location) {
      prop.sendDataToParent();
    } else {
      return
    }
  }

  return (
    <Nav
      className={'commonAlign' + (prop.location === 'header' ? ' headerAlign' : ' sideAlign')}
    >
      <Box className='subAlign'>
        <Anchor id='about-anchor' className='anchorLink' href='#About' label={t('About')} a11ytitle='About' role='tab' onClick={
          e => {
            sideBarCollapse();
            scrollTo(e, '#About')
          }} />
        <Anchor id='portfolio-anchor' className='anchorLink' href='#Portfolio' label={t('Portfolio')} a11ytitle='portfolio' role='tab' onClick={e => {
          sideBarCollapse();
          scrollTo(e, '#Portfolio')
        }} />
        <Anchor id='contact-anchor' className='anchorLink' href='#Contact' label={t('Contact')} a11ytitle='contact' role='tab' onClick={e => {
          sideBarCollapse();
          scrollTo(e, '#Contact')
        }} />
        <Anchor id='resume-anchor' className='resumeLink' label={t('Resume')} href={RESUME_LINK} color='moon' target='_blank' a11ytitle='resume' role='tab' onClick={sideBarCollapse} />
      </Box>
    </Nav>
  )
}

const SidebarButton = ({ label, href, ...rest }) => (
  <Box pad='small'>
    <Button
      role='tab'
      id={label + '-anchor'}
      alignSelf='start'
      plain
      label={label}
      href={href}
      {...rest}
    />
  </Box>
)

const SidebarHeader = (prop) => (
  <Box
    align='center'
    gap='small'
    direction='row'
    margin={{ bottom: 'large' }}>
    <Stack
      alignSelf='start'
      align='center'
      anchor='top-right'
    >
      {['xsmall'].includes(prop.size) ?
        <img src={logoMobile} className='mobile-App-logo' alt='logo' /> :
        <img src={logo} className='App-logo' alt='logo' />
      }
    </Stack>
  </Box>
)

const SidebarFooter = (props) => {
  return (
    <Nav responsive={false}
      direction='column'
    >
      <LangSelect />
      <Box
        direction='row'
        alignSelf='end'>
        {props.channel.map(my => (
          <SidebarButton icon={my.icon} href={my.href} a11ytitle={my.a11yTitle} name={my.name} key={my.name} color='black' />
        ))}
      </Box>
    </Nav>
  )
}

function Header(props) {
  let [showSidebar, setShowSidebar] = useState(false);
  const channel = useSelector(state => state.channel.channel);
  const size = useSelector(state => state.resize.size)
  const { t } = props; // i18n

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Box fill>
      <AppBar>
        <Link to='/'>
          <LinkToHome size={size} />
        </Link>
        {['large'].includes(size) && (<MenuNav multi={t} location='header' size={size} aria-labelledby='global-navigation' />)}
      </AppBar>

      {!['large'].includes(size) && (
        <>
          <Collapsible
            direction='horizontal'
            open={showSidebar}
            style={{ height: '100vh' }}>
            <Sidebar
              responsive={false}
              width='medium'
              background='orange'
              header={<SidebarHeader size={size} />}
              footer={<SidebarFooter channel={channel} />}
              pad={{ left: 'small', right: 'medium', vertical: 'small' }}
              elevation='small'
              style={{
                position: 'absolute',
                top: '0px',
                zIndex: '3'
              }}>
              <Button
                plain primary
                icon={<FormClose />}
                onClick={handleSidebar}
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: '17px',
                  right: '5%',
                  zIndex: '3',
                  background: '#57816D',
                  margin: '12px'
                }}
                size='small' />
              <MenuNav multi={t} size={size}
                sendDataToParent={handleSidebar} aria-labelledby='side-navigation' />
            </Sidebar>
          </Collapsible>
          <Button
            icon={<Menu />}
            onClick={handleSidebar}
            style={{
              display: 'block',
              position: 'absolute',
              top: '15px',
              right: '5%',
              zIndex: '2'
            }} />
        </>
      )}

    </Box>
  )
}

export default (withTranslation()(Header))