import moon1 from '../assets/images/moon_1.png';
import meditation from '../assets/images/meditation_b.png';

import { CirclePlay, Console, Archive } from 'grommet-icons'
// const BASE_DEMO = 'https://hannah26hannah.github.io/';
const BASE_REPO = 'https://github.com/hannah26hannah/';
// const BASE_BLOG = 'https://uiyoji-journal.tistory.com/tag/';

const sideContents = [
    {
        title: 'Meditation App', 
        tags: 'HTML5, CSS3, JavaScript, WebPack',
        detail: 'Practice vanilla JavaScript & webpack system.',
        image: {alt: 'preview image of meditation app', src: meditation},
        links: [
            {title: 'Demo', href: 'https://hannah-meditation-app.netlify.app/', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: '', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}meditation-app`, icon: <Console color='black' />}
        ]
    },
    {
        title: 'side project 2', 
        tags: 'HTML5, CSS3, JavaScript, WebPack',
        detail: 'Vanila JavaScript',
        image: {alt: 'preview image', src: moon1},
        links: [
            {title: 'Demo', href: 'https://hannah26hannah.github.io/vuejs-todolist-2.0', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: 'https://uiyoji-journal.tistory.com/search/vue-todo', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: 'https://github.com/hannah26hannah/vuejs-todolist-2.0', icon: <Console color='black' />}
        ]
    },
]

export default sideContents;