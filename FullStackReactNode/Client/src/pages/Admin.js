import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateItem from '../components/modals/CreateItem';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <Container className='d-flex flex-column mt-3'>
            <Button 
                variant={'outline-dark'} 
                className='mt-3 p-2'
                onClick={() => setTypeVisible(true)}
            >
                    Добавить тип
            </Button>
            <Button 
                variant={'outline-dark'} 
                className='mt-3 p-2'
                onClick={() => setBrandVisible(true)}
            >
                    Добавить бренд
            </Button>
            <Button 
                variant={'outline-dark'} 
                className='mt-3 p-2'
                onClick={() => setItemVisible(true)}
            >
                    Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
        </Container>
    );
};

export default Admin;