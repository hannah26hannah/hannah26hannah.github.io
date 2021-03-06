import React, { useState } from 'react';
import sideContents from './sideContents.js';
import { Box, Image, Heading, Anchor, Text, Layer, Button } from 'grommet';
import { withTranslation } from 'react-i18next';

function returnYOffset(y) {
    if (window.pageYOffset === 0) {
        window.scrollTo(0, y);
    }
}
const Preview = (props) => {
    const t = props.multi;
    const [show, setShow] = useState();
    const [yOffSet, setYOffSet] = useState();

    return (
        <Box tag='article'
            direction='row' flex  align='center'
            margin={{top: 'small', bottom: 'small'}}
            border={{side: 'all', color: 'dark-2'}}
            round pad='small'
            style={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
            <Image
                src={props.image.src} 
                alt={props.image.alt}
                onClick={() => { 
                    setYOffSet(window.pageYOffset);
                    setShow(true)}}
                style={{
                    flexShrink: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '12px',
                }}/>
            {show && (
                <Layer 
                    onEsc={() => { setShow(false); returnYOffset(yOffSet)}}
                    onClickOutside={() => { setShow(false); returnYOffset(yOffSet)}}
                    margin='xlarge'>
                    <Box pad='small' direction='column' flex background='paper'>
                        <Text size='small' color='dark-4'>
                            {t('inform_1')}
                        </Text>
                        <Image 
                            fit='contain'
                            src={props.image.src} 
                            alt={props.image.alt} 
                            style={{borderRadius: '12px', paddingTop: '1rem'}}/>
                        <Box pad='small' alignSelf='end'>
                            <Button
                                style={{ width: '100%'}} primary
                                hoverIndicator='light-1'
                                color='logoGreen' label='close' 
                                onClick={() => { setShow(false); returnYOffset(yOffSet) }} />
                        </Box>
                    </Box>
                </Layer>)}
        </Box>
)}

const LinkList = (props) => {
    const validLinks = props.links.filter(link => link.href !== '');
    return (
        <Box pad='small'>
            {validLinks.map(link => (
                <Anchor
                    icon={link.icon}
                    href={link.href}
                    target='_blank'  
                    color='black'
                    key={link.href}
                    label={link.title}
                    margin='xxsmall'
                />
            ))}
        </Box>
    )
}


const SideSlice = (props) => {
    const t = props.multi
    return (
        sideContents.map(content => (
            <Box tag='section'
                border={{ side: 'all', color: 'light-4'}}
                round={{ size: 'small'}}
                pad='large'
                elevation='medium'
                gap='xxsmall'
                margin={{ top: 'medium', bottom: 'medium' }}
                key={content.title}
                
                >
                <Heading level={3} textAlign='start' style={{ margin: 0 }}>
                    {content.title} 
                </Heading>
                
                <Text size='medium' margin={{ top: '2rem', bottom: '2rem' }} color='dark-2'>
                    {content.detail}
                </Text>
                <Preview image={content.image} multi={t} />
                <Text size='small' color='status-unknown'>
                    {t('enlarge')}
                </Text>
                <Text size='medium' margin={{ top: '1rem', bottom: '1rem' }} color='dark-2'>
                    {content.tags}
                </Text>
                <LinkList links={content.links} />
            </Box>
        ))
    )
}


    
function SidePortfolio (props) {
    const {t} = props; // i18n
    return (
        <Box 
            tag='main' 
            flex
            justify='center'
            align='center'
            pad={{left: '3vw'}}>
            <SideSlice multi={t}/>
        </Box>
    ) 
}


export default withTranslation()(SidePortfolio)