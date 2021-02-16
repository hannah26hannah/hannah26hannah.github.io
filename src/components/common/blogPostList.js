import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Text, Heading } from 'grommet';

const dateToString = (date) => { 
   return date.toISOString().slice(0, 10)
} 

const blogSimpleInfo = [
    { title: 'testpost', category: 'til', filename: 'testpost', date: dateToString(new Date())},
    { title: 'testPost2', category: 'til', filename: 'testPost2', date: dateToString(new Date())},
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
        
        return (
            <Box tag='main'>
                <Heading level={ 3 }>{ this.state.detail }</Heading>
                <ul className='blogListWrap'>
                    {blogSimpleInfo.map(({ title, date }) => (
                        <li key={title}>
                            <Link to={`${match.url}${this.state.category}/${title.split(" ").join("-")}`}
                                className='blogList'
                            >
                                <Text pad={{ right: 'small' }}>{title}</Text>
                                <Text color='light-4'>{date}</Text>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
        )
    }
}
export default withRouter(PostList);


           