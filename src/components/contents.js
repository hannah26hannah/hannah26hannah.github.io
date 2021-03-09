import { Heading, Text, Anchor, Button, Box } from 'grommet';
import profile from '../assets/images/memoji.jpg';
import profile2 from '../assets/images/memoji_2.jpg';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux'


const TitleContent1 = () => 
{
    const size = useSelector(state => state.resize.size);
    return (
        <Heading 
            size={['xsmall', 'small'].includes(size) ? 'small' : 'medium'} margin='none' textAlign={['medium', 'large'].includes(size) ? 'start' : 'center'}>
            <Trans>title_1</Trans>
            <Text size='xxxlarge' color='orange' margin='none'>
            <Trans>title_2</Trans> 
            </Text>
            <Trans>title_3</Trans>
        </Heading>
    )

}

const TitleContent = (prop) => (
    <Heading textAlign='center'>{ prop.title ? prop.title : <Trans>Portfolio</Trans> }<br /><Text size='xlarge' color='orange'>{prop.desc}</Text>
    </Heading>
)

const TextContent2 = () => (
    <Text size='large' color='dark-2'><Trans>intro</Trans></Text>
)

const scrollTo = (e, param) => {
    e.preventDefault();
    document.querySelector(param).scrollIntoView({
        behavior: 'smooth'
    })
}

const LinkToPortfolio = () => {
    const size = useSelector(state => state.resize.size);
    return (
        <Box flex direction='row' justify={['xsmall', 'small'].includes(size) ? 'center' : 'end'}>
            <Button
                style={{minWidth: '5rem', textAlign: 'center', padding: '1rem'}}
                primary 
                color='paper' 
                hoverIndicator='light-1'
                onClick={e => scrollTo(e, "#Portfolio")}>
                <Anchor
                    style={{textDecoration: 'none'}}
                    href='#Portfolio'>
                        <Trans>linkToPortfolio</Trans>
                </Anchor>
            </Button>
        </Box>
)}

const contents = [
    {
        order: 1,
        titleComponent: <TitleContent1 />,
        image: profile,
        imageAlt: 'main profile',
        contents: <Trans>main_intro</Trans>,
        button: <LinkToPortfolio />
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