import React from 'react';
import { Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Main, Box, Heading, Text } from 'grommet';
import contents from '../contents';
import Contact from '../Contact.js'
import ScrollToTop from '../ScrollToTop.js';
import LangSelect from './MultiLang';
import { useSelector } from 'react-redux'
import Gallery from '../Gallery';


const MainSection = (props) => {
    const size = useSelector(state => state.resize.size)
    const t = props.multi

    return (
        contents.map(content => (
            <Box
                tag='section' id={content.link} role="tabpanel"
                aria-labelledby={content.link + '-anchor'}
                direction='row-responsive' flex justify='around' align='center'
                pad={{ top: 'large', bottom: 'large' }}
                key={content.order}
                border={{ side: 'bottom', color: 'dark-2' }}>
                {content.order === 1 && (
                    <Box className='selectWrapper'>
                        <LangSelect />
                    </Box>)}
                {content.image && (
                    <Box
                        tag='article'
                        width={size === 'small' ? 'small' : 'medium'}
                        gap='small' pad='small'
                        border={{ side: 'between' }} round alignSelf='center'>
                        <img src={content.image} alt={content.imageAlt}
                            style={{ width: '100%', height: 'auto' }} />
                    </Box>
                )}
                <Box tag='article' width='large' pad='medium'>
                    {content.title && (
                        <Heading level={1} margin="none" a11yTitle={content.title} textAlign='center'>
                            {t(content.title)}
                        </Heading>
                    )}
                    {content.titleComponent}

                    <Text size='large' margin={{ top: '2rem', bottom: '2rem' }} color='dark-2'>
                        {content.contents}
                    </Text>

                    {content.button}

                    {content.contentsComponent}

                    {content.order === 3 && (
                        <Gallery subject='featured' />
                    )}

                    {content.order === 4 && (
                        <Gallery subject='side' />
                    )}
                    {content.order === 6 && (
                        <Contact />
                    )}
                </Box>
            </Box>
        ))
    )
}


function Body(props) {
    const size = useSelector(state => state.resize.size)
    const { t } = props; // i18n
    return (
        <Main
            pad='large' fill='vertical'
            style={{ height: 'auto' }}>
            <Route
                path='/'
                exact={true}
                component={() =>
                    <MainSection multi={t} />} />
            <ScrollToTop size={size} />
        </Main>
    )
}

export default withTranslation()(Body)