import React, { Component } from 'react';
import { Tabs, Tab, Box } from 'grommet';
import { Route, withRouter } from 'react-router-dom';
import BlogPostList from './common/BlogPostList.js';
import BlogPostDetail from './common/BlogPostDetail';
import WriteBlogPost from './common/WriteBlogPost';
import AlertSlice from './common/AlertSlice';
// import { Link } from 'react-router-dom';
import SnackBar from './common/SnackBar';
// import ServerTest from './ServerTest.js'
import axios from 'axios';



export const tabNames = [
    { title: 'TIL', detail: '🔍 Today I Learned' },
    { title: 'Feature', detail:'👀 Featured Article' },
    { title: 'Tistory', detail: '📝 Published From Tistory', state: 'disabled' }
]


const adminTabNames = [
    { title: 'Write' }
]



class Blog extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            markdownContents: null,
            isLogin: false,
            postStatus: '',
            size: '',
            posts: [],
            page: 1,
            limit: 10,
            allPage: []
        }
    }

    componentDidMount() {
        const { location, size } = this.props
        this.setState({postStatus: location.state ? location.state.post : ''})
        this.setState({size: size})
        this.getPosts();

    }

    getPosts = async () => {        
        const posts = await axios('/get/post', {
            method: 'GET'
        })

        this.setState({ posts: posts.data });
    }

    render() {        
        const { match } = this.props;

        return (
            <Box pad='medium' role='tabpanel' aria-labelledby='blog-anchor'>
                {/* <ServerTest /> */}
                <AlertSlice />
                <Route exact path={match.path}>
                    <Tabs alignControls='start'>
                        {tabNames.map(tab => (
                        <Tab title={tab.title}
                            key={ tab.title }
                            margin={{ bottom: '2rem' }}
                            disabled={tab.state === 'disabled' ? true : false}>
                            <Route exact path={match.path} component={() => 
                                <BlogPostList 
                                    size={this.state.size} 
                                    title={tab.title.toLowerCase()} 
                                    detail={tab.detail} 
                                    posts={this.state.posts.filter(post => post.category === tab.title)} 
                                />
                            } />
                            
                        </Tab>
                        ))}
                    </Tabs>
                {/* snack bar alert */}
                {this.state.postStatus === '' && (
                    <SnackBar barStatus={this.state.postStatus} />
                )}
                
                </Route>

               
                {/* admin blog editing */}
                <Route path={`${match.path}/write`}>
                    <Tabs alignControls='end'>
                        {adminTabNames.map(tab => (
                        <Tab title={tab.title}
                            key={ tab.title }
                            margin={{ bottom: '2rem' }}
                            disabled={tab.state === 'disabled' ? true : false}>
                            <Route path={match.path} component={() => <WriteBlogPost size={this.state.size} title='write' detail='📜 blog post editor' /> } />
                        </Tab>
                        ))}
                    </Tabs>
                </Route>
                 
                 {/* Each Post */}
                 <Route 
                    path={`${match.path}/:cate/:id`}
                    render={(props) => (
                        <BlogPostDetail {...props} size={this.state.size} posts={this.state.posts} />
                    )}
                    />
            </Box>
        )
    }
}

export default withRouter(Blog);
