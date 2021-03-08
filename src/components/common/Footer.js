import React from 'react';
import logo from '../../assets/svg/logo.svg';
import { Anchor, Box, Footer as AppFooter, grommet, Grommet, Text } from 'grommet';
import { useSelector } from 'react-redux';


const Media = (props) => {
    const channel = useSelector(state => state.channel.channel);
    return (
        <Box direction='row' gap='xxsmall' justify='center'>
            {channel.map(my => ( <Anchor icon={ my.icon } href={my.href} a11yTitle={my.a11yTitle} key={ my.name } color='black' />
            ))}
        </Box>
    )
} 


function Footer(props) {
    const size = useSelector(state => state.resize.size);
    return (
        <Grommet theme={grommet}>
            <AppFooter
                background='orange'
                pad='small'
                height={['xsmall', 'small'].includes(size) ? 'small' : 'xsmall'}>
                <Box direction='row-responsive' align='center' justify='around' flex>
                    <Text alignSelf='center' color='black' size='small'>
                        © { new Date().getFullYear() } Jeongwon Yoo. All rights reserved.
                    </Text>
                    <Anchor href='#' alignSelf='center'>
                        <Box width='small'>
                            <img src={logo} className='App-logo' alt='logo' />
                        </Box>
                    </Anchor>
                    <Media />
                </Box>
            </AppFooter>
        </Grommet>
    )
}

export default Footer;
