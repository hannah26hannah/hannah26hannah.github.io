import React, { Component, useState } from 'react';
import sideContents from './sideContents.js';
import { Box, Image, Heading, Anchor, Text, Layer, Button } from 'grommet';

function returnYOffset(y) {
    if (window.pageYOffset === 0) {
        window.scrollTo(0, y);
    }
}
const Preview = (props) => {
    const [show, setShow] = useState();
    const [yOffSet, setYOffSet] = useState();

    return (
    <Box tag='article'
        direction='row'
        flex 
        align='center'
        margin={{top: 'small', bottom: 'small'}}
        border={{side: 'all', color: 'dark-2'}}
        round
        pad='small'
        style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            
        }}
    >
        <Image
            src={props.image.src} 
            alt={props.image.alt}
            onClick={() => { 
                setYOffSet(window.pageYOffset);
                setShow(true)
            }}
            style={{
                flexShrink: '0',
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '12px',
            }}
        />
        {show && (
           <Layer 
           onEsc={() => {
                setShow(false);
                returnYOffset(yOffSet)
           }}
           onClickOutside={() => {
                setShow(false)
                returnYOffset(yOffSet)
           }}
           margin='xlarge'
           >
            <Box
               pad='small'
               direction='column'
               flex
               background='paper'
            >
                <Image 
                   fit='contain'
                   src={props.image.src} 
                   alt={props.image.alt} 
                   style={{borderRadius: '12px', paddingTop: '1rem'}}
               />
               <Box
                   pad='small'
                   alignSelf='end'
               >
                   <Button
                       style={{ width: '100%'}}
                       primary
                       hoverIndicator='light-1'
                       color='logoGreen'
                       label='close' 
                       onClick={(e) => {
                           setShow(false)
                           returnYOffset(yOffSet)
                       }} />
               </Box>
            </Box>
            </Layer>
        )}
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


const SideSlice = (props) => (
    props.contents.map(content => (
        <Box tag='section'
            border={{ side: 'all', color: 'light-4'}}
            round={{ size: 'small'}}
            pad='large'
            elevation='medium'
            gap='xxsmall'
            margin={{ top: 'medium', bottom: 'medium' }}
            key={content.detail}
            
            >
            <Heading level={3} textAlign='start' 
            style={{ margin: 0 }}>
            {content.title} </Heading>
            
            <Text size='medium' margin={{ top: '2rem', bottom: '2rem' }} color='dark-2'>{content.detail}</Text>
            <Preview image={content.image} />
            <Text size='medium' margin={{ top: '1rem', bottom: '1rem' }} color='dark-2'>{content.tags}</Text>
            <LinkList links={content.links}/>
        </Box>
    ))
)

    
    

export default class SidePortfolio extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            size: props.size
        }
    }
    render() {
        return (
            <Box 
                tag='main' 
                flex
                justify='center'
                align='center'
                pad={{left: '3vw'}}
            >
                <SideSlice contents={sideContents} size={ this.state.size } />
            </Box>
        )
    }
}
