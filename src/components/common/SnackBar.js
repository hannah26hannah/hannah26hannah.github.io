import { Box, Button, Layer, Text } from 'grommet';
import { FormClose, StatusGood } from 'grommet-icons';
import React, { useState, useEffect } from 'react';

const Notification = (props) => {
    console.log('snackbar props', props)
    const [open, setOpen] = useState();
    const [status, setStatus] = useState();
    
    useEffect(() => {
        if (props.barStatus === '') {
            setOpen(false);
        } else {
            onOpen();
            setStatus(props.barStatus);
        }
    }, [setOpen, setStatus, props])
    

    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 3000)
    }
    const onClose = () => { setOpen(false) }

    return (
        <>
        {open && (
            <Layer
             position='top'
             modal={false}
             margin={{ vertical: 'medium', horizontal: 'small' }}
             onEsc={onClose}
             responsive={false}
             plain
         >
             <Box 
                 align='center'
                 direction='row'
                 gap='small'
                 justify='between'
                 round='medium'
                 pad={{vertical: 'xsmall', horizontal: 'small'}}
                 background='status-ok'
             >
                 <Box align='center' direction='row' gap='small' pad='small'>
                     <StatusGood />
                     {/* <Text >Blog Post is Successfully Uploaded</Text> */}
                     <Text>{status}</Text>
                 </Box>
                 <Button icon={<FormClose />} onClick={onClose} plain></Button>
             </Box>
 
            </Layer>
        )}
        </>

       
    )
}

export default Notification