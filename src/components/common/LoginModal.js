import React, { useState } from 'react';
import { Box, Grommet, Layer, Text, Avatar, Button, Form, FormField, TextInput } from 'grommet';
import { UserAdmin, FormClose } from 'grommet-icons';
import theme from './theme'
import axios  from 'axios';
import adminAvatar from '../../assets/images/rizard.png';
import { Link, useLocation } from 'react-router-dom';

const LoginModal = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState( { name: '', password: '' } );
    const [login, setLogin] = useState(sessionStorage.getItem('login'));
    const [errMsg, setErrMsg] = useState('');
    const [isMenuOpen, setisMenuOpen] = useState(false); 
    

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
    const path = useLocation().pathname;
    
    return (
        <Grommet theme={theme}>
            <Box 
                className='adminWrapper'   
                flex
                direction='row'
                align='center'
                justify='end'
                gap='medium'
            >
                {isMenuOpen && (
                    <Text className='loginAlert'>{!login ? 'Admin Login' : 'Admin Menu'}</Text>
                )}
                    <Avatar
                    className='userAdmin'
                    background='white'
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setisMenuOpen(true)}
                    onMouseLeave={() => setisMenuOpen(false)}
                    style={{ border: login ? '1px solid rgba(0,0,0,0.33)' : ''}}
                    round='full'
                    src={login ? adminAvatar : null}
                    >
                        {!login && (<UserAdmin />)}
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
                            style={{ background: '#57816D', position: 'absolute', right: '1rem', top: '1rem' }}
                            size='small'
                            alignSelf='end'
                        />
                        <Text>{!login ? 'Admin Login' : 'Admin Profile'}</Text>
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
                                align='center'
                                direction='column' 
                                gap='large'
                                margin={{ top: 'medium' }}
                            >
                                <Avatar
                                    // className='userAdmin'
                                    onClick={() => console.log('todo : profile image modification')}
                                    style={{ border: login ? '1px solid lightgray' : ''}}
                                    round='full'
                                    size='xlarge'
                                    src={adminAvatar}
                                />
                                <Link to={`${path}/write`}>
                                    <Button primary 
                                    style={{ width: '100%' }} label='Write Post' onClick={() => {
                                        setOpen(false)
                                        
                                    }} />
                                </Link>
                                <Button 
                                    primary 
                                    label='logout' 
                                    style={{ width: '100%'}}
                                    onClick={() => setLogin(false)} />
                            </Box>
                        )}
                        
                        
                    </Box>
                </Layer>
            )}
        </Grommet>
    )
    
}

export default LoginModal;