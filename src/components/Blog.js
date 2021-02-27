import React, { Component, useState } from 'react';
import { Tabs, Tab, Box, Button } from 'grommet';
import { Route, withRouter } from 'react-router-dom';
import BlogPostList from './common/BlogPostList.js';
import BlogPostDetail from './common/BlogPostDetail';
import WriteBlogPost from './common/WriteBlogPost';
import LoginModal from './common/LoginModal.js';
import AlertSlice from './common/AlertSlice';
import { Link } from 'react-router-dom';
// import ServerTest from './ServerTest.js'

export const tabNames = [
    { title: 'TIL', body: <BlogPostList title='til' detail='🔍 Today I Learned' />},
    { title: 'Feature', body: <BlogPostList title='feature' detail='👀 Featured Article' />},
    { title: 'Tistory', body: <BlogPostList title='tistory' detail='📝 Published From Tistory' />, state: 'disabled' }
]

const adminTabNames = [
    { title: 'Write', body: <WriteBlogPost title='write' detail='📜 blog post editor' />}
]



class Blog extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            markdownContents: null,
            isLogin: false
        }
    }
    
    render() { 
        const { match } = this.props
        
        return (
            <Box pad='large' role='tabpanel' aria-labelledby='blog-anchor'>
                <LoginModal />
                {/* <ServerTest /> */}
                <AlertSlice />
                <Route exact path={match.path}>
                    <Tabs alignControls='start'>
                        {tabNames.map(tab => (
                        <Tab title={tab.title}
                            key={ tab.title }
                            margin={{ bottom: '2rem' }}
                            disabled={tab.state === 'disabled' ? true : false}>
                            <Route exact path={match.path} component={() => tab.body } />
                        </Tab>
                        ))}
                    </Tabs>
                    
                    
                </Route>

                {/* admin blog editing */}
                <Route path={`${match.path}/write`}>
                    <Tabs alignControls='end'>
                        {adminTabNames.map(tab => (
                        <Tab title={tab.title}
                            key={ tab.title }
                            margin={{ bottom: '2rem' }}
                            disabled={tab.state === 'disabled' ? true : false}>
                            <Route path={match.path} component={() => tab.body } />
                        </Tab>
                        ))}
                    </Tabs>
                </Route>
                
                {/* Each Post */}
                <Route path={`${match.path}/:cate/:id`} component={BlogPostDetail} />
                
            </Box>
        )
    }
}

export default withRouter(Blog);
