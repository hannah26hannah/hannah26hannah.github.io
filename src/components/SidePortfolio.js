import React, { Component } from 'react';
import sideContents from './sideContents.js';
import { Box, Image, Heading, Button, Anchor, Text } from 'grommet';

const Tags = (props) => (
    <Box flex
        direction='row'
        style={{flexWrap: 'wrap'}}
        align='center'
        gap='small'
        pad='xsmall'
        justify='end'
        overflow='auto'
        >
        {props.tags.map((tag, i) => (
            <Box key={i} margin={{top: 'xsmall', bottom: 'xsmall'}}>
            <Button color='paper' 
                primary 
                label={tag}
                hoverIndicator='light-1'
            />
            </Box>
            )
        )}
    </Box>
)
const Preview = (props) => (
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
            target='_blank'  
            color='black'
            key={link.href}
            label={link.title}
            margin='xxsmall'
        />
    ))}
    </Box>
)

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

            <Tags tags={content.tags}/>            
            <Preview image={content.image} />
            <LinkList links={content.links}/>
        </Box>
    ))
)
export default class SidePortfolio extends Component {
    constructor(props) {
        super(props);
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
            <SideSlice contents={sideContents} size={this.state.size}/>
            </Box>
        )
    }
}
