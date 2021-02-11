import moon1 from '../assets/images/moon_1.png';
import moon2 from '../assets/images/moon_2.png';
import { CirclePlay, Console, Archive } from 'grommet-icons'

const sideContents = [
    {
        title: 'side project 1', 
        tags: [
            'HTML5', 'CSS3', 'Responsive'
        ],
        detail: 'Kakao Clone Mobile App',
        image: {alt: 'preview image', src: moon1},
        links: [
            {title: 'Demo', href: 'https://hannah26hannah.github.io/vuejs-todolist-2.0', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: 'https://uiyoji-journal.tistory.com/search/vue-todo', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: 'https://github.com/hannah26hannah/vuejs-todolist-2.0', icon: <Console color='black' />}
        ]
    },
    {
        title: 'side project 2', 
        tags: [
            'HTML5', 'CSS3', 'Responsive'
        ],
        detail: 'Vanila JavaScript',
        image: {alt: 'preview image', src: moon2},
        links: [
            {title: 'Demo', href: 'https://hannah26hannah.github.io/vuejs-todolist-2.0', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: 'https://uiyoji-journal.tistory.com/search/vue-todo', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: 'https://github.com/hannah26hannah/vuejs-todolist-2.0', icon: <Console color='black' />}
        ]
    },
]

export default sideContents;