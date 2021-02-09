import React, { Component } from 'react';
import { Main, ResponsiveContext, Box, Heading, Text } from 'grommet';
import contents from './contents';
import Contact from './Contact.js'
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
            <Heading
                level={2}
                margin="none"
                a11yTitle={ content.title.subject }
                textAlign={props.size === 'small' ? 'center' : 'start'}>{ content.title.subject }
            </Heading>
            {content.title.subtitle && (
                <Heading
                    margin="none"
                    level={2}
                    a11yTitle={ content.title.subtitle }
                    textAlign={props.size === 'small' ? 'center' : 'start'}
                    color='orange'>{content.title.subtitle}</Heading>     
            )}
                {content.title.detail && (
                    <Heading
                        level={2}
                        margin="none"
                        a11yTitle={ content.title.detail }
                        textAlign={props.size === 'small' ? 'center' : 'start'}>
                        { content.title.detail }
                    </Heading>
            )}
                <Text size='large' margin={{ top: '5rem' }} color='dark-2'>{content.contents}</Text>
                {content.order === 7 && (
                    <Contact channel={ props.channel }/>
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
        console.log('Body의 state 상태 ', this.state)
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Main pad='large' fill='vertical'
                        style={{
                        height: 'auto'
                    }}>
                        <Heading level={1} alignSelf='center'>{size}</Heading>
                        <MainSection size={size} contents={this.state.contents} channel={ this.state.channel}/>
                    </Main>
                )}
            </ResponsiveContext.Consumer> 
        )
    }
}