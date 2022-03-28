import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import ItemDetails from '../ItemDetail/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress'
import db from "../../firebase";
import { doc, getDoc, getDocs } from "@firebase/firestore"


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [itemData, setItemData] = useState([])

    async function getProduct(db) {
        const docRef = doc(db, "productos", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setItemData(docSnap.data())
        }
    }

    useEffect(() => {
        getProduct(db)
    }, [])

    return (
        <div className="itemDetailContainer">
            {
                itemData.length !== 0 ? (
                    <ItemDetails key={itemData.id} id={itemData.id} image={itemData.image} title={itemData.title} price={itemData.price} description={itemData.description} itemStock={itemData.stock} />
                ) : (
                    <div>
                        <CircularProgress className="itemDetailContainer__circularProgress" sx={{ color: "black" }} />
                        <p>El producto no existe</p>
                    </div>
                )
            }
        </div>
    )
}

export default ItemDetailContainer;