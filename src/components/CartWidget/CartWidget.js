import React, { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from "../Cart/Cart";
import CartContext from "../context/CartContext"

const CardWidget = () => {

    const [showCart, setShowCart] = useState(false)
    const { totalItems } = useContext(CartContext)

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (
        <div className="cartWidget">
            <FontAwesomeIcon className="cartWidget__icon" icon={faShoppingCart} onClick={handleCart} />
            {totalItems !== 0 ? (
                <p className="cartWidget__cant" onClick={handleCart}> {totalItems}</p>
            ) : (<p className="cartWidget__cant" style={{ display: "none" }}>{totalItems}</p>)

            }
            <Cart show={showCart} hide={handleCart} />
        </div>
    )
}

export default CardWidget;