import meditation from '../assets/images/meditation_b.png';
import weather from '../assets/images/weather_b.png';
import kakao from '../assets/images/kakao_clone.png';
import { Trans } from 'react-i18next';
import { CirclePlay, Console, Archive } from 'grommet-icons'

const BASE_DEMO = 'https://hannah26hannah.github.io/';
const BASE_REPO = 'https://github.com/hannah26hannah/';
// const BASE_BLOG = 'https://uiyoji-journal.tistory.com/tag/';

const sideContents = [
    {
        title: 'Meditation App',
        tags: 'HTML5, CSS3, JavaScript, WebPack',
        detail: <Trans>medi_desc</Trans>,
        image: {alt: 'preview image of meditation app', src: meditation},
        links: [
            {title: 'Demo (PC)', href: 'https://hannah-meditation-app.netlify.app/', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: '', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}meditation-app`, icon: <Console color='black' />}
        ]
    },
    {
        title: 'Weather App', 
        tags: 'HTML5, CSS3, JavaScript, Open API',
        detail: <Trans>weather_desc</Trans>,
        image: {alt: 'preview image of weather app', src: weather},
        links: [
            {title: 'Demo (Mobile & PC)', href: 'https://hannah-weather-app.netlify.app', icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: '', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}weather-app`, icon: <Console color='black' />}
        ]
    },
    {
        title: 'Kakao Talk Clone', 
        tags: 'HTML5, CSS3, JavaScript',
        detail: <Trans>kakao_desc</Trans>,
        image: {alt: 'preview image of kakaotalk clone app', src: kakao},
        links: [
            {title: 'Demo (Mobile)', href: `${BASE_DEMO}kakao/index.html`, icon: <CirclePlay color='black' />},
            {title: 'Work Log', href: '', icon: <Archive color='black' />},
            {title: 'Github Source Code', href: `${BASE_REPO}kakao`, icon: <Console color='black' />}
        ]
    },
]

export default sideContents;