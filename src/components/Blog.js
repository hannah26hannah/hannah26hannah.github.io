import React, { Component } from 'react';
import { Tabs, Tab, Box } from 'grommet';
import { Link, Route, withRouter } from 'react-router-dom';
import BlogDetail from './common/MarkdownRenderer';
const blogSimpleInfo = [
    { title: '제목입니다', date: `${new Date()}`, href: '1' },
    { title: '제목입니다', date: `${new Date()}`, href: '2' },
    { title: '제목입니다', date: `${new Date()}`, href: '3' },
    { title: '제목입니다', date: `${new Date()}`, href: '4' },
    { title: '제목입니다', date: `${new Date()}`, href: '5' },
    { title: '제목입니다', date: `${new Date()}`, href: '6' },
]

const BlogList = (props) => (
    <Box tag='main'>
        <h4>{ props.detail }</h4>
        <ul>
            {blogSimpleInfo.map(info => (
                <Link to={ `/blog/${props.title}/${info.href}` } key={info.href}><li>{ info.title }</li></Link>
            ))}
        </ul>
    </Box>
)

const TabNames = [
    { title: 'TIL', body: <BlogList title='til' detail='🔍 Today I Learned' />},
    { title: 'Feature', body: <BlogList title='feature' detail='👀 Featured Article' />},
    { title: 'Tistory', body: <BlogList title='tistory' detail='📝 Published From Tistory' />, state: 'disabled' }
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
                <Route path={`${match.path}/:id`} component={BlogDetail} />
            </Box>
        )
    }
}
export default withRouter(Blog);