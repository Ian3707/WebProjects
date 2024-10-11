import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const {item} = useContext(Context)
    
    return(
        <Row className="d-flex flex-row">
            {item.brands.map(brand => 
                <Card
                    key={brand.id}
                    className="me-1 p-3 mt-1"
                    style={{width: '100px', textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => item.setSelectedBrand(brand)}
                    border={brand.id === item.selectedBrand.id ? 'danger' : 'grey'}
                    >
                        {brand.name}
                </Card>    
            )}
        </Row>
    );
});

export default BrandBar