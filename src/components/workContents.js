// import moon1 from '../assets/images/moon_1.png';
import moon from '../assets/images/moon_mob_pad.png';
import koopkorea from '../assets/images/koopkorea_b_m.png';
import port_preview from '../assets/images/portfolio_b_m.png';
import { CirclePlay, Console, Archive } from 'grommet-icons';
import { Trans } from 'react-i18next';

const BASE_DEMO = 'https://hannah26hannah.github.io/';
const BASE_REPO = 'https://github.com/hannah26hannah/';
const BASE_BLOG = 'https://uiyoji-journal.tistory.com/tag/';

const workContents = [
    {
        title: 'Tech Portfolio Blog',
        year: '2021',
        tags: [
            'React.js', 'Grommet', 'Responsive', 'Markdown'
        ],
        detail: <Trans>tech_desc</Trans>,
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
        title: 'KoopKorea Online Store Front',
        year: '2020',
        tags: [
            'Stencil CLI', 'jQuery', 'scss', 'Handlebar.js'
        ],
        detail: <Trans>koop_desc</Trans>,
        images: [
            {
                order: 1,
                alt: 'browser window preview',
                src: koopkorea
            }
        ],
        gif: {alt: 'preview gif', src: ''},
        links: [
            {title: 'Website', href: 'https://koopkorea.nl/', icon: <CirclePlay color='black' />},
        ]
    },
    {
        title: 'Moon-todo',
        year: '2021',
        tags: [
            'Vue.js', 'Tailwinds', 'TypeScript', 'Chart.js'
        ],
        detail: <Trans>moon_desc</Trans>,
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