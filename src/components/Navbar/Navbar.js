import React, { useContext } from "react"
import logo from "../../assets/logo.png"
import CardWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
const Navbar = () => {

    const { cartItems } = useContext(CartContext)

    const openSubMenu = (e) => {
        if (e.target.classList.contains("show")) {
            e.target.classList.remove("show")
        } else {
            e.target.classList.add("show")
        }
    }

    return (
        <header className="Navbar">
            <Link className="Navbar__logo" to='/' >
                <Link to="/"><img src={logo} alt="" /></Link>
            </Link>
            <nav className="Navbar__nav">
                <ul className="Navbar__menu">
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    
                    <li className="Navbar__productos" onClick={openSubMenu}>
                        Categorías
                        <ul className="menu-desplegable">
                            <Link to="/category/cafe">
                                <div>Café preparado</div>
                            </Link>
                            <Link to="/category/molido">
                                <div>Café molido</div>
                            </Link>
                            <Link to="/category/grano">
                                <div>Café en grano</div>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="Navbar__cart">
                {
                    cartItems.length !== 0 ? (
                        <CardWidget />
                    ): (<div></div>)        
                }
            </div>
        </header>
    )
}

export default Navbar;