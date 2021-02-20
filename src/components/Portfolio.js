import React, { Component, useState } from 'react';
import { Box, Image, Heading, Button, Anchor, Text, Layer } from 'grommet';
import workContents from './workContents.js';

function returnYOffset(y) {
    if (window.pageYOffset === 0) {
        window.scrollTo(0, y);
    }
}

const Tags = (props) => (
    <Box
        direction='row'
        style={{ flexWrap: 'wrap', display: ['xsmall', 'small'].includes(props.size) ? 'block' : 'flex'}}
        align='center'
        gap='small'
        pad='xsmall'
        justify='around'
        overflow='auto'
    >
        {props.tags.map((tag, i) => (
            <Box key={i} margin={{ top: 'small', bottom: 'small' }}>
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

const Preview = (props) => {
    const [show, setShow] = useState();
    const [yOffSet, setYOffSet] = useState();

    return (
    <Box tag='article'
            direction='row'
            flex 
            align='center'
            margin={{top: 'medium', bottom: 'medium'}}
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
        {props.images.map(img => (
            <>
            <Image 
                src={img.src} 
                key={img.order} 
                alt={img.alt} 
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
                    background='paper'>
                        <Image 
                            fit='contain'
                            src={img.src} 
                            alt={img.alt} 
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
            </>
        ))}
    </Box>
    )

    
}
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
            target='_blank'  
            color='black'
            key={link.href}
            label={link.title}
            margin='xxsmall'
        />
    ))}
    </Box>
)

const WorkSlice = (props) => (
    props.contents.map(content => (
        <Box tag='section'
            border={{ side: 'all', color: 'light-4' }}
            round={{ size: 'small' }}
            pad='large'
            elevation='medium'
            gap='xxsmall'
            margin={{ top: 'medium', bottom: 'medium' }}
            key={content.detail}
        >
            <Heading level={1} textAlign='start'
                style={{ margin: 0 }}>
                {content.title} </Heading>
        
            <Text size='medium' margin={{ top: '2rem', bottom: '2rem' }} color='dark-2'>{content.detail}</Text>
            <Tags tags={content.tags} size={props.size} />
            <Preview images={content.images} />
            {content.gif.src !== '' && (
                <PreviewGif gif={content.gif} />
            )}
            <LinkList links={content.links} />
        </Box>
    ))
)

export default class Portfolio extends Component {    
    constructor(props) { 
        super(props)
        this.state = {
            size: props.size
        }
    }
    render() {
        return (
            <WorkSlice contents={workContents} size={ this.state.size } />
        )
    }
}