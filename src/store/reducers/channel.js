import { Github, Linkedin, Mail, Blog } from 'grommet-icons';

const myMedia = [
    {name: 'Github', a11yTitle: 'Github Profile Link', href: 'https://github.com/hannah26hannah', icon: <Github color='black' />},
    {name: 'LinkedIn', a11yTitle: 'LinkedIn Link', href: 'https://www.linkedin.com/in/jeongwon-yoo/', icon: <Linkedin color='black' />},
    {name: 'Mail', a11yTitle: 'Email Link', href: 'mailto:jeongwon.y.h@gmail.com', icon: <Mail color='black' />},
    {name: 'Blog', a11yTitle: 'Tistory Blog Link', href: 'https://uiyoji-journal.tistory.com/', icon: <Blog  color='black' />}
]


const channelReducer = (state = { channel: myMedia }) => {
    return state
}

export default channelReducer