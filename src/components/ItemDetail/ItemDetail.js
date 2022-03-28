import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../context/CartContext';


const ItemDetails = (details) => {
    const { id, image, title, price, description, itemStock } = details;

    const { addItem } = useContext(CartContext)
    const [item, setItem] = useState(0);
    const [stock, setStock] = useState(itemStock);
    const [styleCart, setStyleCart] = useState({
        'display': 'block'
    })
    const [styleCheckout, setStyleCheckout] = useState({
        'display': 'none'
    })

    const onAdd = () => {
        item < stock && setItem(item + 1);
    }

    const onRemove = () => {
        item > 0 && setItem(item - 1);
    }

    const onBuy = () => {
        if (item > 0) {
            const itemComprado = {
                id: id,
                image: image,
                title: title,
                price: price,
                description: description
            }
            addItem(itemComprado, item)
            setStock(stock - item)
            setItem(0)
            setStyleCart({
                'display': 'none'
            })
            setStyleCheckout({
                'display': 'block'
            })
        }
    }

    return (
        <div className="item">
            <img className="item__imagen" src={`/assets/productos/${image}`} alt="" />
            <div className="item__contenido">
                <h2 className="item__titulo">{title}</h2>
                <p className="item__precio">${price}</p>
                <p className="item__stock">Actualmente hay <span>{stock}</span> unidades en stock.</p>
                <p className="item__descripcion">{description}</p>
                <ItemCount onAdd={onAdd} onRemove={onRemove} quantity={item}
                    onBuy={onBuy} styleCart={styleCart} styleCheckout={styleCheckout} />
            </div>
        </div>
    );
}

export default ItemDetails;