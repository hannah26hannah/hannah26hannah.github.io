import React, { Component } from 'react';
import { Tabs, Tab, Box, Button } from 'grommet';
import ReactMarkdown from 'react-markdown'
import { Link, Route, useLocation } from 'react-router-dom';
import markdownPath from '../../src/pages/blog/testpost.md';

const blogSimpleInfo = [
    { title: '제목입니다', date: `${new Date()}`, href: '/blog/1' },
    { title: '제목입니다', date: `${new Date()}`, href: '/blog/2' },
    { title: '제목입니다', date: `${new Date()}`, href: '/blog/3' },
    { title: '제목입니다', date: `${new Date()}`, href: '/blog/4' },
    { title: '제목입니다', date: `${new Date()}`, href: '/5' },
    { title: '제목입니다', date: `${new Date()}`, href: '/6' },
]

const MainPost = () => (
    <Box tag='main'>
        <Route path='/blog'>
            <ul>
                {blogSimpleInfo.map(info => (
                    <Link to={ info.href } key={info.href}><li>{ info.title }</li></Link>
                ))}
            </ul>
        </Route>
        <Route path='/blog/1' component={() => <MarkDonTest />} />
    </Box>
)

const TabNames = [
    { title: 'TIL', body: <MainPost />},
    { title: 'Feature', body: <MainPost />},
    { title: 'Published from Tistory', body: <MainPost />, state: 'disabled' }
]

const BackToList = () => (
    <Box>
    {useLocation().pathname !== '/blog' && (
        <Link to='/blog'>
            <Button primary label='Back to List' style={{ background: 'lightblue', border: 'none' }} />
        </Link>)
    }
    </Box>
)

const MarkDonTest = (props) => (
    <ReactMarkdown source={props.md} />
)
export default class Blog extends Component { 
    constructor() { 
        super();
        this.state = { markdownContents: null }
    }
    componentWillMount() { 
        fetch(markdownPath).then((res) => res.text()).then((txt) => { 
            this.setState({ markdownContents: txt})
        })
        console.log(this.state)
    }
    
    render() { 
        return (
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
                <MarkDonTest md={ this.state.markdownContents }/>
                <Box>
                    <BackToList />
                </Box>
            </Box>
        )
    }
}
