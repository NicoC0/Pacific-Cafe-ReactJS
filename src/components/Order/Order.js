import React, { useContext } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
import Logo from "../../assets/logoNegro.png"

const Order = () => {
    const { clear } = useContext(CartContext)
    const { orderID } = useParams();

    return (
        <div className='order-container'>
            <img src={Logo} alt="Logo Pacific" />
            <h2>¡Muchas gracias por comprar en Pacific!</h2>
            <h4>Su orden de compra es:<br /> {orderID}</h4>
            <h4>Si desea limpiar su carrito presione el botón de abajo.</h4>
            <Link to='/'>
                <button onClick={clear}>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default Order;