import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Text, Heading } from 'grommet';

class PostList extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            category: props.title,
            detail: props.detail,
            posts: props.posts,
            size: props.size,
        }
    }
    
    render() { 
        const { match } = this.props;

        return (
            <Box tag='main'>
                <Heading level={ 3 }>{ this.state.detail }</Heading>
                {this.state.posts.length <= 0 && (
                    <Box>No Data Yet</Box>      
                )}
                <ul className='blogListWrap'>    
                {this.state.posts.map(post => (
                    <li key={post.id}>
                        <Link className='blogList' direction='row-responsive' to={`${match.url}/${post.category}/${post.id}`}>
                            <Text pad={{ right: 'small' }}
                                 width='small'
                            >{post.title}</Text>
                            <Text color='light-4'>{post.date.substring(0, 10)}</Text>
                        </Link>
                    </li>
                ))}
                </ul>
            </Box>
        )
    }
}
export default withRouter(PostList);


           