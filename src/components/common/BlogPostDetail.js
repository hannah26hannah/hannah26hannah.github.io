import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Markdown, Text } from 'grommet';
// import MarkdownRenderer from './MarkdownRenderer.js';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = (props) => {
    const {match, history, posts} = props
    const category = match.params.cate;
    const postId = Number(match.params.id) - 1;
    const post = posts[postId];
    const size = props.size;
    

    return (
        <Box tag='main'>
            {post && (
                <Box tag='section' gap='medium'>
                    <Box tag='article' className='postHeader'>
                        <Heading level={ 2 } size='medium' style={{ borderBottom: '1px solid #57816D'}}>{post.title}</Heading>    
                        <Text alignSelf='end' size='small'>{post.category} | {post.date.substring(0, 10)}</Text>
                    </Box>
                    <Box tag='article' className='postBody' style={{ borderBottom: '1px solid #57816D'}}>
                         <Markdown>{post.contents}</Markdown>
                    </Box>
                    <Box className='postFooter' flex 
                        justify={['medium', 'large'].includes(size) ? 'space-between' : 'center'}
                        align='center'
                        gap='small'
                        direction={['medium', 'large'].includes(size) ? 'row' : 'column'}
                        >
                        <Button
                            primary
                            label='Back to List'
                            style={{ border: 'none', width:'12rem' }}
                            onClick={ () => props.history.goBack()} />
                        {/* only visible to admin */}
                        <Button
                            primary
                            label='Delete Post'
                            style={{ border: 'none', width:'12rem' }}
                            onClick={ () => console.log('deleted') } />
                        </Box>
                </Box>
            )}
        </Box>
    )
}

export default BlogDetail;
