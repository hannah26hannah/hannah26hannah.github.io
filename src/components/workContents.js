// import moon1 from '../assets/images/moon_1.png';
import moon from '../assets/images/moon_mob_pad.png';

import port_preview from '../assets/images/portfolio_b_m.png';
import { CirclePlay, Console, Archive } from 'grommet-icons';

const BASE_DEMO = 'https://hannah26hannah.github.io/';
const BASE_REPO = 'https://github.com/hannah26hannah/';
const BASE_BLOG = 'https://uiyoji-journal.tistory.com/tag/';

const workContents = [
    {
        title: 'Tech Portfolio Blog',
        tags: [
            'React.js', 'Grommet', 'Responsive', 'Markdown'
        ],
        detail: 'This project is mainly built with React.js. I used grommet, node-sass for styling and react router for navigating menu. I also chose markdown for managing blog posts.',
        images: [
            {
                order: 1,
                alt: 'browser window preview',
                src: port_preview
            }
        ],
        gif: {alt: 'preview gif', src: ''},
        links: [
            {title: 'Demo', href: BASE_DEMO, icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: `${BASE_BLOG}techBlog`, icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}hannah26hannah.github.io`, icon: <Console color='black' />}
        ]
    },
    {
        title: 'Moon-todo',
        tags: [
            'Vue.js', 'Tailwinds', 'TypeScript', 'Chart.js'
        ],
        detail: 'Moon-todo is a personal dashboard Web application. Calendar and Chart Report are offered based on simple to do feature. I used Vue.js, Vuex, TypeScript, Chart.js, Tailwinds CSS library, SCSS for this app.',
        images: [
            {
                order: 1,
                alt: 'preview image',
                src: moon
            }
        ],
        gif: {alt: 'preview gif', src: ''},
        links: [
            {title: 'Demo', href: `${BASE_DEMO}vuejs-todolist-2.0`, icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: `${BASE_BLOG}todolist`, icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}vuejs-todolist-2.0`, icon: <Console color='black' />}
        ]
    }
]

export default workContents