import { Heading, Text } from 'grommet';
import profile from '../assets/images/memoji.jpg';
import profile2 from '../assets/images/memoji_2.jpg';
import { Trans } from 'react-i18next';

const TitleContent1 = () => (
    <Heading margin='none'><Trans>title_1</Trans>
        <Text size='xxxlarge' color='orange' margin='none'>
        <Trans>title_2</Trans> 
        </Text>
        <Trans>title_3</Trans>
    </Heading>
)

const TitleContent = (prop) => (
    <Heading textAlign='center'>{ prop.title ? prop.title : <Trans>Portfolio</Trans> }<br /><Text size='xxlarge' color='orange'>{prop.desc}</Text>
    </Heading>
)

const TextContent2 = () => (
    <Text size='large' color='dark-2'><Trans>intro</Trans></Text>
)

const contents = [
    {
        order: 1,
        titleComponent: <TitleContent1 />,
        image: profile,
        imageAlt: 'main profile',
        contents: <Trans>main_intro</Trans>,
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
        titleComponent: <TitleContent desc={<Trans>Featured</Trans>} />,
        link: 'Portfolio',
        contents: <Trans>portfolio_desc</Trans>
    },
    {
        order: 4,
        titleComponent: <TitleContent desc={<Trans>Side</Trans>} />,
        contents: <Trans>Side_desc</Trans>
    },
    {
        order: 6,
        titleComponent: <TitleContent title={<Trans>Contact</Trans>} desc={<Trans>contact_sub</Trans>} />,
        link: 'Contact',
        contents: <Trans>Contact_desc</Trans>
    }
]

export default contents;