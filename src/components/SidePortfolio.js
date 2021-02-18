import React, { Component, useState } from 'react';
import sideContents from './sideContents.js';
import { Box, Image, Heading, Anchor, Text, Layer, Button } from 'grommet';


const Preview = (props) => {
    const [show, setShow] = useState();
    
    return (
    <Box tag='article'
        direction='row'
        flex 
        align='center'
        margin={{top: 'small', bottom: 'small'}}
        border={{side: 'all', color: 'dark-2'}}
        round
        pad='small'
    >
        <Image 
            fit='cover'
            src={props.image.src} 
            alt={props.image.alt} 
            style={{borderRadius: '12px'}}
            onClick={() => { 
                setShow(true)
            }}
            />
        {show && (
            <Layer 
                onEsc={() => setShow(false)}
                onClickOutside={() => setShow(false)}
                margin='xlarge'
            >
                <Box
                    pad='small'
                >
                    <Image 
                        fit='cover'
                        src={props.image.src} 
                        alt={props.image.alt} 
                        style={{borderRadius: '12px'}}
                        margin='small'
                    />
                    <Box
                        width='small'
                        alignSelf='end'
                >
                    <Button 
                        primary
                        hoverIndicator='light-1'
                        color='logoGreen'
                        label='close' 
                        onClick={() => { setShow(false)}} />
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
            pad='medium'
            elevation='medium'
            key={content.detail}
            width='large'
            margin='small'
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
                direction='row-responsive'
                justify='center'
                align='center'
            >
            <SideSlice contents={sideContents} size={ this.state.size } />
            </Box>
        )
    }
}
