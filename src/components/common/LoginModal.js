import React, { useState } from 'react';
import { grommet, Box, Grommet, Layer, Text, Avatar, Button, Form, FormField, TextInput } from 'grommet';
import { UserAdmin, FormClose } from 'grommet-icons';
import theme from './theme'

// import adminAvatar from '../../assets/images/rizard.png';

const LoginModal = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState( { name: '', password: '' } );
    
    
    return (
        <Grommet theme={theme}>
            <Box className='adminWrapper' direction='row' gap='small'>
                {/* <Avatar src={adminAvatar} round='medium' size='large' /> */}
                <Avatar
                    className='userAdmin'
                    background="light-4"
                    onClick={() => setOpen(true)}
                >
                    <UserAdmin />
                </Avatar>
                
            </Box>
            {open && (
                <Layer
                    onEsc={() => setOpen(false)}
                    onClickOutside={() => setOpen(false)}
                >
                    <Box 
                        align='center' 
                        justify='center'
                        gap='small'
                        direction='column'
                        alignSelf='center'
                        pad='large'
                    >
                        <Button
                            plain
                            primary
                            icon={<FormClose />}
                            onClick={(e) => {
                                setOpen(false)
                            }}
                            style={{ background: '#57816D', }}
                            size='small'
                            alignSelf='end'
                        />
                        <Text>Admin Login</Text>
                        <Form
                            value={value}
                            onChange={nextValue => setValue(nextValue)}
                            onReset={() => setValue({})}
                            onSubmit={({value}) => {}}
                        >
                            <FormField name='name' htmlFor='text-input-name' label='Name'>
                                <TextInput id='text-input-name' name='name' type='text' />
                            </FormField>
                            <FormField name='password' htmlFor='text-input-pw' label='Password'>
                                <TextInput id='text-input-pw' name='password' type='password' />
                            </FormField>
                            <Box 
                                justify='center'
                                direction='row' 
                                gap='medium'
                                margin={{ top: 'medium' }}
                                >
                                <Button type='submit' primary label='Submit' onClick={() => console.log('submit')} />
                                <Button type='reset' label='Reset' />
                            </Box>
                        </Form>
                        
                    </Box>
                </Layer>
            )}
        </Grommet>
    )
    
}

export default LoginModal;