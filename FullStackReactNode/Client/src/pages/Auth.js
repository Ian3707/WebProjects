import React, { useState } from 'react';
import { Button, Card, Container, Form, NavItem, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if(isLogin){
            const response = await login()
        } else {
            const response = await registration(email, password);
            console.log(response)
        }
        
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
        <Card style={{width: 600}} className='p-5'>
            <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация' }</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-4'
                    placeholder='Введите ваш email...'
                    value = {email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите ваш пароль...'
                    value = {password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                />
                <Row className='d-flex justify-content-between mt-3 pl-3 pr-3' >
                {isLogin ? 
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink>
                    </div>
                    :  
                    <div>
                        Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
                    </div>
                    }
                </Row>
                {isLogin ? 
                    <Button variant={'outline-success'} style={{ position: 'absolute', top: 216, right: 48, width: '100px' }}
                    onClick={click}
                    >
                        Вход
                    </Button>
                :
                    <Button variant={'outline-success'} style={{ position: 'absolute', top: 216, right: 48, width: '150px' }}
                    onClick={click}
                    >
                        Регистрация
                    </Button>
                }
            </Form>
        </Card>
        </Container>
    );
};

export default Auth;