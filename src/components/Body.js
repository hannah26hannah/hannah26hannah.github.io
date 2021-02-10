import React, { Component } from 'react';
import { Main, ResponsiveContext, Box, Heading, Text } from 'grommet';
import contents from './contents';
import Contact from './Contact.js'
import Experience from './Experience.js';

const MainSection = (props) => (
    props.contents.map(content => (
         <Box
            tag='section'
            direction='row-responsive'
            flex
            justify='around'
            align='center'
            pad={{ bottom: 'large' }}
            key={content.order}
            margin={{ top: '2rem', bottom: '5rem' }}
            border={{ side: 'bottom', color: 'dark-2'}}
        >
            {content.image && (
                <Box
                    tag='article'
                    id={content.link}
                    width={props.size === 'small' ? 'small' : 'medium'}
                    gap='small'
                    pad='small'
                    border={{side: 'between'}}
                    round
                    alignSelf='center'>
                    <img src={content.image} alt={content.imageAlt} />
                </Box>
            )}
            <Box
                tag='article'
                width='large'
                pad='large'
                >
                {content.title && (
                    <Heading
                        level={1}
                        margin="none"
                        a11yTitle={content.title}
                        textAlign={ content.order === 2 ? 'start' : 'center'}>{ content.title }
                    </Heading>
                )}
                {content.titleComponent}
                
                <Text size='large' margin={{ top: '5rem' }} color='dark-2'>{content.contents}</Text>
                {content.contentsComponent}

                {content.order === 6 && (
                    <Contact channel={ props.channel }/>
                )}
                {content.order === 3 && (
                    <Experience />
                )}
            </Box>
        </Box>
    ))
)

export default class Body extends Component { 
    constructor(props) {
        super(props);
            this.state = {
                contents: contents,
                channel: props.channel
            }
    }
    render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Main pad='large' fill='vertical'
                        style={{
                        height: 'auto'
                    }}>
                        <MainSection size={size} contents={this.state.contents} channel={ this.state.channel}/>
                    </Main>
                )}
            </ResponsiveContext.Consumer> 
        )
    }
}