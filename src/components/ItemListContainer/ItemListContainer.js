import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "../ItemList/ItemList"
import db from "../../firebase"
import { collection, getDocs, query, where } from "@firebase/firestore"

const ItemListContainer = () => {

    const { category } = useParams();
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        getProducts(db)
    }, [category])

    async function getProducts(db) {
        const productsList = [];

        let items = category
            ? query(
                collection(db, "productos"),
                where("category", '==', category)
            )
            : collection(db, "productos")

        const itemsSnapshot = await getDocs(items)
        const listaItem = itemsSnapshot.docs.map(doc => doc.data())
        const listaItemID = itemsSnapshot.docs.map(doc => doc.id)

        for (let i = 0; i < listaItem.length; i++) {
            productsList.push({ ...listaItem[i], id: listaItemID[i] })
        }

        return setItemsData(productsList)
    }

    return (
        <div>
            <ItemList itemArray={itemsData} />
        </div>
    )
}

export default ItemListContainer;