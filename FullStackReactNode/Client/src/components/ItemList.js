import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import ShopItem from "./ShopItem";

const ItemList = observer(() => {
    const {item} = useContext(Context)

    return(
        <Row className="d-flex">
            {item.items.map(item =>
                <ShopItem key={item.id} item={item}/>
            )}
        </Row>
    );
});

export default ItemList;