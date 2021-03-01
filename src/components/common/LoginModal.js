import React, { useState } from 'react';
import { Box, Layer, Text, Avatar, Button, Form, FormField, TextInput, Anchor } from 'grommet';
import { FormClose } from 'grommet-icons';

import axios  from 'axios';
import adminAvatar from '../../assets/images/rizard.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const LoginModal = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState( { name: '', password: '' } );
    const [login, setLogin] = useState(sessionStorage.getItem('login'));
    const [errMsg, setErrMsg] = useState('');
    
    const path = useLocation().pathname;
    
    const blogPath = path.slice(0, path.lastIndexOf('/'));
    let history = useHistory();

    const {t} = props;
    
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
        <>
           <Anchor className='anchorLink' label={login ? t('Admin_logout') : t('Admin_login')} a11ytitle='Admin Login' role='tab' onClick={() => {
            setOpen(true);
            }} />
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
                        <Text>{!login ? t('Admin_login') : t('Admin_Profile')}</Text>
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
                                <FormField name='name' htmlFor='text-input-name' label={t('Name')}>
                                    <TextInput id='text-input-name' name='name' type='text' />
                                </FormField>
                                <FormField name='password' htmlFor='text-input-pw' label={t('Password')}>
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
                                    <Button type='submit' primary label={t('Submit')} />
                                    <Button type='reset' label={t('Reset')} />
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
                                    onClick={() => console.log('todo : profile image modification')}
                                    style={{ border: login ? '1px solid lightgray' : ''}}
                                    round='full'
                                    size='xlarge'
                                    src={adminAvatar}
                                />
                                <Link to={`${path}/write`}>
                                    <Button primary 
                                    style={{ width: '100%' }} label={t('Write_Post')} onClick={() => {
                                        setOpen(false);
                                        props.invokeCollpase();
                                    }} />
                                </Link>
                                <Button 
                                    primary 
                                    label={t('Admin_logout')} 
                                    style={{ width: '100%'}}
                                    onClick={() => {
                                        setLogin(false);
                                        sessionStorage.removeItem('login');
                                        props.invokeCollpase();
                                        history.push({
                                            pathname: blogPath
                                        })
                                    }} />
                            </Box>
                        )}
                        
                        
                    </Box>
                </Layer>
            )}
        </>
    )
    
}

export default withTranslation()(LoginModal);