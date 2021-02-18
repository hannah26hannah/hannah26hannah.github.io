import React, { Component } from 'react';
import { Tabs, Tab, Box } from 'grommet';
import { Route, withRouter } from 'react-router-dom';
import BlogPostList from './common/BlogPostList.js';
import BlogPostDetail from './common/BlogPostDetail';
// import ServerTest from './ServerTest.js'

const TabNames = [
    { title: 'TIL', body: <BlogPostList title='til' detail='🔍 Today I Learned' />},
    { title: 'Feature', body: <BlogPostList title='feature' detail='👀 Featured Article' />},
    { title: 'Tistory', body: <BlogPostList title='tistory' detail='📝 Published From Tistory' />, state: 'disabled' }
]

class Blog extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            markdownContents: null,
        }
    }
    
    render() { 
        const { match } = this.props
        return (
            <Box pad='large'>
                {/* Tab to display Index */}
                {/* <ServerTest /> */}
                <Tabs alignControls='start'>
                    {TabNames.map(tab => (
                    <Tab title={tab.title}
                        key={ tab.title }
                        margin={{ bottom: '2rem' }}
                        disabled={tab.state === 'disabled' ? true : false}>
                        <Route exact path={match.path} component={() => tab.body } />
                    </Tab>
                    ))}
                </Tabs>
                {/* Each Post */}
                <Route path={`${match.path}/:id`} component={BlogPostDetail} />
            </Box>
        )
    }
}
export default withRouter(Blog);