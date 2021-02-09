import { Heading, Text } from 'grommet';
import profile from '../assets/images/memoji.jpg';
import profile2 from '../assets/images/memoji_2.jpg';
// import profile3 from '../assets/images/rizard.png';

const TitleContent1 = () => (
    <Heading margin='none'>Hi! I'm<br />
        <Text size='xxxlarge' color='orange' margin='none'>
            Jeongwon 🙌 
        </Text>
        <br />A Junior Developer
    </Heading>
)
const TitleContent = (prop) => (
    <Heading textAlign='center'>{ prop.title ? prop.title : 'Portfolio'}<br /><Text size='xxlarge' color='orange'>{prop.desc}</Text>
    </Heading>
)
const TextContent2 = () => (
    <Text size='large' color='dark-2'>
    Hi! I'm Jeongwon, a junior developer seeking for the job opportunity based in Seoul, South Korea. <br /><br />I enjoy consuming almost all kinds of media contents, but love to think of human experience and technology behind them more. <br /><br />I hope I can act as a bridge between them with my skill and insight.
    </Text>
)
const contents = [
    {
        order: 1,
        titleComponent: <TitleContent1 />,
        image: profile,
        imageAlt: 'main profile',
        contents: 'who loves to learn modern technologies to solve problems in real world'
    },
    {
        order: 2,
        title: 'About Me',
        link: 'About',
        image: profile2,
        imageAlt: 'sub profile',
        contentsComponent: <TextContent2 />
    },
    {
        order: 3,
        titleComponent: <TitleContent desc='Featured Works' />,
        link: 'Portfolio',
        contents: 'Placeholder'
    },
    {
        order: 4,
        titleComponent: <TitleContent desc='Side Projects' />,
        contents: 'My goal as a developer is to make well-functioning web products as well as to give pleasant experience to users. Here are side projects I made during training period to achieve this goal:'
    },
    {
        order: 5,
        title: 'Blog',
        link: 'Blog',
        contents: 'Date / Project Name / Used Skills / site || Github'
    },
    {
        order: 6,
        titleComponent: <TitleContent title='Contact' desc='via these channels' />,
        link: 'Contact',
        contents: 'I\'m ready do any valuable moments with you! Public resume is ready on Notion as well :)'
    }
]

export default contents;