import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Text, Heading } from 'grommet';

const dateToString = (date) => { 
   return date.toISOString().slice(0, 10)
} 

const blogSimpleInfo = [
    { title: 'testpost', category: 'til', filename: 'testpost', date: dateToString(new Date())},
    { title: 'testPost2', category: 'feature', filename: 'testPost2', date: dateToString(new Date())},
]


class PostList extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            category: props.title,
            detail: props.detail
        }
    }
    render() { 
        const { match } = this.props;
        const categoryMatched = blogSimpleInfo.find(post => post.category === this.state.category);
        return (
            <Box tag='main'>
                <Heading level={ 3 }>{ this.state.detail }</Heading>
                <ul className='blogListWrap'>

                    {<li>
                        <Link to={`${match.url}/${this.state.category}/${categoryMatched.title.split(" ").join("-")}`}
                            className='blogList'
                        >
                            <Text pad={{ right: 'small' }}>{categoryMatched.title}</Text>
                            <Text color='light-4'>{categoryMatched.date}</Text>
                        </Link>
                    </li>}
                </ul>
            </Box>
        )
    }
}
export default withRouter(PostList);


           