import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
//Context
import CartContext from "../context/CartContext"

const Cart = ({ show, hide }) => {

    const { clear, totalPrice, cartItems } = useContext(CartContext)

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className="mainContainer">
                <div className="header">
                    <div className="cerrarIcono">
                        <FontAwesomeIcon icon={faTimes} onClick={hide} />
                    </div>
                </div>
                <div className="cartListContainer">
                    {cartItems.length !== 0 ? (
                        cartItems.map(e => {
                            return <ItemCart key={e.item.id} {...e} />
                        })
                    ) : (<div>No tienes productos en el carrito.</div>)}
                </div>
                <div className="div-botones" >
                    <div className="div-precio">
                        <p>Total de su compra:</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <div className="botones-container">
                        <button className="boton-limpiarCarrito" onClick={clear} >Vaciar</button>
                        <Link to="/cart">
                            <button className="boton-generarOrden" onClick={hide}>Finalizar compra</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;