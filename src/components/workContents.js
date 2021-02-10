import moon1 from '../assets/images/moon_1.png';
import moon2 from '../assets/images/moon_2.png';
import moon3 from '../assets/images/moon_3.png';
import moon4 from '../assets/images/moon_4.png';

import { CirclePlay, Console, Archive } from 'grommet-icons'

const workContents = [
    {
        title: 'Moon-todo',
        tags: [
            'Vue.js', 'Vuex', 'Tailwinds', 'TypeScript', 'Chart.js'
        ],
        detail: 'Moon-todo is a personal dashboard Web application. Calendar and Chart Report are offered based on simple to do feature.',
        images: [
            {
                order: 1,
                alt: 'preview image',
                src: moon1
            },
            {
                order: 2,
                alt: 'preview image',
                src: moon2
            },
            {
                order: 3,
                alt: 'preview image',
                src: moon3
            },
            {
                order: 4,
                alt: 'preview image',
                src: moon4
            },
        ],
        gif: {alt: 'preview gif', src: moon4},
        links: [
            {order: 1, title: 'Demo', href: 'https://hannah26hannah.github.io/vuejs-todolist-2.0', icon: <CirclePlay color='black' />},
            {order: 2, title: 'Work Log', href: 'https://uiyoji-journal.tistory.com/search/vue-todo', icon: <Archive color='black' />},
            {order: 3, title: 'Github Source Code', href: 'https://github.com/hannah26hannah/vuejs-todolist-2.0', icon: <Console color='black' />}
        ]
    },
    {
        title: 'Weekly-Reading',
        tags: [
            'Vue.js', 'Vuex', 'Firebase'
        ],
        detail: 'Weekly-Reading is a personal book review Web application.',
        images: [
            {
                order: 1,
                alt: 'preview image',
                src: 'moon1'
            }
        ],
        gif: {alt: 'preview gif', src: ''},
        links: [
            {title: 'Demo', href: 'https://hannah26hannah.github.io/vuejs-todolist-2.0', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: 'https://uiyoji-journal.tistory.com/search/vue-todo', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: 'https://github.com/hannah26hannah/vuejs-todolist-2.0', icon: <Console color='black' />}
        ]
    },
]

export default workContents