import { Box, List, Text, Anchor } from 'grommet';
import React from 'react';
import { useSelector } from 'react-redux'
import { withTranslation } from 'react-i18next';

function Contact (props) {
    const channel = useSelector(state => state.channel.channel);
    const {t} = props

    return (
        <List
            data={channel}
            pad='small'
            border={false}
            direction='column'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}>
            {datum => (
            <Box 
                direction='row-responsive' flex gap='medium' alignSelf='center' size='medium' align='center' justify='around' pad='small'>
                <Anchor 
                    icon={datum.icon} 
                    href={datum.href} 
                    a11yTitle={t(datum.a11yTitle)} 
                    key={datum.name} size='small'
                    style={{
                        backgroundColor: 'orange',
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '1rem',
                        fontSize: '2rem'
                        }}
                />
                <Text weight='normal' size='medium'>
                    {t(datum.a11yTitle)}
                </Text>
            </Box>)}
        </List>
    )
}

export default withTranslation()(Contact);
