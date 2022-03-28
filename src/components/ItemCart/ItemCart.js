import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import CartContext from "../context/CartContext";

const ItemCart = ({ item, count }) => {

    const { removeOneItem } = useContext(CartContext);
    const { id, price, title, image } = item;

    const handleRemoveOneItem = () => {
        removeOneItem(item)
    }

    return (
        <div className="itemCart" key={id}>
            <img src={`/assets/productos/${image}`} alt="" />
            <div className="itemCart__info">
                <p>{title}</p>
                <p>Cantidad: <span >{count}</span></p>
                <p>Precio unitario: <span>${price}</span></p>
            </div>
            <p className="itemCart__precio">${price * count} </p>
            <FontAwesomeIcon icon={faTrashAlt} className="itemCart__borrar" onClick={handleRemoveOneItem} />
        </div>
    )
}

export default ItemCart;