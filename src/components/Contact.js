import { Box, List, Text, Anchor } from 'grommet';
import React, { Component } from 'react';

const ContactList = (props) => (
    <List
        data={props.channel}
        pad='small'
        border={false}
        direction='column'
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        }}
    >
        {datum => (
            <Box direction='row-responsive' flex gap='medium' alignSelf='center' size='medium' align='center' justify='around' pad='small'>
                <Anchor icon={datum.icon} href={datum.href} a11yTitle={datum.a11yTitle} key={datum.name} size='small'
                    style={{
                        backgroundColor: 'orange',
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '1rem',
                        fontSize: '2rem'
                }}/>
                    <Text weight='normal' size='medium'>{ datum.a11yTitle}</Text>
           </Box>
        )}
    </List>
)
export default class Contact extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            channel: props.channel
        }
    }
    render() {
        return (
            <ContactList channel={ this.state.channel } />
        )
    }
}