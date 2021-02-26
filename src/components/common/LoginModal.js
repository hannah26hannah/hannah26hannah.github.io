import React, { useState } from 'react';
import { Box, Grommet, Layer, Text, Avatar, Button, Form, FormField, TextInput } from 'grommet';
import { UserAdmin, FormClose } from 'grommet-icons';
import theme from './theme'
import axios  from 'axios';
import adminAvatar from '../../assets/images/rizard.png';

const LoginModal = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState( { name: '', password: '' } );
    const [login, setLogin] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const selectUserData = async (e) => {
        const res = await axios('/send/pw', {
            method: 'POST',
            data: value,
            headers: new Headers()
        })
        if (res.data) {
            console.log(res.data.msg)

            if (res.data.suc) {
                sessionStorage.setItem('login', true);
                setLogin(true);
                setOpen(false);
                setValue({ name: '', password: '' })
            } else {
                setErrMsg(res.data.msg);
            }
        }
    }
    
    return (
        <Grommet theme={theme}>
            <Box className='adminWrapper' direction='row' gap='small'>
                {!login && (
                    <Avatar
                    className='userAdmin'
                    background="light-4"
                    onClick={() => setOpen(true)}
                    >
                        <UserAdmin />
                    </Avatar>
                )}
                {login && (
                    <Avatar
                        className='userAdmin'
                        src={adminAvatar}
                        onClick={() => setOpen(true)}
                        style={{ border: '1px solid lightgray'}}
                        round='medium' />
                )}
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
                        {!login && (
                            <Form
                                value={value}
                                onChange={nextValue => setValue(nextValue)}
                                onReset={() => {
                                    setValue({name: '', password: ''})
                                    setErrMsg('');
                                }}
                                onSubmit={selectUserData}
                            >
                                <FormField name='name' htmlFor='text-input-name' label='Name'>
                                    <TextInput id='text-input-name' name='name' type='text' />
                                </FormField>
                                <FormField name='password' htmlFor='text-input-pw' label='Password'>
                                    <TextInput id='text-input-pw' name='password' type='password' />
                                </FormField>
                                {errMsg && (
                                    <Box padd={{ horizontal: 'small'}}>
                                        <Text color='status-error'>{errMsg}</Text>
                                    </Box>
                                )}
                                <Box 
                                    justify='center'
                                    direction='row' 
                                    gap='medium'
                                    margin={{ top: 'medium' }}
                                    >
                                    <Button type='submit' primary label='Submit' />
                                    <Button type='reset' label='Reset' />
                                </Box>
                            </Form>
                        )}
                        {login && (
                            <Box 
                            justify='center'
                            direction='row' 
                            gap='medium'
                            margin={{ top: 'medium' }}
                            >
                                <Button primary label='logout' onClick={() => setLogin(false)} />
                            </Box>
                        )}
                        
                        
                    </Box>
                </Layer>
            )}
        </Grommet>
    )
    
}

export default LoginModal;