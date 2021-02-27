import React, { useState } from 'react';
import { Box, Button, Form, FormField, Heading, Select, TextInput } from 'grommet';
import { Link } from 'react-router-dom';
import MDEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
import { tabNames } from '../Blog.js';
import axios from 'axios';
// import theme from './theme';

const mdParser = new MarkdownIt();

const WriteBlogPost = (props) => {
    const detail = props.detail;
    const options = tabNames.map(name => name.title);
    const [post, setPost] = useState({
        title: '', 
        category: '', 
        content: ''
    });
    const [errMsg, setErrMsg] = useState({
        title: '',
        category: '',
        contents: ''
    })

    const sendDataToServer = async(e) => {
        const res = await axios('/add/post', {
            method: 'POST',
            data: post,
            headers: new Headers()
        })
        if (res.data) {
            window.location.replace('/blog')
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('print final post', post)

        let err = false;
        if (post.title.trim() === "") { // TODO: add snack bar, validation
            // updateErrMsg('title', 'Title')
            err = true;
        }
        if (post.category === "") {
            // updateErrMsg('category', 'Category')
            err = true;
        }
        if (post.content.trim() === "") {
            // updateErrMsg('contents', 'Contents')
            err = true;
        }
        console.log('error status', err)
        if (!err) { sendDataToServer() }
        
        
    }

    // const updateErrMsg = (key, value) => {
    //     setErrMsg({
    //         ...errMsg,
    //         [key]: `${value} Field is Required!`
    //     })
    // }
    const updateItem = (key, value) => {
        setPost({
            ...post,
            [key]: value
        });
    }
    return (
        <Box tag='main'>
            <Heading level={ 3 }>{ detail }</Heading>
            <Form
                value={post}
                onSubmit={handleSubmit}
            >
                <FormField name='title' htmlFor='title' label='Title'>
                    <TextInput id='title' name='title' type='text' 
                                value={post.title} onChange={(e) => updateItem('title', e.target.value )} />
                </FormField>
                <FormField name='category' htmlFor='category' label="Category">
                    <Select 
                        name="category" 
                        options={options}
                        value={post.category}
                        onChange={({option}) => updateItem('category', option)}
                    />
                </FormField>
                <FormField name='contents' htmlFor='contents' label='Contents'>
                    <MDEditor style={{ height: '500px', marginTop: '2rem' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={({html, text}) => updateItem('content', html)}
                    />
                </FormField>
                
                <Box direction='row' justify='between' align='center' margin={{ top:'medium' }}>
                <Link to='/blog'>
                    <Button
                    primary
                    label='Back to List'
                    style={{ border: 'none', width:'12rem' }}
                    />
                </Link>
                <Link to='/blog'>
                    <Button
                        primary
                        type='submit'
                        label='Save Post'
                        style={{ border: 'none', width: '12rem' }}
                        onClick={handleSubmit}
                    />
                </Link>
            </Box>
            </Form>
        </Box>
    )
}


export default WriteBlogPost;