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
        image: {alt: 'preview image', src: port_preview},
        links: [
            {title: 'Demo', href: BASE_DEMO, icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: `${BASE_BLOG}techBlog`, icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}hannah26hannah.github.io`, icon: <Console color='black' />}
        ]
    },
    {
        title: 'KoopKorea Online Store Front',
        year: '2020',
        tags: ['Stencil CLI', 'jQuery', 'scss', 'Handlebar.js'],
        detail: <Trans>koop_desc</Trans>,
        image: {alt: 'preview image',src: koopkorea},
        links: [
            {title: 'Website', href: 'https://koopkorea.nl/', icon: <CirclePlay color='black' />},
        ]
    }
]

export default workContents