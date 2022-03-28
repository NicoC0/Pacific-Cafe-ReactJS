import React from "react"
import error404 from "../assets/404.png"

const Error404 = () => {
    return (
        <div className="error404">
            <img src={error404} alt="Error, página no encontrada"/>
        </div>
    )
}

export default Error404;