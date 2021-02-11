import React, { Component } from 'react';
import { Main, ResponsiveContext, Box, Heading, Text, List, Tabs, Tab } from 'grommet';
import contents from '../contents';
import Contact from '../Contact.js'
import ScrollToTop from '../ScrollToTop.js';
import Portfolio from '../Portfolio.js'
import SidePortfolio from '../SidePortfolio.js'
import { Route } from 'react-router-dom';


const MainPost = () => (
    <Box tag='main'>
        
            <List
            primaryKey='title'
            secondaryKey='date'
            data={[
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
                { title: '제목입니다', date: `${new Date()}`, href: '주소' },
            ]}
            onClickItem={e => console.log(e.item) }
            />
            
    </Box>
)
const TabNames = [
    {title: 'TIL', body: <MainPost />},
    { title: 'Feature', body: <MainPost /> },
    { title: 'Published from Tistory', body: <MainPost />, state: 'disabled' }
]
const BlogSection = (props) => (
    <Box pad='large'>
        <Tabs alignControls='start'>
            {TabNames.map(tab => (
                <Tab title={tab.title}
                    key={ tab.title }
                    margin={{ bottom: '2rem' }}
                    disabled={tab.state === 'disabled' ? true : false}>
                    {tab.body}
                </Tab>    
            ))}
            
        </Tabs>
    </Box>
)
const MainSection = (props) => (
    props.contents.map(content => (
         <Box
            tag='section'
            id={content.link}
            direction='row-responsive'
            flex
            justify='around'
            align='center'
            pad={{ bottom: 'large' }}
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
                    <img src={content.image} alt={content.imageAlt} />
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
                        textAlign={content.order === 2 ? 'start' : 'center'}>{ content.title }
                    </Heading>
                )}
                {content.titleComponent}
                
                <Text size='large' margin={{ top: '2rem', bottom: '4rem' }} color='dark-2'>{content.contents}</Text>

                {content.contentsComponent}

                {content.order === 3 && (
                    <Portfolio />
                )}
                
                {content.order === 4 && (
                    // <Experience />
                    <SidePortfolio size={props.size}/>
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
                    <Main pad='large' fill='vertical'
                        style={{
                        height: 'auto'
                        }}>
                            <Route
                                exact={true}
                                path='/'
                                component={() => <MainSection contents={this.state.contents} channel={this.state.channel} />}
                            />
                            <Route
                                path='/blog'
                                component={() => <BlogSection size={size} />} />
                        <ScrollToTop size={ size } />
                    </Main>
                )}
            </ResponsiveContext.Consumer> 
        )
    }
}