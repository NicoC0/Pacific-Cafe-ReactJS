import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../../rutas/Home"
import Category from "../../rutas/Category"
import ItemDetailP from "../../rutas/ItemDetailP"
import Checkout from "../../rutas/Checkout"
import OrderPage from "../../rutas/OrderPage"
import Error404 from "../../rutas/Error404"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
                <Route path='/cart' element={<Checkout />} />
                <Route path="/item/:id" element={<ItemDetailP />} />
                <Route path='/category/:category' element={<Category />} />
                <Route path='/order/:orderID' element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
    )
}