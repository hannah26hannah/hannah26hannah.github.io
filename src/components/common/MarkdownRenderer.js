import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import markdownPath from '../../../src/pages/blog/testpost.md';

export default class BlogDetail extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            markdown: null
        }
    }
    componentDidMount() { 
        fetch(markdownPath)
            .then(res => { 
                return res.text()
            })
            .then(text => {
                this.setState({
                    markdown: text
                })
            })
    }
    render() {
        return (
            <Box>
            <ReactMarkdown source={this.state.markdown} />
            <Link to='/blog'><Button primary label='Back to List' style={{ background: 'lightblue', border: 'none' }} />
            </Link>
            </Box>
        )
    }
}