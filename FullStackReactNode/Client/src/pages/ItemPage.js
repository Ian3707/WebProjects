import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigstar from '../assets/bigstar.jpg'

const ItemPage = () => {
    const item = {id: 1, name: "Iphone 12 Pro", price: 1000, rating: 4.7, img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg'};
    const description = [
        {id: 1, title: "Память", description: "256/6 Gb"},
        {id: 2, title: "Камера", description: "12 Mp/F1.9"},
        {id: 3, title: "Процессор", description: "Bionic A15"},
        {id: 4, title: "Количество ядер", description: "6+2"},
        {id: 5, title: "Аккумулятор", description: "3200 mAh"},
    ]

    return (
        <Container className='mt-3'> 
            <Row>
            <Col md={4}>
                <Image width={240} height={300} src={item.img}/>
            </Col>
            <Col md={4}>
                <Row className='d-flex flex-column '>
                    <h2 className='d-flex flex-column '>{item.name}</h2>  
                    <div 
                        className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${bigstar}) no-repeat center center`, width: 200, height: 200, backgroundSize: 'cover', fontSize: 47}}
                        >
                            {item.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card 
                    className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    <h3>От: {item.price} рублей</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column mt-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row className='m-0' key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;

//15 align-items-center