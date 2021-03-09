import { Box, Text, Anchor, Grid, Grommet } from 'grommet';
import React from 'react';
import { useSelector } from 'react-redux'
import { withTranslation } from 'react-i18next';
import theme from './common/theme.js'

function Contact (props) {
    const channels = useSelector(state => state.channel.channel);
    const {t} = props

    return (
        <Grommet theme={theme} style={{ display: 'flex', justifyContent: 'center'}}>
            <Grid columns={['small', 'small']} rows={['small', 'small']} gap='small'>
                {channels.map(channel => (
                <Box flex  justify='center' align='center' gap='medium'>
                    <Anchor 
                        icon={channel.icon}
                        href={channel.href} 
                        a11yTitle={t(channel.a11yTitle)} 
                        key={channel.name} size='xlarge'
                        style={{
                            backgroundColor: 'orange',
                            width: '3rem', height: '3rem',
                            borderRadius: '1rem',}}/>
                    <Text weight='normal' size='medium'>
                        {t(channel.a11yTitle)}
                    </Text>
                </Box>))}
            </Grid>
        </Grommet>
        
    )
}


export default withTranslation()(Contact);
