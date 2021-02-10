import React, { Component } from 'react';
import { Box, Image, Heading, Button, Anchor, Text } from 'grommet';

import workContents from './workContents.js';

const Tags = (props) => (
    <Box flex
        direction='row'
        align='center'
        gap='small'
        pad='xsmall'
        justify='around'
        overflow='auto'
        >
        {props.tags.map((tag, i) => (
            <Button color='paper' 
                primary 
                label={tag}
                key={i}
                margin='xxsmall'
                hoverIndicator='light-1'
                style={{width: '50%' }}
            />)
    )}</Box>
)
// TODO: tags grid responsive design, image size 조정하기

const PreviewSlider = (props) => (
    <Box tag='article'
        direction='row'
        flex 
        align='center'
        margin={{top: 'medium', bottom: 'medium'}}
        border={{side: 'all', color: 'dark-2'}}
        round
        pad='small'

    >
    {props.images.map(img => (
        <Image 
            fit='cover' 
            src={img.src} 
            key={img.order} 
            alt={img.alt} 
            style={{borderRadius: '12px'}}
            />
    ))}
    </Box>
)
const PreviewGif = (props) => (
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
            src={props.gif.src} 
            alt={props.gif.alt}
            style={{borderRadius: '12px'}}
            />
    </Box>
)
const LinkList = (props) => (
    <Box
        pad='small'
    >{
    props.links.map(link => (
        <Anchor
            icon={link.icon}
            href={link.href}
            color='black'
            key={link.href}
            label={link.title}
            margin='xxsmall'
            hoverIndicator='orange'
        />
    ))}
    </Box>
)


const WorkSlice = (props) => (
    props.contents.map(content => (
        <Box tag='section'
            border={{ side: 'all', color: 'light-4'}}
            round={{ size: 'small'}}
            pad='large'
            gap='xxsmall'
            margin={{ top: 'medium', bottom: 'medium'}}
            elevation='medium'
            key={content.detail}
        >
            <Heading level={1} textAlign='start' 
            style={{ margin: 0 }}>
            {content.title} </Heading>
            
            <Text size='medium' margin={{ top: '2rem', bottom: '2rem' }} color='dark-2'>{content.detail}</Text>

            <Tags tags={content.tags}/>            
            <PreviewSlider images={content.images} />
            {content.gif.src !== '' && (
               <PreviewGif gif={content.gif}/>
            )}
            <LinkList links={content.links}/>
        </Box>
    ))   
)


export default class Portfolio extends Component {    
    render() {
        return (
            <WorkSlice contents={workContents}/>
        )
    }
}