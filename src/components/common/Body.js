import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, ResponsiveContext, Box, Heading, Text } from 'grommet';
import contents from '../contents';
import Contact from '../Contact.js'
import ScrollToTop from '../ScrollToTop.js';
import Portfolio from '../Portfolio.js'
import SidePortfolio from '../SidePortfolio.js'
import Blog from '../Blog.js';


const MainSection = (props) => (
    props.contents.map(content => (
         <Box
            tag='section'
            id={content.link}
            direction='row-responsive'
            flex
            justify='around'
            align='center'
            pad={{ top: 'large', bottom: 'large' }}
            key={content.order}
            margin={{ top: '2rem', bottom: '3rem' }}
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
                    <img src={content.image} alt={content.imageAlt} style={{ width: '100%', height: 'auto' }}/>
                </Box>
            )}
            <Box
                tag='article'
                width='large'
                pad='medium'
                >
                {content.title && (
                    <Heading
                        level={1}
                        margin="none"
                        a11yTitle={content.title}
                        textAlign='center'
                    >{content.title}
                    </Heading>
                )}
                {content.titleComponent}
                
                <Text size='large' margin={{ top: '2rem', bottom: '4rem' }} color='dark-2'>{content.contents}</Text>

                {content.contentsComponent}

                {content.order === 3 && (
                    <Portfolio size={ props.size } />
                )}
                
                {content.order === 4 && (
                    <SidePortfolio size={ props.size } />
                )}
                {content.order === 6 && (
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
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Main
                        pad='large' fill='vertical'
                        style={{
                        height: 'auto'
                        }}>
                            <Route
                                exact={true}
                                path='/'
                            component={() => <MainSection contents={this.state.contents} channel={this.state.channel} size={ size } />}
                            />
                            <Route
                                path='/blog'
                                component={() => <Blog />} />
                        <ScrollToTop size={ size } />
                    </Main>
                )}
            </ResponsiveContext.Consumer> 
        )
    }
}