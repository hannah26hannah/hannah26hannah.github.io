import { Box, Text, Anchor, Grid, Grommet, ResponsiveContext } from 'grommet';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux'
import { withTranslation } from 'react-i18next';
import theme from './common/theme.js'

function Contact (props) {
    const channels = useSelector(state => state.channel.channel);
    const size = useContext(ResponsiveContext);
    const {t} = props

    return (
        <Grommet theme={theme} style={{ display: 'flex', justifyContent: 'center'}}>
            <Grid columns={['xsmall', 'small'].includes(size) ? 'small' : ['small', 'small']} rows={['xsmall', 'small'].includes(size) ? '100%' : ['small', 'small']} gap='small'>
                {channels.map(channel => (
                <Box flex  justify='center' align='center' gap='medium' key={channel.name}>
                    <Anchor 
                        icon={channel.icon}
                        href={channel.href} 
                        a11yTitle={t(channel.a11yTitle)} 
                        size='xlarge'
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
