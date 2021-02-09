import profile from '../assets/images/memoji.jpg';
import profile2 from '../assets/images/memoji_2.jpg';
import profile3 from '../assets/images/rizard.png';

const contents = [
    {
        order: 1,
        title: {
            subject: 'Hi! 🙌',
            subtitle: 'I\'m Jeongwon',
            detail: 'A Junior Developer'
        },
        image: profile,
        imageAlt: 'main profile',
        contents: '..and passionate to learn modern technologies to solve problems in real world'
    },
    {
        order: 2,
        title: {
            subject: 'About me'
        },
        image: profile2,
        imageAlt: 'sub profile',
        contents: 'Hi! I\'m Jeongwon, a junior developer seeking for the job opportunity based in Seoul, South Korea. I enjoy consuming almost all kinds of media contents, but love to think of human experience & technology behind them more. I hope I can act as a bridge between them with my skill and insight.'
    },
    {
        order: 3,
        title: {
            subject: 'About Me',
            subtitle: 'Experience'
        }, 
        contents:
            `
        <p>My goal as a developer is to make well- functioning web products as well as to give pleasant experience to users.Here are what I have trained myself to achieve this goal:</p>
        <ul>
            <li>JavaScript(ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>TypeScript</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>Java(Spring)</li>
            <li>MySQL</li>
            <li>Express.js</li>
            <li>Git/Github</li>
        </ul>
        `,
    },
    {
        order: 4,
        title: {
            subject: 'Portfolio',
            subtitle: 'Featured works',
        },
        contents: 'Placeholder'
    },
    {
        order: 5,
        title: {
            subject: 'Portfolio',
            subtitle: 'Side projects',
        },
        contents: 'Date / Project Name / Used Skills / site || Github'
    },
    {
        order: 6,
        title: {
            subject: 'Blog',
            subtitle: 'Today I Learnt',
        },
        contents: 'Date / Project Name / Used Skills / site || Github'
    },
    {
        order: 7,
        title: {
            subject: 'Contact',
            subtitle: 'can\'t wait to see nice people like you 👍',
        },
        image: profile3,
        imageAlt: 'contact profile image',
        contents: 'I\'m ready do any valuable moments with you! contact me via these channels. Public resume is ready on Notion as well :)'
    }
]

export default contents;