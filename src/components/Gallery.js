import React, { useState } from 'react';
import { Box, Card, Grid, Grommet, Image, Heading, Layer, Button, Text, Anchor} from "grommet";
import theme from './common/theme.js'
import workContents from './workContents.js';
import sideContents from './sideContents.js';
import { withTranslation } from 'react-i18next';
import { Close } from 'grommet-icons';
import { useSelector } from 'react-redux';



const LinkList = (props) => {
    return (
        <Box gap='small'>
            {props.links.map(link => link.href && (
                <Anchor
                    style={{
                        minWidth: '100%',
                        textAlign: 'left',
                        textDecoration: 'none'
                    }}
                    icon={link.icon}
                    href={link.href}
                    target='_blank'  
                    color='black'
                    key={link.href}
                    label={link.title}
                    margin='xxsmall'/>
                ))}
            </Box>
    )
}



function returnYOffset(y) {
    if (window.pageYOffset === 0) {
        window.scrollTo(0, y);
    }
}

function Gallery (props) {
    const subject = props.subject;
    const {t} = props; // i18n

    const isFeatured = (subject) => {
        return subject === 'featured' ? workContents : sideContents
    }
    const size = useSelector(state => state.resize.size);
    const [show, setShow] = useState();
    const [yOffSet, setYOffSet] = useState();
    const [selected, setSelected] = useState();

    return (
    <Grommet theme={theme}>
        <Box>
            <Grid columns={size === 'xsmall' ? ['100%'] : ['1/2', '1/2']} gap='small'>
                {isFeatured(subject).map((content, index) => (
                    <Card key={index} pad='small' gap='small' flex direction='column' justify='between' width='100%'
                    onClick={() => {
                        setSelected(content);
                        setYOffSet(window.pageYOffset);
                        setShow(true)}}
                    >
                        <Image src={content.image.src} alt={t(content.image.alt)} style={{
                            flexShrink: '0',
                            maxWidth: '100%',
                            // maxHeight: '100%',
                            borderRadius: '12px'
                        }}
                        />
                        <Heading level={4} textAlign='center'>{content.title}</Heading>
                    </Card>
                ))}
            </Grid>
            {(show && selected) && (
            <Layer 
                position='center'
                overflow='auto'
                margin={'xlarge'}
                padding='large'
                onEsc={() => {setShow(false); returnYOffset(yOffSet)}}
                onClickOutside={() => { setShow(false); returnYOffset(yOffSet)}}
                background='paper'
                > 
                <Box overflow='auto' flex direction='column' align='center' gap='small'
                style={{paddingBottom: '3rem'}}
                pad={{left: 'small', right: 'small', top: 'small', bottom: 'small'}}
                margin={{bottom: 'medium'}}
                >

                    <Button
                        alignSelf='end'
                        icon={<Close />} 
                        onClick={(e) => {
                            setShow(false); returnYOffset(yOffSet)}} />
                    <Heading level={2} textAlign='center'>{selected.title}</Heading>
                
                    <Box tag='main' pad={{left: 'medium', right: 'medium', bottom: 'medium'}} gap='small'>
                        {/* <Box style={{
                            width: '90vw',
                            height: 'auto'
                        }}>
                            <Image 
                            fit='contain'
                            src={selected.image.src} 
                            alt={selected.image.alt}
                            style={{borderRadius: '12px', paddingTop: '1rem'}} />
                        </Box> */}
                        <Text 
                            size='medium' 
                            margin={{ top: '2rem', bottom: '1rem' }} 
                            style={{
                                padding: '1rem'
                            }}
                            color='dark-2'>{selected.detail}
                        </Text>
                        <LinkList links={selected.links} />
                    </Box>
                </Box>
            </Layer>
            )}
            
    </Box>
    </Grommet>)
    
}

export default withTranslation()(Gallery);