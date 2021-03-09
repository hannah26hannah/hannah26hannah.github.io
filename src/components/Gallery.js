import React, { useContext, useState } from 'react';
import { Box, Card, Grid, Grommet, Image, ResponsiveContext, Heading, Layer} from "grommet";
import theme from './common/theme.js'
import workContents from './workContents.js';
import sideContents from './sideContents.js';
import { withTranslation } from 'react-i18next';

function returnYOffset(y) {
    if (window.pageYOffset === 0) {
        window.scrollTo(0, y);
    }
}

function Gallery (props) {
    const subject = props.subject;
    // const size = useContext(ResponsiveContext);
    const {t} = props; // i18n

    const isFeatured = (subject) => {
        return subject === 'featured' ? workContents : sideContents
    }

    const [show, setShow] = useState();
    const [yOffSet, setYOffSet] = useState();
    const [selected, setSelected] = useState();

    return (
    <Grommet theme={theme}>
        <Box>
            <Grid columns={['1/2', '1/2']} fill='true' gap='small'>
                {isFeatured(subject).map((content, index) => (
                    <Card key={index} pad='small' gap='medium' flex direction='column' justify='between'
                    onClick={() => {
                        setSelected(content);
                        setYOffSet(window.pageYOffset);
                        setShow(true)}}
                    >
                        <Image src={content.image.src} alt={t(content.image.alt)} style={{
                            flexShrink: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            borderRadius: '12px'
                        }}
                        />
                        <Heading level={4} textAlign='center'>{content.title}</Heading>
                    </Card>
                ))}
            </Grid>
            {(show && selected) && (
            <Layer onEsc={() => {setShow(false); returnYOffset(yOffSet)}}
                onClickOutside={() => { setShow(false); returnYOffset(yOffSet)}}
                margin='xlarge'> 
                <Box>{selected.title}</Box>
            </Layer>
            )}
            
    </Box>
    </Grommet>)
    
}

export default withTranslation()(Gallery);