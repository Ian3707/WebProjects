import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import ItemList from '../components/ItemList';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3} >
                    <TypeBar/>
                </Col>
                <Col md={9} >
                    <BrandBar/>
                    <ItemList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;