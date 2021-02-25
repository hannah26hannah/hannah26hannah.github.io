import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Main, ResponsiveContext, Box, Heading, Text } from 'grommet';
import contents from '../contents';
import Contact from '../Contact.js'
import ScrollToTop from '../ScrollToTop.js';
import Portfolio from '../Portfolio.js'
import SidePortfolio from '../SidePortfolio.js'
import Blog from '../Blog.js';


const MainSection = (props) => {
    const t = props.multi
    return (
        props.contents.map(content => (
             <Box
                tag='section'
                id={content.link}
                role="tabpanel"
                aria-labelledby={content.link+'-anchor'}
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
                        >{t(content.title)}
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
                        <Contact 
                            channel={ props.channel }
                        />
                    )}
                </Box>
            </Box>
        ))
    )
}



class Body extends Component { 
    constructor(props) {
        super(props);
            this.state = {
                contents: contents,
                channel: props.channel
            }
    }
    render() {
        const {t} = this.props;
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
                                component={() => 
                                <MainSection 
                                    multi={t}
                                    contents={this.state.contents} 
                                    channel={this.state.channel} 
                                    size={ size } 
                                />}
                            />
                            <Route
                                path='/blog'
                                component={() => <Blog multi={t} />} />
                        <ScrollToTop size={ size } />
                    </Main>
                )}
            </ResponsiveContext.Consumer> 
        )
    }
}

export default withTranslation()(Body)