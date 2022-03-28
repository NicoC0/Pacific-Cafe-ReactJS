import React, { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import validateInfo from "./validateInfo"
import useForm from "./useForm"
import CartContext from "../context/CartContext"
import db from "../../firebase"
import { collection, addDoc } from "@firebase/firestore"

const CartCheckout = () => {

    const { handleChange, handleSubmit, values, errors, submit } = useForm(validateInfo);

    const { cartItems, clear, totalPrice, totalItems } = useContext(CartContext)
    const navigate = useNavigate();

    let ordenID;

    const handleGenerarOrden = () => {
        const nuevoPedido = {
            comprador: {
                Nombre: values.nombreUser,
                Apellido: values.apellidoUser,
                Email: values.emailUser,
                Email2: values.emailUser2,
                Telefono: values.telefonoUser,
                Direccion: values.direccionUser,
                Ciudad: values.ciudadUser,
                CodigoPostal: values.codPostalUser,
                Provincia: values.provinciaUser
            },
            productos: cartItems,
            precioTotal: totalPrice,
            fecha: Date()
        }
        enviarOrdenFirebase(nuevoPedido)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submit) {
            handleGenerarOrden()
        }
    }, [errors])

    const enviarOrdenFirebase = async (nuevoPedido) => {
        const ordenFirebase = collection(db, "pedidos");
        const orden = await addDoc(ordenFirebase, nuevoPedido);
        ordenID = orden.id;
        navigate(`/order/${ordenID}`)
        
    }


    return (
        <div className="cartCheckout__container">
            {
                cartItems.length !== 0 ? (
                    <div className="cartCheckout__container">
                        <div className="cartCheckout__productos">
                            <h2>Tu carrito</h2>
                            {cartItems.map(e => {
                                return <ItemCart key={e.item.id} {...e} />
                            })
                            }
                            <Link to="/">
                                <button className="boton-borrar" onClick={clear}>Vaciar carrito</button>
                            </Link>
                        </div>
                        <form className="cartCheckout__form" onSubmit={handleSubmit}>
                            <h2>Tus datos personales</h2>
                            {errors.nombreUser && <label>{errors.nombreUser}</label>}
                            <input
                                id="nombreUser"
                                type="text"
                                name="nombreUser"
                                className="estiloInput"
                                placeholder="Ingrese su nombre"
                                value={values.nombreUser}
                                onChange={handleChange}
                            />
                           
                            {errors.apellidoUser && <label>{errors.apellidoUser}</label>}
                            <input
                                id="apellidoUser"
                                type="text"
                                name="apellidoUser"
                                className="estiloInput"
                                placeholder="Ingrese su apellido"
                                value={values.apellidoUser}
                                onChange={handleChange}
                            />
                            
                            {errors.emailUser && <label>{errors.emailUser}</label>}
                            <input
                                id="emailUser"
                                type="email"
                                name="emailUser"
                                className="estiloInput"
                                placeholder="Ingrese su email"
                                value={values.emailUser}
                                onChange={handleChange}
                            />
                            {errors.emailUser2 && <label>{errors.emailUser2}</label>}
                            <input
                                id="emailUser2"
                                type="email"
                                name="emailUser2"
                                className="estiloInput"
                                placeholder="Ingrese nuevamente su email"
                                value={values.emailUser2}
                                onChange={handleChange}
                            />

                            {errors.telefonoUser && <label>{errors.telefonoUser}</label>}
                            <input
                                id="telefonoUser"
                                type="number"
                                name="telefonoUser"
                                className="estiloInput"
                                placeholder="Ingrese su teléfono"
                                value={values.telefonoUser}
                                onChange={handleChange}
                            />

                            <h2>Datos de envío</h2>
                            <input
                                id="direccionUser"
                                type="text"
                                name="direccionUser"
                                className="estiloInput"
                                placeholder="Ingrese su dirección"
                                value={values.direccionUser}
                                onChange={handleChange}
                            />
                            {errors.direccionUser && <label>{errors.direccionUser}</label>}
                            <div className='col-2' >
                                <div>
                                    <input
                                        id="ciudadUser"
                                        type="text"
                                        name="ciudadUser"
                                        className="estiloInput"
                                        placeholder="Ingrese su ciudad"
                                        value={values.ciudadUser}
                                        onChange={handleChange}
                                    />
                                    {errors.ciudadUser && <label>{errors.ciudadUser}</label>}
                                </div>
                                <div>
                                    <input
                                        id="codPostalUser"
                                        type="text"
                                        name="codPostalUser"
                                        className="estiloInput"
                                        placeholder="Ingrese su cod. postal"
                                        value={values.codPostalUser}
                                        onChange={handleChange}
                                    />
                                    {errors.codPostalUser && <label>{errors.codPostalUser}</label>}
                                </div>

                            </div>
                            <input
                                className="estiloInput"
                                type="text"
                                name="provinciaUser"
                                id="provinciaUser"
                                placeholder="Ingrese su provincia"
                                value={values.provinciaUser}
                                onChange={handleChange}
                            />
                            {errors.provinciaUser && <label>{errors.provinciaUser}</label>}
                            <button className="boton-generarOrden" type="submit">Generar orden</button>
                            <div className="informe">
                                <p>Estás a punto de comprar un total de <span>{totalItems}</span> productos por el precio de <span>${totalPrice}</span></p>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="sinProductos">
                        <h3>Usted no tiene productos en su carrito</h3>
                        <Link to="/">
                            <button className="boton-irTienda">Ir a comprar</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default CartCheckout;