import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("productosCart")) || [])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        setTotalItems(handleTotalItems())
        setTotalPrice(handleTotalPrice())
        addLocalStorage()
    }, [cartItems])

    const addItem = (item, count) => {
        let cartElement = { item, count }
        let cartAux = []
        if (isInCart(item)) {
            cartElement = cartItems.find(e => e.item.id === item.id)
            cartElement.count = cartElement.count + count
            cartAux = [...cartItems]
        } else {
            cartAux = [cartElement, ...cartItems]
        }
        setCartItems(cartAux)
    }

    const addLocalStorage = () => {
        localStorage.setItem("productosCart", JSON.stringify(cartItems))
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            const cartElements = cartItems.filter(e => e.item.id !== item.id) || []
            setCartItems([...cartElements])
        }
    }

    const clear = () => {
        return setCartItems([])
    }

    const isInCart = (item) => {
        return cartItems && cartItems.some(e => e.item.id === item.id)
    }

    const removeOneItem = item => {
        if (isInCart(item)) {
            let cartElement = cartItems.find(e => e.item.id === item.id)
            if (cartElement.count === 1) {
                removeItem(item)
            } else {
                let cart = cartItems
                cart.map(e => {
                    if (e.item.id === item.id) {
                        e.count = e.count - 1
                    }
                    return e
                })
                setCartItems([...cart])
            }
        }
    }

    const handleTotalPriceByItem = () => {
        let newCartItems = cartItems
        const totalPriceCart = newCartItems.map(e => {
            return {
                ...e,
                price: e.item.price * e.count
            }
        })
        return totalPriceCart
    }

    const handleTotalItems = () => {
        const initialValue = 0
        return (
            cartItems && cartItems.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count
            }, initialValue)
        )
    }

    const handleTotalPrice = () => {
        const cartAux = handleTotalPriceByItem()
        const initialValue = 0
        return (cartAux && cartAux.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
        }, initialValue)
        )
    }
   

    const data = {
        addItem,
        removeItem,
        clear,
        isInCart,
        removeOneItem,
        cartItems,
        handleTotalPriceByItem,
        totalPrice,
        totalItems  
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;