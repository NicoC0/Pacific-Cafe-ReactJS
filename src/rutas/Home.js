import React from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Portada from "../components/Portada/Portada"

const Home = () => {
    return (
        <div>
            <Portada />
            <ItemListContainer />
        </div>
    )
}

export default Home;