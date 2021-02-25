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

const intro = {
    ko: "안녕하세요. 주니어 프론트엔드 개발자 유정원입니다. 현재 대한민국 서울에서 활동하고 있습니다. 가치 있는 목표 아래에서 함께 일할 동료를 찾는 중입니다. 여러 종류의 미디어 컨텐츠를 사랑하고, 이를 뒷받침하는 기술과 사용자 경험에 매료되어 있습니다. 기술력과 통찰을 통해 가교 역할을 할 수 있기를 꿈꾸고 있습니다.",
    en: `Hi! I'm Jeongwon, a junior developer seeking for the job opportunity based in Seoul, South Korea. <br /><br />I enjoy consuming almost all kinds of media contents, but love to think of human experience and technology behind them more. <br /><br />I hope I can act as a bridge between them with my skill and insight.`
}
const TextContent2 = () => (
    <Text size='large' color='dark-2'>{intro.en}</Text>
)


const contents = [
    {
        order: 1,
        titleComponent: <TitleContent1 />,
        image: profile,
        imageAlt: 'main profile',
        contents: 'who loves to learn modern technologies to solve problems in real world. Welcome to my portfolio web site!',
        contents_ko: "현실 세계의 문제를 해결할 수 있는 새로운 기술을 사랑합니다. 자유롭게 기술을 사용해보기 위해 제작한 포트폴리오 웹사이트 겸 블로그입니다."
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
        contents: 'My goal as a developer is to make well-functioning web products as well as to give pleasant experience to users. Here are my main projects to achieve this goal:',
        contents_ko: "잘 기능하는 웹 프로덕트뿐만 아니라 매끄러운 사용자 경험을 주려고 노력하는 개발자가 되고자 합니다. 아래는 이러한 목표를 두고 진행한 메인 프로젝트입니다."
    },
    {
        order: 4,
        titleComponent: <TitleContent desc='Side Projects' />,
        contents: 'I made several side projects to learn various techniques as many as possible during training period.',
        contents_ko: "다양한 기술을 폭넓게 경험하기 위해 진행한 사이드 프로젝트입니다."
    },
    {
        order: 6,
        titleComponent: <TitleContent title='Contact' desc='via these channels' />,
        link: 'Contact',
        contents: 'I\'m ready to do any valuable moments with you! Public resume is ready on Notion as well 😊',
        contents_ko: "흥미롭고 귀중한 제안과 소식에 언제나 열려 있습니다. 공개 이력서는 메뉴의 링크를 통해서 열람 가능합니다. 😊"
    }
]

export default contents;