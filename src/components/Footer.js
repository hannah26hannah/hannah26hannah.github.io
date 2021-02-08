import React, { Component } from 'react';
import logo from '../logo.svg';
import { Github, Linkedin, Mail, Blog } from 'grommet-icons';
import { Anchor, Box, Footer as AppFooter, grommet, Grommet, Text } from 'grommet';

const myMedia = [
    {name: 'Github', a11yTitle: 'Check My Github Profile', href: 'https://github.com/hannah26hannah', icon: <Github color='black' />},
    {name: 'LinkedIn', a11yTitle: 'Follow me on LinkedIn', href: 'https://www.linkedin.com/in/jeongwon-yoo/', icon: <Linkedin color='black' />},
    {name: 'Mail', a11yTitle: 'Send me an Email', href: 'mailto:jeongwon.y.h', icon: <Mail color='black' />},
    {name: 'Blog', a11yTitle: 'Here is My Tistory Blog', href: 'https://uiyoji-journal.tistory.com/', icon: <Blog color='black' />}
]

const Media = () => (
    <Box direction='row' gap='xxsmall' justify='center'>
        {myMedia.map(my => (
            <Anchor icon={ my.icon } href={my.href} a11yTitle={my.a11yTitle} key={ my.name } color='black' />
        ))}
    </Box>
)

export default class Footer extends Component { 
    render() { 
        return (
            <Grommet theme={grommet}>
                <AppFooter background='orange' pad='small'>
                    <Box align='center' direction='row' gap='xsmall'>
                        <Text alignSelf='center' color='black' size='small'>
                            © { new Date().getFullYear() } Jeongwon Yoo. All rights reserved.
                        </Text>
                    </Box>
                    <Anchor href='#'>
                        <Box width='small'>
                            <img src={logo} className='App-logo' alt='logo' />
                        </Box>
                    </Anchor>
                    <Media />
                </AppFooter>
            </Grommet>
        )
    }
}