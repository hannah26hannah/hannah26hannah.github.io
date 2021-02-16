import React, { Component } from 'react';
import { Box, Button } from 'grommet';
// import { Link } from 'react-router-dom';

import MarkdownRenderer from './MarkdownRenderer.js';

const blogSimpleInfo = [
    { title: 'testpost', category: 'til', filename: 'testpost' },
    { title: 'testPost2', category: 'feature', filename: 'testPost2'}
]


const GoBack = (props) => (
    <Button
        primary
        label='Back to List'
        style={{ background: 'lightblue', border: 'none', width:'12rem' }}
        onClick={ () => props.history.goBack()}
    />
)

export default class BlogDetail extends Component { 
    render() {
        const { history, location } = this.props;
        const str = location.pathname;
        const postId = str.substring(str.lastIndexOf('/') + 1, str.length);
        const post = blogSimpleInfo.find(post => post.filename === postId);

        return (
            <Box>
                {post && (
                    <>
                        <MarkdownRenderer fn={post.filename}/>
                    </>
                )}
                {(post === undefined || post == null) && (
                    <div>존재하지 않음</div>
                )}
                <GoBack history={ history }/>
            </Box>
        )
    }
}
