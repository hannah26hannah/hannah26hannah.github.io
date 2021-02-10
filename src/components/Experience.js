import React, { Component } from 'react';
import { Box, List, Anchor, Text } from 'grommet';

const skills = [
    { title: 'JavaScript', iconName: 'JS' },
    { title: 'HTML5', iconName: 'Html5'},
    { title: 'CSS3', iconName: 'Css3' },
    { title: 'TypeScript', iconName: 'Technology' },
    // { title: 'Nodejs', iconName: 'Node' },
    { title: 'Reactjs', iconName: 'Reactjs'},
    { title: 'Vuejs' },
    { title: 'Firebase' },
    // { title: 'Java', iconName: 'Java' },
    // { title: 'Mysql', iconName: 'Mysql' },
    // { title: 'Express' },
    { title: 'Git/Github' },
]
//     { title: 'figma', iconName: 'Figma' },
//    'Git/Github'
const a11yTitleFunc = (name) => { return `Click to see my projects using ${name}` };
const hrefFunc = (name) => { return `https://github.com/hannah26hannah?tab=repositories&q=${name}&type=&language=` };
const iconFunc = (iconName) => {
    if (!iconName) return `<Technology color='black' />`
    return `<${iconName} color='black' />`
}

function skillGenerator(name, iconName) {     
    return { 
        name: name,
        a11yTitle: a11yTitleFunc(name),
        href: hrefFunc(name),
        icon: iconFunc(iconName)
    }
}
const skillList = skills.map(skill => skillGenerator(skill.title, skill.iconName ));


const ExperienceList = () => (
    <List
        data={skillList}
        pad='small'
        border={false}
        margin={{ top: '5rem' }}
        direction='row'
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        }}
    >
        {datum => (
            <Box direction='row' flex gap='medium' alignSelf='center' size='medium' align='center' justify='around' pad='small'>
                <Anchor href={datum.href} a11yTitle={datum.a11yTitle} key={datum.name} size='small' margin={{right: '1.5rem'}}
                    style={{
                        backgroundColor: 'orange',
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '1rem',
                        fontSize: '2rem'
                }}/>
                <Anchor size='medium' href={datum.href} color='black' style={{
                    fontSize: '1.5rem'
                }}>{datum.name}
                    <Text margin={{left:'1rem'}} color='dark-4'>used in 5+ projects</Text>
                </Anchor>
           </Box>
        )}
    </List>
)
export default class Experience extends Component {
    render() {
        return (
            <ExperienceList />
        )
    }
}