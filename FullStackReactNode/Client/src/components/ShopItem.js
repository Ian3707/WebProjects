import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ITEM_ROUTE } from "../utils/consts";

const ShopItem = ({item}) => {
    const history = useHistory()
    //console.log(history)
    return(
        <Col md={3} className={"mt-3"} onClick={() => history.push(ITEM_ROUTE + '/' + item.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={120} height={150} src={item.img}/>
                <div className="text-black-50 mt-1 d-flex justify-context-between align-items-center">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center ml-auto" style={{ position: 'absolute', top: 156, right: 20 }} >
                        <div className={"me-1"}>{item.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default ShopItem;