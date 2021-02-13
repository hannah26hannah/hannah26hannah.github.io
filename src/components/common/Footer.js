import React, { Component } from 'react';
import logo from './logo.svg';
import { Anchor, Box, Footer as AppFooter, grommet, Grommet, Text, ResponsiveContext } from 'grommet';


const Media = (props) => (
    <Box direction='row' gap='xxsmall' justify='center'>
        {props.channel.map(my => (
            <Anchor icon={ my.icon } href={my.href} a11yTitle={my.a11yTitle} key={ my.name } color='black' />
        ))}
    </Box>
)

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {channel: props.channel}
     }
    render() { 
        return (
            <ResponsiveContext.Consumer>
                {size => (
                <Grommet theme={grommet}>
                        <AppFooter
                            background='orange'
                            pad='small'
                            height={['xsmall', 'small'].includes(size) ? 'small' : 'xsmall'}
                        >
                            <Box
                                direction='row-responsive'
                                align='center'
                                justify='around'
                                flex
                            >
                                <Text alignSelf='center' color='black' size='small'>
                                    © { new Date().getFullYear() } Jeongwon Yoo. All rights reserved.
                                </Text>
                                <Anchor href='#' alignSelf='center'>
                                    <Box width='small'>
                                        <img src={logo} className='App-logo' alt='logo' />
                                    </Box>
                                </Anchor>
                                <Media channel={this.state.channel}/>
                            </Box>
                        </AppFooter>
                    </Grommet>
                    )}
                </ResponsiveContext.Consumer>
        )
    }
}