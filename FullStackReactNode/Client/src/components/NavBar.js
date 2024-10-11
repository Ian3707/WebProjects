import React, { useContext } from "react";
import { Context } from "..";
import { Navbar, Nav, NavLink, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style = {{color: "white", textDecoration: "none"}} to = {SHOP_ROUTE}>ManShop</Link>
                {user.isAuth ? 
                <Nav style={{ marginLeft: 'auto', color: "white" }} className="ml-auto">
                    <Button 
                            variant = {"outline-light"} 
                            onClick={() => history.push(ADMIN_ROUTE)}
                    >
                            Админ. панель
                    </Button>
                    <Button 
                        variant = {"outline-light"} 
                        onClick={() => history.push(LOGIN_ROUTE)} 
                        style={{ marginLeft: "6px" }}
                    >
                            Выйти
                    </Button>
                </Nav>
                :
                <Nav style={{ marginLeft: 'auto', color: "white" }} className="ml-auto">
                    <Button variant = {"outline-light"} onClick ={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
                }
            </Container>
          
      </Navbar>
    );
});

export default NavBar;